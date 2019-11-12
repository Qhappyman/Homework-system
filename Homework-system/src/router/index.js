import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import Index from '../pages/index/index'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import SettingMe from '../pages/setting-me/setting-me'
import ClassDetail from '../pages/class-detail/class-detail'
import StuClassDetail from '../pages/stu-class-detail/stu-class'
import TecClassDetail from '../pages/tec-class-detail/tec-class-detail'
import Error from '../pages/error'
Vue.use(Router)
Vue.use(Vuex)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/register',
      component:Register
    },
    {
      path:'/setting-me',
      component:SettingMe
    },
    {
      path:'/class-detail',
      component:ClassDetail
    },
    {
      path:'/stu-class-detail',
      component:StuClassDetail
    },
    {
      path:'/tec-class-detail',
      component:TecClassDetail
    },
    {
      path:'*',
      component:Error
    }
  ]
})
