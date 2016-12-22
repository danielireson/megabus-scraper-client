import Vue from 'vue'
import VueRouter from 'vue-router'

import './config/filters'
import './config/http'

import Home from './pages/Home'
import Search from './pages/Search'

Vue.use(VueRouter)

var router = new VueRouter({
  hashbang: false
})

router.map({
  '/': {
    component: Home
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
