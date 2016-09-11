<template>
  <section class="hero is-info is-medium">
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <a v-link="'/'" class="header-logo nav-item">
              Megabus Search
            </a>
          </div>
          <div class="nav-right nav-menu">
            <a v-link="'/'" class="nav-item is-active">
              Home
            </a>
            <span class="nav-item">
              <a href="https://github.com/danielireson/megabus-scraper-client" class="button is-info is-inverted" target="_blank">
                <span class="icon">
                  <i class="fa fa-github"></i>
                </span>
                <span>Source code</span>
              </a>
            </span>
          </div>
        </div>
      </header>
    </div>
  </section>

  <div class="notification is-hidden is-success">
    <button class="delete"></button>
    Lorem ipsum dolor sit amet.
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/sass/style";

  .header-logo {
    font-size: 18px;
    color: white !important;
  }

  .notification {
    z-index: 999;
    position: fixed;
    bottom: 10px;
    right: 20px;
  }

  .is-hidden {
    display: none;
  }

  // Tablet
  @media only screen and (max-width : 980px) {
    .nav-left {
      padding-left: 20px;
    }

    .notification {
      bottom: 0;
      right: 0;
      margin-bottom: 0 !important;
    }
  }

  // Mobile
  @media only screen and (max-width : 768px) {
    
  }

</style>
