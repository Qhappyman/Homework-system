// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import qs from 'qs'
// import './assets/reset.css'   //引入reset.css和一像素边框
import './assets/border.css'
Vue.prototype.axios = axios
Vue.prototype.qs =qs
Vue.config.productionTip = false
Vue.use(router)
Vue.use(Vuex)
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
