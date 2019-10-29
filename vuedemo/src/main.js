// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 公有样式
require("./assets/a.css")
Vue.config.productionTip = false
import Vuex from 'vuex'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex,VueAxios,axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
