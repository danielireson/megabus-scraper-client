import Vue from 'vue'
import VueResource from 'vue-resource'

import {API_DOMAIN, API_ROOT, API_KEY} from './vars'

Vue.use(VueResource)
Vue.http.options.root = API_DOMAIN + API_ROOT
Vue.http.headers.common['X-Authorization'] = API_KEY
