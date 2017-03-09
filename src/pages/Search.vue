<template>
  <header-component show-edit-search-button="true"></header-component>
  <hero :search-params="searchParams"></hero>
  <search-results
    :loading="loading"
    :results="results"
    :prices="prices"
    :go-to-megabus-result="goToMegabusResult">
  </search-results>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import Hero from '../components/Hero'
import SearchResults from '../components/SearchResults'

import {BASE_MEGABUS_URL} from '../config/vars'

import DateService from '../services/DateService'
import LocationService from '../services/LocationService'
import NotificationService from '../services/NotificationService'
import ValidationService from '../services/ValidationService'

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
    HeaderComponent,
    FooterComponent,
    Hero,
    SearchResults
  },
  activate (done) {
    if (!ValidationService.isValid(this.searchParams)) {
      this.$router.go('/home')
    }
    done()
  },
  created () {
    this.makeResultsStructureArray()
  },
  ready () {
    this.getResults()
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
    getResults () {
      this.makeApiRequest().then((response) => {
        this.results = this.chunkArrayToWeeks(response.data.data)
        this.setPriceBounds(Number(response.data.stats.lowestPrice), Number(response.data.stats.highestPrice))
        this.loading = false
      }, (error) => {
        NotificationService.showMessage(error.data.message, 'danger')
      })
    },
    makeApiRequest (startDate, endDate) {
      let url = 'search/'
      url += this.searchParams.originLocation + '/'
      url += this.searchParams.destinationLocation + '/'
      url += this.searchParams.startDate + '/'
      url += this.searchParams.endDate + '/'
      return this.$http.get(url)
    },
    setPriceBounds (lowestPrice, highestPrice) {
      let range = highestPrice - lowestPrice
      let boundRange = range / 3
      this.prices.firstThirdPriceBound = lowestPrice + boundRange
      this.prices.secondThirdPriceBound = lowestPrice + (boundRange * 2)
    },
    makeResultsStructureArray () {
      // Builds the required column layout before the api returns results
      let daysArray = []
      for (let day = 0; day <= this.lengthBetweenDates; day++) {
        daysArray.push(day)
      }
      this.results = this.chunkArrayToWeeks(daysArray)
    },
    chunkArrayToWeeks (array) {
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
