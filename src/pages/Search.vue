<template>
  <header-component></header-component>

  <section class="hero is-info is-small">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          {{ searchParams.originLocation | titleCase }} to {{ searchParams.destinationLocation | titleCase }}
        </h1>
        <h2 class="subtitle">{{ searchParams.startDate }} - {{ searchParams.endDate }}</h2>
      </div>
    </div>
  </section>

  <section class="search-results">
    <div class="container has-text-centered is-hidden-mobile is-hidden-tablet-only">
      <div class="columns">
        <div v-for="day in days" class="column">
          {{ day }}
        </div>
      </div>
    </div>
    <div class="container">
      <!-- Rows for each week -->
      <div v-for="week in resultsStructure" class="columns has-text-centered is-block-tablet is-flex-desktop">
        <!-- Columns for each day of the week -->
        <div v-for="day in week" class="column">
          <div class="box">
            <a v-show="!resultsChunked[resultsStructure.indexOf(week)]" class="button is-loading box-loading"></a>
            <h3 class="search-results-date">{{ resultsChunked[resultsStructure.indexOf(week)][day].date }}</h3>
            <div v-show="resultsChunked[resultsStructure.indexOf(week)][day].results" v-for="result in resultsChunked[resultsStructure.indexOf(week)][day].results" class="search-result">
              <div class="columns is-gapless">
                <div class="column">  
                  <span class="search-result-time">{{ result.time }}</span>
                </div>
                <div class="column">                
                  <a @click.prevent="goToMegabusWebsiteResult(resultsChunked[resultsStructure.indexOf(week)][day].date)" :class="{'button': true, 'is-small': true, 'search-result-price': true, 'price-low': result.price <= firstThirdPriceBound, 'price-medium': result.price > firstThirdPriceBound && result.price <= secondThirdPriceBound, 'price-high': result.price > secondThirdPriceBound}">£{{ result.price }}</a>
                </div>
              </div>
            </div>
            <div v-show="resultsChunked[resultsStructure.indexOf(week)][day].results.length === 0">
              No results
            </div>
          </div>
        </div>
        <!-- Generate blank day columns to fill the row  -->
        <div 
          v-if="week.length % 7 !== 0"
          v-for="i in 7 - week.length % 7" 
          class="column is-hidden-mobile is-hidden-tablet-only">
        </div> 
      </div>
    </div>
  </section>

  <footer-component></footer-component>
</template>

<script>
import LocationsJson from '../locations.json'
import NotificationStore from '../NotificationStore.js'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'

import {BASE_MEGABUS_URL} from '../config'

