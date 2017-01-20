<template>
  <header-component></header-component>
  <hero :search-params="searchParams"></hero>
  <search-results 
    :originLocation="searchParams.originLocation"
    :destinationLocation="searchParams.destinationLocation"
    :startDate="searchParams.startDate"
    :endDate="searchParams.endDate">
  </search-results>
  <footer-component></footer-component>
</template>

<script>
import ValidationService from '../services/ValidationService'

import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import Hero from '../components/Hero'
import SearchResults from '../components/SearchResults'

export default {
  data () {
    return {
      searchParams: {
        originLocation: this.$route.params.originLocation,
        destinationLocation: this.$route.params.destinationLocation,
        startDate: this.$route.params.startDate,
        endDate: this.$route.params.endDate
      }
    }
  },
  ready () {
    if (!ValidationService.validate(this.searchParams)) {
      this.$router.go('/home')
    }
  },
  components: {
    HeaderComponent,
    FooterComponent,
    Hero,
    SearchResults
  }
}
</script>
