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
          <div v-if="showEditSearchButton" class="nav-right">
            <span class="nav-item edit-button">
              <a v-link="'/'" class="button is-info is-inverted">
                <span class="icon">
                  <i class="fa fa-pencil-square-o"></i>
                </span>
                <span class="is-hidden-mobile">Edit search</span>
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
  props: ['showEditSearchButton'],
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

  // Tablet
  @media only screen and (max-width : 980px) {
    .nav-left {
      padding-left: 20px;
    }

    .nav-right {
      padding-right: 20px !important;
    }

    .notification {
      border-radius: 0;
      bottom: 0;
      left: 0;
      margin-bottom: 0 !important;
      right: 0;
    }
  }

  // Mobile
  @media only screen and (max-width : 768px) {    
    .edit-button .icon {
      margin-right: 0 !important;
    }    
  }

</style>
