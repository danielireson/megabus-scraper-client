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
          <label class="label">Start date for search</label>
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
        <a href @click.prevent="_goToSearchResultsPage" class="button is-fullwidth is-primary is-outlined">
          Search for prices
        </a>
      </p>
    </div>
  </section>
</template>

<script>
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
        this._setParamsToSessionStorage(params)
      },
      deep: true
    }
  },
  components: {
    SelectDate,
    SelectLocation
  },
  created () {
    this._getParamsFromSessionStorage()
  },
  methods: {
    _goToSearchResultsPage () {
      if (ValidationService.isValid(this.searchParams)) {
        this.$router.go({name: 'search', params: this.searchParams})
      }
    },
    _getParamsFromSessionStorage () {
      this.searchParams = {
        originLocation: this._getKeyFromSessionStorage('originLocation'),
        destinationLocation: this._getKeyFromSessionStorage('destinationLocation'),
        startDate: this._getKeyFromSessionStorage('startDate'),
        endDate: this._getKeyFromSessionStorage('endDate')
      }
    },
    _setParamsToSessionStorage (params) {
      window.sessionStorage.setItem('originLocation', params.originLocation)
      window.sessionStorage.setItem('destinationLocation', params.destinationLocation)
      window.sessionStorage.setItem('startDate', params.startDate)
      window.sessionStorage.setItem('endDate', params.endDate)
    },
    _getKeyFromSessionStorage (key) {
      return window.sessionStorage.getItem(key) || ''
    }
  }
}
</script>
