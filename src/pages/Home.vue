<template>
  <header-component></header-component>
  <hero text="The quickest way to search Megabus UK prices" is-large="true"></hero>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
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
