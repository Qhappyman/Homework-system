import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import Index from '../pages/index/index'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import SettingMe from '../pages/setting-me/setting-me'
import ClassDetail from '../pages/class-detail/class-detail'
import TecClassDetail from '../pages/tec-class-detail/tec-class-detail'
import Error from '../pages/error'
import Stuworklist from '../pages/tec-class-detail/tec-homework/stu-homework'
import Fixwork from '../pages/tec-class-detail/tec-homework/fix-homework'
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
      path:'/tec-class-detail/:class',
      component:TecClassDetail
    },
    {
      path:'/stu-homework-list/:id',
      component:Stuworklist
    },
    {
      path:'/fix-homework',
      component:Fixwork
    },
    {
      path:'*',
      component:Error
    }
  ]
})
