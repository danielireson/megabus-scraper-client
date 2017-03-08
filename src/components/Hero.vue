<template>
  <section :class="getHeroClass()">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div v-if="searchParams">
          <h1 class="title">
            {{ locationService.toFriendlyFormat(searchParams.originLocation) }} to {{ locationService.toFriendlyFormat(searchParams.destinationLocation) }}
          </h1>
          <h2 class="subtitle">{{ searchParams.startDate | dateToSlashes }} <i class="fa fa-arrow-right" aria-hidden="true"></i> {{ searchParams.endDate | dateToSlashes }}</h2> 
        </div>
        <div v-else>
          <h1 class="title">
            {{ text }}
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LocationService from '../services/LocationService'

export default {
  props: ['isLarge', 'type', 'text', 'searchParams'],
  data () {
    return {
      locationService: LocationService
    }
  },
  methods: {
    getHeroClass () {
      return {
        'hero': true,
        'is-info': true,
        'is-large': this.isLarge !== undefined
      }
    }
  }
}
</script>

<style lang="scss">
  .hero.is-large .hero-body {
    padding: 100px 0;
  }

  // Tablet
  @media only screen and (max-width : 979px) {
    .hero.is-large .hero-body {
      padding: 40px 20px;
    }
  }
</style>