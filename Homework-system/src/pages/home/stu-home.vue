<template>
  <div>
    <HomeNav></HomeNav>
    <JoinClass></JoinClass>
    <CourseList></CourseList>
  </div>
</template>

<script>
import HomeNav from './components/home-nav'
import JoinClass from './components/join-class'
import CourseList from './components/course-list'
export default {
  name: 'StuHome',
  components: {
    HomeNav,
    JoinClass,
    CourseList
  }
}
</script>

<style scoped>

</style>
