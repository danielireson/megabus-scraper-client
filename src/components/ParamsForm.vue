<template>
  <section class="section">
    <div class="container">
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
            <a href @click.prevent="setStartDateTomorrow()" class="label-link">tomorrow</a>
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
          <label class="label">End date for search</label>
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
    </div>
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
  created () {
    this.getParamsFromSessionStorage()
  },
  methods: {
    setStartDateTomorrow () {
      this.searchParams.startDate = moment().add(1, 'days').format('DD-MM-YYYY')
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
  .label-link {
    float: right;
    font-size: 0.8em;
    margin-left: 5px;
    margin-top: 3px;
  }

  // Mobile
  @media only screen and (max-width : 768px) {
    .label-link {
      display: none;
    }
  }
</style>
