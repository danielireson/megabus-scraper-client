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
                  <select v-model="originLocation">
                    <option disabled selected>Select location</option>
                    <option v-for="location in locations" value="location.code">{{ location.name }}</option>
                  </select>
                </span>
              </p> 
              <label class="label">Start date for search</label>
              <div id="startDate">
                <datepicker 
                  placeholder="Select date" 
                  :config="{ dateFormat: 'd-m-Y' }"
                  :value.sync="startDate">
                </datepicker>
              </div>             
            </div>
            <div class="column is-half">
              <label class="label">Destination</label>
              <p class="control">
                <span class="select is-fullwidth">
                  <select v-model="destinationLocation">
                    <option disabled selected>Select location</option>
                    <option v-for="location in locations" value="location.code">{{ location.name }}</option>
                  </select>
                </span>
              </p> 
              <label class="label">End date for search</label>
              <div id="endDate">
                <datepicker 
                  placeholder="Select date" 
                  :config="{ dateFormat: 'd-m-Y' }"
                  :value.sync="endDate">
                </datepicker>
              </div>          
            </div>
          </div>
          <p class="control">
            <a @click="debug()" class="button is-fullwidth is-primary is-outlined">
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
import LocationsJson from '../locations.json'
import Datepicker from 'vue-bulma-datepicker'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'

export default {
  data () {
    return {
      locations: LocationsJson,
      originLocation: '',
      destinationLocation: '',
      startDate: '',
      endDate: ''
    }
  },
  components: {
    HeaderComponent,
    FooterComponent,
    Datepicker
  }
}
</script>

<style lang="scss">
  .cur_year {
    display: none !important;
  }
</style>
