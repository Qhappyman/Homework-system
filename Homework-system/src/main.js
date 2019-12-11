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
// import VueAxios from 'vue-axios'
import qs from 'qs'
// import './assets/reset.css'   //引入reset.css和一像素边框
import './assets/border.css'
Vue.prototype.axios = axios
import '@/assets/reset.css'
Vue.prototype.$axios = axios
Vue.prototype.qs =qs
Vue.config.productionTip = false
Vue.use(router)
Vue.use(Vuex)
Vue.use(ElementUI);

axios.defaults.baseURL='http://2z431s2133.wicp.vip:31188/work'
Vue.prototype.axios=axios 
// Vue.use(VueAxios,axios);

//使用钩子函数进行权限跳转
// router.beforeEach((to,from,next)=>{
//     next();
// })       //Maximum call stack size exceeded
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted(){
      if(localStorage.id!=undefined&&localStorage.role!=undefined){
          this.$store.commit('saveInfo',{userid:localStorage.id,role:localStorage.role})
      }
      else{
          this.$router.push('/login');
      }
    }
})
