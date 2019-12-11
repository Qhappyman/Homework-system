<template>
  <div>
    <el-collapse-item :title="title">
      <slot name="title"></slot>
      <slot name="content"></slot>
      <el-link type="primary" @click="workDetail" class="icon" :underline="false">
        查看学生作业
        <i class="el-icon-view el-icon--right"></i>
      </el-link>
      <el-button type="danger" size="mini" class="delete" @click="deleteWork">删除任务</el-button>
       <el-button type="danger" size="mini" class="delete" @click="updateWork">修改任务</el-button>
    </el-collapse-item>
  </div>
</template>

<script>
import axios from "axios";
import Vuex from "vuex";
export default {
 props:['clas','workname'],
  name: "Worklist",
  data() {
    return {
    deletename:this.workname,
    missionId:'',
    deleteid:'',
    updateId:''
    };
  },
  computed: {
    worklist(){
      return this.$store.state.workList;
    },
    title() {
    return this.$slots.title[0].text;
    }
  },
  methods: {
    workDetail() {
      this.$store.state.workList.forEach((item,index)=>{
      if(this.$store.state.workList[index].title == this.$slots.title[0].text){
        this.missionId =  this.$store.state.workList[index].id;
      }
    })  //获取到missionId
    localStorage.missionId = this.missionId;
      this.$router.push({
        path: `/stu-homework/${this.missionId||localStorage.missionId}` //主要还是missionId
      });
      
    },
    updateWork(){
      this.$store.state.workList.forEach((item,index)=>{
      if(this.$store.state.workList[index].title == this.$slots.title[0].text){
        this.updateId =  this.$store.state.workList[index].id;
      }})
      this.$emit('updateWork',this.updateId)
    },
    deleteWork() {
      this.$confirm("确认删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        //通过this.$slots.title[0].text遍历任务获取到missionId
        this.$store.state.workList.forEach((item,index)=>{
      if(this.$store.state.workList[index].title == this.$slots.title[0].text){
        this.deleteid =  this.$store.state.workList[index].id;
      }
    })
        axios
          .delete(
            `/Mission/deleteMission?missionId=${this.deleteid}`
          )   //获取到missionId
          .then(res => {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
            this.$store.commit(
              "deleteWorklist",
              //删除的任务
            )
            axios
          .delete(
            `/Mission/deleteMissionFile?missionId=${deleteId}`
          )
          })
          .catch(err => {
            this.$message({
              type: "info",
              message: "网络错误"
            });
          });
      });
    }
  },
  mounted() {
    //通过courseId获取作业列表
    //  axios.get('')
    //  .then((res)=>{
    //    console.log(res);
    //    this.$store.commit('getCourse',res)
    //  })
  }
}
  </script>



<style scoped>
.icon {
  display: block;
  margin-top: 15px;
}
.delete {
  margin-top: 10px;
}
.delete{
    margin-top: 10px
}
</style>
