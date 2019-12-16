<template>
  <div class="container" style="border: 1px solid #F1F3F4; border-radius: 4px;">
    <header ref="class"><slot name="name"></slot></header>
    <main>课程码：<slot name="code"></slot></main>
    <footer><slot name="button"><el-button type="primary" size="big" @click="goCourse" style="float:left">进入课程</el-button><el-button type="primary" size="big" @click="deleteCourse" style="float:right">删除课程<i class="el-icon-delete"></i></el-button></slot></footer>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
export default {
  name: 'Course',
  methods: {
    goCourse() {
      this.$router.push({ path: `/stu-class-detail/${this.$slots.name[0].text}` })
      this.$store.commit('enterStuCourse',{name: this.$slots.name[0].text, code: this.$slots.code[0].text})
      localStorage.setItem("courseCode",this.$slots.code[0].text)
      localStorage.setItem("courseName",this.$slots.name[0].text)
    },
    deleteCourse() {
      let studentCoursePo = {
        courseId: this.$slots.code[0].text,
        studentId: this.GLOBAL.userId
      }
      this.$axios.delete('http://2z431s2133.wicp.vip:31188/work/StudentCourse/studentDeleteCourse',{data:studentCoursePo})
      .then((response)=>{
        console.log(response)
        alert('删除成功！')
        this.$router.go(0)
      })
      .catch((error)=>{
        console.log(error)
        alert('删除失败！')
      })
    }
  }
}
</script>

<style scoped>
  .continer{
    margin-top: 10%;
    width:250px;
    border-radius: 10px;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    margin: 10px 10px 10px  30px;
    align-items: stretch;
  }

  /* .header-p{
    font-size: 20px;
    line-height: 4px;
  } */

  header{
    margin-top: 10%;
    text-align: center;
    height: 40%;
    line-height: 50px;
    font-size: 40px;
    color: cornflowerblue;
    background-image:url(../../../assets/course.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 5px 0 0 5px;
  }

  main{
    height: 40%;
    text-align: center;
    font-size: 20px;
    line-height: 40px;
  }

  footer{
    height: 18%;
    text-align: right;
    font-size: 20px;
    color: cornflowerblue;
    background-color: #409EFF;
    border-radius: 0 0 5px 5px;
  }

  /* .header-p{
    color: black;
  } */
</style>
