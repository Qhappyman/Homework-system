<template>
  <div id="continer">
    <header ref="class" id="classname">
      <slot name="classname"></slot>
      <p class="header-p">课程码:<slot name="courseId"></slot></p>
    </header>

    <main>
      <p class="head-p">教师:<slot name="courseTea"></slot></p>
      <p class="main-p">学生数:<slot name="stunum"></slot></p>
    </main>

    <footer>
      <el-button type="primary" size="big" @click="toteclass" style="float:left">进入课程</el-button>
      <el-button type="primary" size="big" @click="deleteCourse" style="float:right">
        删除课程
        <i class="el-icon-delete"></i>
      </el-button>
    </footer>
  </div>
</template>

<script>
import Vuex from "vuex"
import axios from 'axios'
export default {
  props: ["classtype", "item"],
  data() {
    return {};
  },
  methods: {
    deleteCourse() {
      this.$confirm("删除该课程, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          //删除教师课程
          axios.post('http://2z431s2133.wicp.vip:20570/work/')
          .then((res)=>{
            this.$message({
            type: "success",
            message: "删除成功!"
          })
          this.$store.commit("deleteClass", this.$slots.classname[0].text); //获取到对应课程的名字，通过插槽属性获取
          })            
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      // console.log(this.$slots.classname[0].text);
      // console.log(this.checklist);
    },
    toteclass() {
      this.$router.push({
        path: `/tec-class-detail/${this.$slots.classname[0].text}`
      });
      this.$store.commit('enterCourse',{courseName:this.$slots.classname[0].text,courseId:this.$slots.courseId[0].text})
    }
  },
  computed: {
    checklist() {
      return this.$store.state.checkList;
    }
  }
};
</script>

<style scoped>
#continer {
  width: 250px;
  height: 238px;
  border-radius: 10px;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  margin: 10px 10px 10px 30px;
  align-items: stretch;
}
.header-p {
  font-size: 20px;
  margin-top: -25px;
}
header {
  text-align: center;
  height: 40%;
  line-height: 70px;
  font-size: 40px;
  color: cornflowerblue;
  background-image: url(../../../assets/course.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 5px 0 0 5px;
}
main {
  height: 40%;
  text-align: center;
  font-size: 20px;
  line-height: 40px;
}
footer {
  height: 18%;
  text-align: right;
  font-size: 20px;
  color: cornflowerblue;
  background-color: #409eff;
  border-radius: 0 0 5px 5px;
}
.header-p {
  color: black;
}
</style>
