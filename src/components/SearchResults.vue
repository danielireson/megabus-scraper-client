<template>
  <section class="search-results">
    <div class="container">
      <!-- Rows for each week -->
      <div v-for="(weekIndex, week) in results" class="columns has-text-centered is-block-tablet is-flex-desktop">
        <!-- Columns for each day of the week -->
        <div v-for="(dayIndex, day) in week" class="column">
          <div class="box">
            <a v-show="loading" class="button is-loading box-loading"></a>
            <div v-if="!loading">
              <h3 class="search-results-date">{{ results[weekIndex][dayIndex].date }}</h3>
              <div v-for="result in results[weekIndex][dayIndex].results" class="search-result">
                <div class="columns is-gapless">
                  <div class="column">  
                    <span class="search-result-time">{{ result.time }}</span>
                  </div>
                  <div class="column">
                    <a @click.prevent="goToMegabusResult(results[weekIndex][dayIndex].date)" :class="{'button': true, 'is-small': true, 'search-result-price': true, 'price-low': result.price <= prices.firstThirdPriceBound, 'price-medium': result.price > prices.firstThirdPriceBound && result.price <= prices.secondThirdPriceBound, 'price-high': result.price > prices.secondThirdPriceBound}">£{{ result.price }}</a>
                  </div>
                </div>
              </div>
            </div>
            <div v-show="loading === false && results[weekIndex][dayIndex].results.length === 0">
              No results
            </div>
          </div>
        </div>
        <!-- Generate blank day columns to fill the row  -->
        <div 
          v-if="week.length % 7 !== 0"
          v-for="i in 7 - week.length % 7" 
          class="column is-hidden-mobile is-hidden-tablet-only">
        </div> 
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['loading', 'results', 'prices', 'goToMegabusResult']
}
</script>

<style lang="scss">
  .search-results {
    margin-top: 20px;
  }

  .box-loading {
    border: none;
  }

  .search-results-date {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .search-result {
    margin-bottom: 5px;
  }

  .search-result-time {
    display: block;
    font-size: 11px;
    height: 24px;
    line-height: 24px;
    margin-right: 5px;
    text-align: right;
  }

  .search-result-price {
    border-color: transparent !important;
    color: white !important;
    float: left;
  }

  .price-low {
    background-color: #27ae60;
    
    &:hover {
      background-color: darken(#27ae60, 5);
    }
  }

  .price-medium {
    background-color: #e6a83c;

    &:hover {
      background-color: darken(#e6a83c, 5);
    }
  }

  .price-high {
    background-color: #e74c3c;

    &:hover {
      background-color: darken(#e74c3c, 5);
    }
  }

  // Tablet
  @media only screen and (max-width : 979px) {
    .box {
      border-radius: 0;
    }

    .search-result {
      display: inline-block;
      margin-right: 10px;
    }

    .search-result-time {
      text-align: center;
    }

    .search-result-price {
      float: none;
    }
  }

  // Mobile
  @media only screen and (max-width : 768px) {
    .search-result-time {
      margin-right: 0;
    }
  }
</style>
