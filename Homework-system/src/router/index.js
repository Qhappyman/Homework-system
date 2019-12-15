import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import Index from '../pages/index/index'
import Home from '../pages/home/home'
import StuHome from '../pages/home/stu-home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import SettingMe from '../pages/setting-me/setting-me'
import ClassDetail from '../pages/class-detail/class-detail'
import StuClassDetail from '../pages/stu-class-detail/stu-class'
import SubmitWork from '../pages/stu-class-detail/stu-homework/submit-work'
import Hassubmit from '../pages/stu-class-detail/stu-homework/hassubmit'
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
      path:'/stu-home',
      component:StuHome
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
      path:'/stu-class-detail/:stuclass',
      component:StuClassDetail
    },
    {
      path: '/stu-submit-work/:homework',
      component:SubmitWork
    },
    {
      path: '/check-homework',
      component:Hassubmit
    },
    {
      path:'/tec-class-detail/:class',
      component:TecClassDetail
    },
    {
      path:'/stu-homework/:workid',
      component:Stuworklist
    },
    {
      path:'/fix-homework/:id',
      component:Fixwork
    },
    {
      path:'*',
      component:Error
    }
  ]
})
