<template>
  <section class="section">
    <div class="columns is-mobile">
      <div class="column is-half">
        <label class="label">Origin</label>
        <p class="control">
          <span class="select is-fullwidth">
            <select-location :location.sync="searchParams.originLocation"></select-location>
          </span>
        </p> 
        <label class="label">
          Start date for search
          <div class="label-link-container">
            <a href @click.prevent="setStartDateTomorrow()" class="label-link">tomorrow</a>
          </div>
        </label>
        <div id="startDate">
          <select-date :date.sync="searchParams.startDate"></select-date>
        </div>
      </div>
      <div class="column is-half">
        <label class="label">Destination</label>
        <p class="control">
          <span class="select is-fullwidth">
            <select-location :location.sync="searchParams.destinationLocation"></select-location>
          </span>
        </p>
        <label class="label">
          End date for search
          <div class="label-link-container">
            <a href @click.prevent="setEndDateFourteenDays()" class="label-link">+14 days</a>
            <a href @click.prevent="setEndDateSevenDays()" class="label-link">+7 days</a>
          </div>
        </label>
        <div id="endDate">
          <select-date :date.sync="searchParams.endDate"></select-date>
        </div>
      </div>
    </div>
    <p class="control">
      <a href @click.prevent="goToSearchResultsPage" class="button is-fullwidth is-primary is-outlined">
        Search for prices
      </a>
    </p>
  </section>
</template>

<script>
import moment from 'moment'

import ValidationService from '../services/ValidationService'

import SelectDate from '../components/SelectDate'
import SelectLocation from '../components/SelectLocation'

export default {
  data () {
    return {
      searchParams: {
        originLocation: '',
        destinationLocation: '',
        startDate: '',
        endDate: ''
      }
    }
  },
  watch: {
    searchParams: {
      handler (params) {
        this.setParamsToSessionStorage(params)
      },
      deep: true
    }
  },
  components: {
    SelectDate,
    SelectLocation
  },
  ready () {
    this.getParamsFromSessionStorage()
  },
  methods: {
    setStartDateTomorrow () {
      this.searchParams.startDate = moment().add(1, 'days').format('DD-MM-YYYY')
    },
    setEndDateSevenDays () {
      let newDate = moment(this.searchParams.startDate, 'DD-MM-YYYY').add(7, 'days').format('DD-MM-YYYY')
      this.searchParams.endDate = newDate
    },
    setEndDateFourteenDays () {
      let newDate = moment(this.searchParams.startDate, 'DD-MM-YYYY').add(14, 'days').format('DD-MM-YYYY')
      this.searchParams.endDate = newDate
    },
    goToSearchResultsPage () {
      if (ValidationService.isValid(this.searchParams)) {
        this.$router.go({name: 'search', params: this.searchParams})
      }
    },
    getParamsFromSessionStorage () {
      this.searchParams = {
        originLocation: this.getKeyFromSessionStorage('originLocation'),
        destinationLocation: this.getKeyFromSessionStorage('destinationLocation'),
        startDate: this.getKeyFromSessionStorage('startDate'),
        endDate: this.getKeyFromSessionStorage('endDate')
      }
    },
    setParamsToSessionStorage (params) {
      window.sessionStorage.setItem('originLocation', params.originLocation)
      window.sessionStorage.setItem('destinationLocation', params.destinationLocation)
      window.sessionStorage.setItem('startDate', params.startDate)
      window.sessionStorage.setItem('endDate', params.endDate)
    },
    getKeyFromSessionStorage (key) {
      return window.sessionStorage.getItem(key) || ''
    }
  }
}
</script>

<style lang="scss">
  label {
    cursor: default;
  }

  .label-link-container {
    display: inline-block;
    float: right;
  }

  .label-link {
    float: right;
    font-size: 0.8em;
    margin: 3px 0 0 5px;
  }

  // Mobile
  @media only screen and (max-width : 768px) {
    .label-link-container {
      display: block;
      float: none;
    }

    .label-link {
      display: inline-block;
      float: none;
      margin: 0 5px 0 0;
    }
  }
</style>
