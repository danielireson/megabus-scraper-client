<template>
  <header-component></header-component>
  <hero text="The quickest way to search Megabus UK prices" is-large></hero>
  <div class="columns outer-columns">
    <div class="column is-10 is-offset-1 is-8-desktop is-offset-2-desktop">
      <params-form></params-form>
    </div>
  </div>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import Hero from '../components/Hero'
import ParamsForm from '../components/ParamsForm'

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    Hero,
    ParamsForm
  }
}
</script>
