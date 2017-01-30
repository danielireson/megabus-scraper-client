<template>
  <search
    :search-params="searchParams"
    :loading="loading" 
    :results="results"
    :prices="prices"
    :go-to-megabus-result="goToMegabusResult">
  </search>
</template>

<script>
import {BASE_MEGABUS_URL} from '../config/vars'

import DateService from '../services/DateService'
import LocationService from '../services/LocationService'
import NotificationService from '../services/NotificationService'
import ValidationService from '../services/ValidationService'

import Search from './Search'

export default {
  data () {
    return {
      searchParams: {
        originLocation: this.$route.params.originLocation,
        destinationLocation: this.$route.params.destinationLocation,
        startDate: this.$route.params.startDate,
        endDate: this.$route.params.endDate
      },
      loading: true,
      lengthBetweenDates: DateService.getLengthBetweenDates(this.$route.params.startDate, this.$route.params.endDate),
      results: [],
      prices: {
        firstThirdPriceBound: null,
        secondThirdPriceBound: null
      }
    }
  },
  components: {
    Search
  },
  activate (done) {
    if (!ValidationService.isValid(this.searchParams)) {
      this.$router.go('/home')
    }
    done()
  },
  created () {
    this._makeResultsStructureArray()
  },
  ready () {
    this._getResults()
  },
  methods: {
    goToMegabusResult (date) {
      let originCode = LocationService.getLocationCode(this.searchParams.originLocation)
      let destinationCode = LocationService.getLocationCode(this.searchParams.destinationLocation)
      let url = BASE_MEGABUS_URL + '&originCode=' + originCode
      url += '&destinationCode=' + destinationCode
      url += '&outboundDepartureDate=' + date.split('-').join('%2f')
      window.open(url)
    },
    _getResults () {
      this._makeApiRequest().then((response) => {
        this.results = this._chunkArrayToWeeks(response.data.data)
        this._setPriceBounds(Number(response.data.stats.lowestPrice), Number(response.data.stats.highestPrice))
        this.loading = false
      }, (error) => {
        NotificationService.showMessage(error.data.message, 'danger')
      })
    },
    _makeApiRequest (startDate, endDate) {
      let url = 'search/'
      url += this.searchParams.originLocation + '/'
      url += this.searchParams.destinationLocation + '/'
      url += this.searchParams.startDate + '/'
      url += this.searchParams.endDate + '/'
      return this.$http.get(url)
    },
    _setPriceBounds (lowestPrice, highestPrice) {
      let range = highestPrice - lowestPrice
      let boundRange = range / 3
      this.prices.firstThirdPriceBound = lowestPrice + boundRange
      this.prices.secondThirdPriceBound = lowestPrice + (boundRange * 2)
    },
    _makeResultsStructureArray () {
      // Builds the required column layout before the api returns results
      let daysArray = []
      for (let day = 0; day <= this.lengthBetweenDates; day++) {
        daysArray.push(day)
      }
      this.results = this._chunkArrayToWeeks(daysArray)
    },
    _chunkArrayToWeeks (array) {
      let resultsChunked = []
      for (let i = 0; i < array.length; i += 7) {
        let temp = array.slice(i, i + 7)
        resultsChunked.push(temp)
      }

      return resultsChunked
    }
  }
}
</script>
