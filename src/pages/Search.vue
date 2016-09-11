<template>
  <header-component></header-component>

  <section class="hero is-info is-small">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Searching {{ searchParams.originLocation | titleCase }} to {{ searchParams.destinationLocation | titleCase }}
        </h1>
        <h2 class="subtitle">20/03/2016 - 20/03/2018</h2>
      </div>
    </div>
  </section>

  <section class="search-results">
    <div class="container is-hidden-mobile is-hidden-tablet-only">
      <div class="columns has-text-centered">
        <div v-for="day in days" class="column">
          {{ day }}
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns is-block-tablet is-flex-desktop">
        <div class="column" v-for="i in [1,2,3,4,5,6,7]">
          <div class="box">
            <h3 class="search-results-date">12/02/2016</h3>
            <div class="search-result" v-for="i in [1,2,3,4]">
              <span class="search-result-time">12:30</span>
              <a class="button is-small">£12</a>
            </div>
          </div>
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

      if (!result) {
        this.notification.showMessage('A location passed was not in the Megabus UK station list', 'danger')
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

<style lang="scss">
  .search-results {
    margin-top: 20px;
  }

  .search-results-date {
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
  }

  .search-result {
    margin-bottom: 5px;
    text-align: center;
  }

  .search-result-time {
    font-size: 11px;
    margin-right: 5px;
  }

  // Tablet
  @media only screen and (max-width : 979px) {
    .box {
      border-radius: 0;
    }
  }

</style>
