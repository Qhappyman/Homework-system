<template>
  <div>
      class-detail
      <ClassDetailNav></ClassDetailNav>
      <Body></Body>
      <router-view/>
  </div>
</template>

<script>
import Body from './components/body'
import ClassDetailNav from './components/class-detail-nav'
import ReleaseWork from '../tec-class-detail/tec-homework/release-work'
import TecHomeworkList from '../tec-class-detail/tec-homework/tec-homework-list'
export default {
name:'ClassDetail',
components:{
    Body,
    ClassDetailNav,
    ReleaseWork,
    TecHomeworkList
}
}
</script>

<style>

</style>