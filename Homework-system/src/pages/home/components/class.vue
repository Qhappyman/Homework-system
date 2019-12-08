<template>
  <div id="continer">
      <!-- {{checklist}} -->
      <header ref="class"> <slot name="classname"></slot><p class="header-p">课程号:20720</p></header>
     
      <main>学生数 :<br>教师 :</main>
      
      <footer><el-button type="primary" size="big" @click="toteclass" style="float:left">进入课程</el-button><el-button type="primary" size="big" @click="deleteCourse" style="float:right">删除课程   <i class="el-icon-delete"></i></el-button></footer>
    <!-- {{checklist}} -->
    <header ref="class">
      <slot name="classname"></slot>
      <p class="header-p">课程号:20720</p>
    </header>

    <main>
      学生数:23
      <br />学年:2019
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
import Vuex from "vuex";
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
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.$store.commit("deleteClass", this.$slots.classname[0].text); //获取到对应课程的名字，通过插槽属性获取
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
  line-height: 4px;
}

header {
  text-align: center;
  height: 40%;
  line-height: 50px;
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