export default {
  data () {
    return {
      locations: LocationsJson,
      notification: NotificationStore,
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      searchParams: {
        originLocation: this.$route.params.originLocation,
        destinationLocation: this.$route.params.destinationLocation,
        startDate: this.$route.params.startDate,
        endDate: this.$route.params.endDate
      },
      resultsStructure: [], // Empty array for weeks and day structure
      resultsLong: [], // Array of day results
      lowestPrice: 999, // High no so the first comparison will set the initial value
      highestPrice: 0, // Same as above in reverse
      firstThirdPriceBound: 0,
      secondThirdPriceBound: 0
    }
  },
  computed: {
    originCode () {
      return this.lookupCodeFromLocation(this.searchParams.originLocation)
    },
    destinationCode () {
      return this.lookupCodeFromLocation(this.searchParams.destinationLocation)
    },
    resultsChunked () {
      // Chunk long array into week arrays
      // Using computed property because data is returned in promises
      return this.chunkArrayToWeeks(this.resultsLong)
    }
  },
  ready () {
    this.validateFields()
    this.makeResultsStructureArray()
    this.getResults()
  },
  components: {
    HeaderComponent,
    FooterComponent
  },
  methods: {
    validateFields () {
      if (
        !this.isEndDateAfterStartDate() ||
        !this.isValidLocation(this.searchParams.originLocation) ||
        !this.isValidLocation(this.searchParams.destinationLocation) ||
        !this.isValidDate(this.searchParams.startDate) ||
        !this.isValidDate(this.searchParams.endDate)) {
        this.$route.router.go('/')
      }
    },
    newDateObject (string) {
      let components = string.split('-')
      let day = components[0]
      let month = components[1]
      let year = components[2]
      return new Date(year, month - 1, day)
    },
    isEndDateAfterStartDate () {
      let result = false

      if (this.newDateObject(this.searchParams.startDate) < this.newDateObject(this.searchParams.endDate)) {
        result = true
      }

      if (!result) {
        this.notification.showMessage('Search start date is after the end date', 'danger')
      }

      return result
    },
    isValidDate (string) {
      let result = false
      let todaysYear = new Date().getFullYear()
      let comp = string.split('-')
      let day = comp[0]
      let month = comp[1]
      let year = comp[2]

      if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= todaysYear && year <= todaysYear + 1) {
        let date = new Date(comp[2], comp[1] - 1, comp[0])
        if (date) {
          result = true
        }
      }

      if (!result) {
        this.notification.showMessage('Dates should formatted as DD/MM/YYYY and be in the future', 'danger')
      }

      return result
    },
    getLengthBetweenDates () {
      let oneDay = 24 * 60 * 60 * 1000
      let numberOfDays = Math.abs(this.newDateObject(this.$route.params.startDate).getTime() - this.newDateObject(this.$route.params.endDate).getTime()) / oneDay
      numberOfDays = Math.round(numberOfDays)
      return numberOfDays
    },
    isValidLocation (string) {
      let result = false
      this.locations.forEach((location) => {
        if (location.name.toLowerCase() === string) {
          result = true
        }
      })

      if (!result) {
        this.notification.showMessage('A location passed was not in the Megabus UK station list', 'danger')
      }

      return result
    },
    lookupCodeFromLocation (string) {
      let result = false
      this.locations.forEach((location) => {
        if (location.name.toLowerCase() === string) {
          result = location.code
        }
      })
      return result
    },
    makeResultsStructureArray () {
      // Builds the required column layout before the api returns results
      let daysArray = []
      for (let day = 0; day <= this.getLengthBetweenDates(); day++) {
        daysArray.push(day)
      }

      // Chunks into weeks then resets the day values to its index in that week
      let chunkedWeeks = this.chunkArrayToWeeks(daysArray)
      for (let week = 0; week < chunkedWeeks.length; week++) {
        for (let day = 0; day < chunkedWeeks[week].length; day++) {
          chunkedWeeks[week][day] = day
        }
      }
      this.resultsStructure = chunkedWeeks
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
      this.resultsLong = []
      for (let day = 0; day <= this.getLengthBetweenDates(); day++) {
        let activeDayObject = this.newDateObject(this.searchParams.startDate)
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

          this.resultsLong.push(activeDayResult)
        })
      }
    },
    priceCheck (price) {
      price = parseFloat(price)
      if (price < this.lowestPrice) {
        this.lowestPrice = price
      }

      if (price > this.highestPrice) {
        this.highestPrice = price
      }
    },
    setPriceBounds () {
      let range = this.highestPrice - this.lowestPrice
      let thirtyPercent = range / 3
      this.firstThirdPriceBound = this.lowestPrice + thirtyPercent
      this.secondThirdPriceBound = this.lowestPrice + thirtyPercent * 2
    },
    goToMegabusWebsiteResult (date) {
      let url = BASE_MEGABUS_URL + '&originCode=' + this.originCode
      url += '&destinationCode=' + this.destinationCode
      url += '&outboundDepartureDate=' + this.replaceAll(date, '-', '%2f')
      window.open(url)
    },
    replaceAll (string, target, replacement) {
      return string.split(target).join(replacement)
    }
  }
}
</script>

<style lang="scss">
  .search-results {
    margin-top: 20px;
  }

  .box-loading {
    border: none;
  }

  .search-results-date {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .search-result {
    margin-bottom: 5px;
  }

  .search-result-time {
    display: block;
    font-size: 11px;
    height: 24px;
    line-height: 24px;
    margin-right: 5px;
    text-align: right;
  }

  .search-result-price {
    border-color: transparent !important;
    color: white !important;
    float: left;
  }

  .price-low {
    background-color: #27ae60;
    
    &:hover {
      background-color: darken(#27ae60, 5);
    }
  }

  .price-medium {
    background-color: #e6a83c;

    &:hover {
      background-color: darken(#e6a83c, 5);
    }
  }

  .price-high {
    background-color: #e74c3c;

    &:hover {
      background-color: darken(#e74c3c, 5);
    }
  }

  // Tablet
  @media only screen and (max-width : 979px) {
    .box {
      border-radius: 0;
    }

    .search-result {
      display: inline-block;
      margin-right: 10px;
    }

    .search-result-time {
      text-align: center;
    }

    .search-result-price {
      float: none;
    }
  }

  // Mobile
  @media only screen and (max-width : 768px) {
    .search-result-time {
      margin-right: 0;
    }
  }

</style>
