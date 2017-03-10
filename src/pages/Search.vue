<template>
  <header-component show-edit-search-button="true"></header-component>
  <hero :search-params="searchParams"></hero>
  <search-results
    :search-params="searchParams"
    :loading="searchService.state.loading"
    :results="searchService.state.results"
    :prices="searchService.state.prices">
  </search-results>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import Hero from '../components/Hero'
import SearchResults from '../components/SearchResults'

import SearchService from '../services/SearchService'
import ValidationService from '../services/ValidationService'

export default {
  data () {
    return {
      searchService: SearchService,
      searchParams: {
        originLocation: this.$route.params.originLocation,
        destinationLocation: this.$route.params.destinationLocation,
        startDate: this.$route.params.startDate,
        endDate: this.$route.params.endDate
      }
    }
  },
  components: {
    HeaderComponent,
    FooterComponent,
    Hero,
    SearchResults
  },
  activate (done) {
    if (!ValidationService.isValid(this.searchParams)) {
      this.$router.go('/home')
    }
    done()
  },
  created () {
    SearchService.getResults(this.searchParams)
  }
}
</script>
