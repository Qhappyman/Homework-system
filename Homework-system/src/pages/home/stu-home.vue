<template>
  <div>
    <StuHomeNav></StuHomeNav>
    <JoinClass></JoinClass>
    <CourseList></CourseList>
  </div>
</template>

<script>
import StuHomeNav from './components/stu-home-nav'
import JoinClass from './components/join-class'
import CourseList from './components/course-list'
export default {
  name: 'StuHome',
  components: {
    StuHomeNav,
    JoinClass,
    CourseList
  }
}
</script>

<style scoped>

</style>
