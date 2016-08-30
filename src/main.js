import Vue from 'vue'
import VueRouter from 'vue-router'
import VueValidator from 'vue-validator'
import VueResource from 'vue-resource'

import Home from './pages/Home'
import About from './pages/About'

import {API_DOMAIN, API_ROOT} from './config'

Vue.use(VueRouter)
Vue.use(VueValidator)
Vue.use(VueResource)

// Page routes
var router = new VueRouter({
  history: true
})

router.map({
  '/': {
    component: Home
  },
  '/about': {
    component: About
  }
})

var App = Vue.extend({})
router.start(App, '#app')

// API server config
Vue.http.options.root = API_DOMAIN + API_ROOT
Vue.http.options.crossOrigin = true
