import Vue from 'vue'
import VueRouter from 'vue-router'
import VueValidator from 'vue-validator'
import VueResource from 'vue-resource'

import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'

import {API_DOMAIN, API_ROOT} from './config'

Vue.use(VueRouter)
Vue.use(VueValidator)
Vue.use(VueResource)

// Custom filters
Vue.filter('ucfirst', function (value) {
  return value.charAt(0).toUpperCase() + value.slice(1)
})

// API server config
Vue.http.options.root = API_DOMAIN + API_ROOT
Vue.http.options.crossOrigin = true

// Page routes
var router = new VueRouter({
  hashbang: false
})

router.map({
  '/': {
    component: Home
  },
  '/about': {
    component: About
  },
  '/search/:originLocation/:destinationLocation/:startDate/:endDate': {
    name: 'search',
    component: Search
  }
})

router.redirect({
  '*': '/'
})

var App = Vue.extend({})
router.start(App, '#app')
