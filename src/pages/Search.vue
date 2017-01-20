<template>
  <header-component></header-component>
  <hero :search-params="searchParams"></hero>
  <search-results
    :loading="loading"
    :results="results"
    :prices="prices"
    :go-to-megabus-result="goToMegabusResult">
  </search-results>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import Hero from '../components/Hero'
import SearchResults from '../components/SearchResults'

export default {
  props: ['searchParams', 'loading', 'results', 'prices', 'goToMegabusResult'],
  components: {
    HeaderComponent,
    FooterComponent,
    Hero,
    SearchResults
  }
}
</script>
