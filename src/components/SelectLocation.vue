<template>
  <select v-model="location">
    <option value="" disabled selected>Select location</option>
    <option v-for="location in locations" :value="location.name.toLowerCase()">{{ location.name }}</option>
  </select>
</template>

<script>
import LocationService from '../services/LocationService'

export default {
  data () {
    return {
      locations: LocationService.getLocations()
    }
  },
  props: ['location']
}
</script>
