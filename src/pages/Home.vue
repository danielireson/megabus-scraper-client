<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent'

export default {
  data () {
    return {
      msg: 'Home'
    }
  },
  components: {
    HeaderComponent
  }
}
</script>

<style lang="sass">

</style>
