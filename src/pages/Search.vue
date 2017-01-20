<template>
  <header-component></header-component>
  <hero :search-params="searchParams"></hero>
  <search-results
    :loading="loading" 
    :origin-code="originCode" 
    :destination-code="destinationCode" 
    :results="results"
    :prices="prices">
  </search-results>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import Hero from '../components/Hero'
import SearchResults from '../components/SearchResults'

export default {
  props: ['searchParams', 'loading', 'originCode', 'destinationCode', 'results', 'prices'],
  components: {
    HeaderComponent,
    FooterComponent,
    Hero,
    SearchResults
  }
}
</script>
