<template>
  <header-component></header-component>

  <section class="hero is-info is-small">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Searching {{ searchParams.originLocation | ucfirst }} to {{ searchParams.destinationLocation | ucfirst }}
        </h1>
        <h2 class="subtitle">20/03/2016 - 20/03/2018</h2>
      </div>
    </div>
  </section>

  <footer-component></footer-component>
</template>

<script>
import LocationsJson from '../locations.json'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'

export default {
  data () {
    return {
      locations: LocationsJson,
      searchParams: {
        originLocation: this.$route.params.originLocation,
        destinationLocation: this.$route.params.destinationLocation,
        startDate: this.$route.params.startDate,
        endDate: this.$route.params.endDate
      }
    }
  },
  computed: {
    originCode () {
      return this.lookupCodeFromLocation(this.searchParams.originLocation)
    },
    destinationCode () {
      return this.lookupCodeFromLocation(this.searchParams.destinationLocation)
    }
  },
  ready () {
    this.validateFields()
  },
  components: {
    HeaderComponent,
    FooterComponent
  },
  methods: {
    validateFields () {
      if (
        !this.isValidLocation(this.searchParams.originLocation) ||
        !this.isValidLocation(this.searchParams.destinationLocation) ||
        !this.isValidDate(this.searchParams.startDate) ||
        !this.isValidDate(this.searchParams.endDate)) {
        this.$route.router.go('/')
      }
    },
    isValidLocation (string) {
      let result = false
      this.locations.forEach(function (location) {
        if (location.name.toLowerCase() === string) {
          result = true
        }
      })
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

      return result
    },
    lookupCodeFromLocation (string) {
      let result = false
      this.locations.forEach(function (location) {
        if (location.name.toLowerCase() === string) {
          result = location.code
        }
      })
      return result
    }
  }
}
</script>

<style lang="sass">

</style>
