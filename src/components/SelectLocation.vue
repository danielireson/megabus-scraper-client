<template>
  <select v-model="location">
    <option value="" disabled>...</option>
    <option v-for="location in locations" :value="location">{{ location | locationKeyToFriendlyText }}</option>
  </select>
</template>

<script>
import LocationService from '../services/LocationService'

export default {
  props: ['location'],
  data () {
    return {
      locationService: LocationService
    }
  },
  computed: {
    locations () {
      return Object.keys(this.locationService.state.locations)
    }
  }
}
</script>
