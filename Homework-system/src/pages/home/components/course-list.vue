<template>
  <div>
    <Course v-for="(item,index) in courseList" :key="index" @delete="handleDelete" style="display:inline-block; margin-right:15px;">
      <template v-slot:name>{{courseList[index].name}}</template>
      <template v-slot:code>课程码：{{courseList[index].code}}</template>
      <template v-slot:button></template>
    </Course>
  </div>
</template>

<script>
import Bus from '../../../bus'
import Vuex from 'vuex'
import Course from './course'
export default {
  name: 'CourseList',
  components: {
    Course
  },
  data() {
    return {
      show: []
    }
  },
  computed: {
    courseList() {
      return this.$store.state.courseList
      // let studentId = 1
      // this.$axios.post('http://2z431s2133.wicp.vip:20570/work/swagger-ui.html#/student-course-controller/studentAllCourseUsingPOST_1',{
      //   studentId: studentId
      //   })
      //   .then(function (response) {
      //   console.log(response)
      //   })
      //   .catch(function (error) {
      //   console.log(error)
      //   })
    }
  },
  mounted() {
    Bus.$on('val', (data) => {
      this.show = data
      console.log(this.show)
    })
    let studentId = 1
    this.$axios.post('http://2z431s2133.wicp.vip:20570/work/swagger-ui.html#/student-course-controller/studentAllCourseUsingPOST_1',{
      studentId: studentId
      })
      .then(function (response) {
      console.log(response)
      })
      .catch(function (error) {
      console.log(error)
      })
  }
}
</script>

<style scoped>

</style>
