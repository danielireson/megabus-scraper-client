<template>
  <search
    :search-params="searchParams"
    :loading="loading" 
    :results="results"
    :prices="prices"
    :go-to-megabus-result="goToMegabusWebsiteResult">
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
      originCode: LocationService.lookupCodeFromLocation(this.$route.params.originLocation),
      destinationCode: LocationService.lookupCodeFromLocation(this.$route.params.destinationLocation),
      lengthBetweenDates: DateService.getLengthBetweenDates(this.$route.params.startDate, this.$route.params.endDate),
      results: [], // Empty array for weeks and day structure
      prices: {
        lowestPrice: 900, // High no so the first comparison will set the initial value
        highestPrice: 0, // Same as above in reverse
        firstThirdPriceBound: 0, // Prices less than = Green label
        secondThirdPriceBound: 0 // Prices greater than = Red label
      }
    }
  },
  ready () {
    if (!ValidationService.validate(this.searchParams)) {
      this.$router.go('/home')
    }

    this.makeResultsStructureArray()
    this.getResults()
  },
  components: {
    Search
  },
  methods: {
    goToMegabusResult (date) {
      let url = BASE_MEGABUS_URL + '&originCode=' + this.originCode
      url += '&destinationCode=' + this.destinationCode
      url += '&outboundDepartureDate=' + this.replaceAll(date, '-', '%2f')
      window.open(url)
    },
    replaceAll (string, target, replacement) {
      return string.split(target).join(replacement)
    },
    makeResultsStructureArray () {
      // Builds the required column layout before the api returns results
      let daysArray = []
      for (let day = 0; day <= this.lengthBetweenDates; day++) {
        daysArray.push(day)
      }

      // Chunks into weeks then resets the day values to its index in that week
      let chunkedWeeks = this.chunkArrayToWeeks(daysArray)
      for (let week = 0; week < chunkedWeeks.length; week++) {
        for (let day = 0; day < chunkedWeeks[week].length; day++) {
          chunkedWeeks[week][day] = day
        }
      }
      this.results = chunkedWeeks
    },
    chunkArrayToWeeks (array) {
      let resultsChunked = []
      for (let i = 0; i < array.length; i += 7) {
        let temp = array.slice(i, i + 7)
        resultsChunked.push(temp)
      }

      return resultsChunked
    },
    callScraperApi (date) {
      let url = 'search/'
      url += this.originCode + '/'
      url += this.destinationCode + '/'
      url += date
      return this.$http.get(url)
    },
    getResults () {
      let resultsLong = []
      this.loading = true
      for (let day = 0; day <= this.lengthBetweenDates; day++) {
        let activeDayObject = DateService.getDateObjectFromString(this.searchParams.startDate)
        activeDayObject.setDate(activeDayObject.getDate() + day)
        let activeDateString = activeDayObject.getDate() + '-' + (activeDayObject.getMonth() + 1) + '-' + activeDayObject.getFullYear()
        this.callScraperApi(activeDateString).then((response) => {
          let activeDayResult = {
            date: activeDateString,
            results: []
          }

          for (let i in response.data.data) {
            activeDayResult.results.push({
              journey: response.data.data[i]['journey'],
              time: response.data.data[i]['time'],
              duration: response.data.data[i]['duration'],
              price: parseFloat(response.data.data[i]['price'])
            })

            // Sets highest/lowest prices
            this.priceCheck(response.data.data[i]['price'])
            this.setPriceBounds()
          }

          resultsLong[day] = activeDayResult

          // Split into weeks if all responses have been received
          if (resultsLong.length === this.lengthBetweenDates + 1) {
            // Force dom to be ready when showing results
            setTimeout(() => {
              this.results = this.chunkArrayToWeeks(resultsLong)
              this.loading = false
            }, 0)
          }
        }, () => {
          NotificationService.showMessage('There was an error scraping results', 'danger')
          this.$router.go('/home')
        })
      }
    },
    priceCheck (price) {
      price = parseFloat(price)
      if (price < this.prices.lowestPrice) {
        this.prices.lowestPrice = price
      }

      if (price > this.prices.highestPrice) {
        this.prices.highestPrice = price
      }
    },
    setPriceBounds () {
      let range = this.prices.highestPrice - this.prices.lowestPrice
      let thirtyPercent = range / 3
      this.prices.firstThirdPriceBound = this.prices.lowestPrice + thirtyPercent
      this.prices.secondThirdPriceBound = this.prices.lowestPrice + thirtyPercent * 2
    }
  }
}
</script>
