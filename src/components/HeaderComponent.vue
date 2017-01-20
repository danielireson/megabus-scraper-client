<template>
  <section class="hero is-info is-medium">
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <a v-link="'/'" class="header-logo nav-item">
              <i class="fa fa-search"></i>Megabus Search
            </a>
          </div>
          <div class="nav-right nav-menu">
            <span class="nav-item">
              <a href="https://github.com/danielireson/megabus-scraper-client" class="button is-info is-inverted" target="_blank">
                <span class="icon">
                  <i class="fa fa-github"></i>
                </span>
                <span>Web Client</span>
              </a>
            </span>
            <span class="nav-item">
              <a href="https://github.com/danielireson/megabus-scraper-server" class="button is-info is-inverted" target="_blank">
                <span class="icon">
                  <i class="fa fa-github"></i>
                </span>
                <span>Scraper API</span>
              </a>
            </span>
          </div>
        </div>
      </header>
    </div>
  </section>

  <div v-show="notificationService.state.visible" class="notification is-{{ notificationService.state.type }}">
    <button @click="notificationService.hideMessage()" class="delete"></button>
    {{ notificationService.state.text }}
  </div>
</template>

<script>
import NotificationService from '../services/NotificationService.js'

export default {
  data () {
    return {
      notificationService: NotificationService
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

  .header-logo .fa {
    margin-right: 10px;
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
