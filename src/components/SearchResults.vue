<template>
  <section class="search-results">
    <div class="container">
      <!-- Rows for each week -->
      <div v-for="week in results" class="columns has-text-centered is-block-tablet is-flex-desktop">
        <!-- Columns for each day result -->
        <search-result-day 
          v-for="day in week"
          :day="day"
          :loading="loading"
          :search-params="searchParams"
          :prices="prices">
        </search-result-day>
        <!-- Generate blank day columns to fill the row  -->
        <div 
          v-if="week.length % 7 !== 0"
          v-for="i in 7 - week.length % 7" 
          class="column is-hidden-mobile is-hidden-tablet-only">
        </div>
      </div>
      <div v-show="loading === false && results.length === 0" class="column box has-text-centered">
        There are no journeys to show between those dates
      </div>
    </div>
  </section>
</template>

<script>
import SearchResultDay from './SearchResultDay'

export default {
  props: ['searchParams', 'loading', 'results', 'prices'],
  components: {
    SearchResultDay
  }
}
</script>

<style lang="scss">
  .search-results {
    margin: 20px 0;
  }
</style>
