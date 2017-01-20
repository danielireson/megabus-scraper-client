<template>
  <header-component></header-component>
  <hero>The quickest way to search Megabus UK prices</hero>

  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
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

import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import SelectDate from '../components/SelectDate'
import SelectLocation from '../components/SelectLocation'
import Hero from '../components/Hero'

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
  components: {
    HeaderComponent,
    FooterComponent,
    SelectDate,
    SelectLocation,
    Hero
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
