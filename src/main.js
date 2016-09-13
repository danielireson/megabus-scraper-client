import Vue from 'vue'
import VueRouter from 'vue-router'
import VueValidator from 'vue-validator'
import VueResource from 'vue-resource'

import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'

import {API_DOMAIN, API_ROOT, API_KEY} from './config'

Vue.use(VueRouter)
Vue.use(VueValidator)
Vue.use(VueResource)

// Custom filters
Vue.filter('titleCase', function (value) {
  return value.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
})

// API server config
Vue.http.options.root = API_DOMAIN + API_ROOT
Vue.http.headers.common['X-Authorization'] = API_KEY

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
