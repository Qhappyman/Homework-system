<template>
  <div>
    <Course v-for="(item,index) in courseList" :key="index" style="display:inline-block; margin-right:15px;">
      <template v-slot:name>{{item.name}}</template>
      <template v-slot:code>{{item.id}}</template>
      <template v-slot:button></template>
    </Course>
  </div>
</template>

<script>
import Vue from 'vue'
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
      courseList: null
    }
  },
  mounted() {
    // Bus.$on('val', (data) => {
    //   this.show = data
    //   console.log(this.show)
    // })
    // alert(this.GLOBAL.userId)
    this.$axios.post(`http://2z431s2133.wicp.vip:31188/work/StudentCourse/studentAllCourse?studentId=${this.GLOBAL.userId}`)
      .then(response => {
        this.courseList = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>
