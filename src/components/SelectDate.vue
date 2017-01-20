<template>
  <datepicker 
    placeholder="Select date" 
    :config="{ dateFormat: 'd-m-Y' }"
    :value.sync="date">
  </datepicker>
</template>

<script>
import Datepicker from 'vue-bulma-datepicker'

export default {
  props: ['date'],
  components: {
    Datepicker
  }
}
</script>

<style lang="scss">
  .cur_year {
    display: none !important;
  }
</style>
