<template>
  <div class="column">
    <div class="box">
      <a v-show="loading" class="button is-loading box-loading"></a>
      <div v-if="!loading">
        <h3>{{ day.date | dateToDayOfWeek }}</h3>
        <h3 class="search-results-date">{{ day.date | dateToSlashes }}</h3>
        <div v-for="journey in day.journeys" class="search-result">
          <div class="columns is-gapless">
            <div class="column">  
              <span class="search-result-time">
                {{ journey.departure.time }}
              </span>
            </div>
            <div class="column">
              <a @click.prevent="searchService.goToMegabusResult(searchParams, day.date)" :class="getPriceClass(journey.price)">£{{ journey.price }}<i v-if="journey.price == prices.lowestPrice" class="search-result-cheapest fa fa-star-o" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchService from '../services/SearchService'

export default {
  props: ['day', 'searchParams', 'loading', 'prices'],
  data () {
    return {
      searchService: SearchService
    }
  },
  methods: {
    getPriceClass (price) {
      return {
        'button': true,
        'is-small': true,
        'search-result-price': true,
        'price-low': price <= this.prices.firstThirdPriceBound,
        'price-medium': price > this.prices.firstThirdPriceBound && price <= this.prices.secondThirdPriceBound,
        'price-high': price > this.prices.secondThirdPriceBound
      }
    }
  }
}
</script>

<style lang="scss">
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

  .search-result-cheapest {
    font-size: 1em;
    margin-left: 5px;
    vertical-align: baseline;
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
