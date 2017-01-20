<template>
  <header-component></header-component>

  <section class="hero is-info is-medium">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          The quickest way to search Megabus UK prices
        </h1>
      </div>
    </div>
  </section>

  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <section class="section">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-half">
              <label class="label">Origin</label>
              <p class="control">
                <span class="select is-fullwidth">
                  <select v-model="searchParams.originLocation">
                    <option value="" disabled selected>Select location</option>
                    <option v-for="location in locations" :value="location.name.toLowerCase()">{{ location.name }}</option>
                  </select>
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
                  <select v-model="searchParams.destinationLocation">
                    <option value="" disabled selected>Select location</option>
                    <option v-for="location in locations" :value="location.name.toLowerCase()">{{ location.name }}</option>
                  </select>
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
    </div>
  </div>

  <footer-component></footer-component>
</template>

<script>
import ValidationService from '../services/ValidationService'
import LocationService from '../services/LocationService'

import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import SelectDate from '../components/SelectDate'

export default {
  data () {
    return {
      locations: LocationService.getLocations(),
      searchParams: {
        originLocation: '',
        destinationLocation: '',
        startDate: '',
        endDate: ''
      }
    }
  },
  components: {
    HeaderComponent,
    FooterComponent,
    SelectDate
  },
  methods: {
    goToSearchResultsPage () {
      if (ValidationService.validate(this.searchParams)) {
        this.$router.go({name: 'search', params: this.searchParams})
      }
    }
  }
}
</script>
