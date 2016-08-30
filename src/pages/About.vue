<template>
  <header-component></header-component>

  <section class="hero is-info is-medium">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          About Megabus Search
        </h1>
      </div>
    </div>
  </section>

  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'

export default {
  data () {
    return {
      msg: 'Home'
    }
  },
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style lang="sass">

</style>
