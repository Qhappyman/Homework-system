<template>
  <div>
    
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      :router="true"
      active-text-color="#ffd04b"
    >
      <el-menu-item>
        <el-page-header @back="goBack" content="作业详情" class="back"></el-page-header>
      </el-menu-item>
      <el-menu-item index="/setting-me">
        <div class="demo-basic--circle">
          <el-avatar :size="30" :src="circleUrl"></el-avatar>
        </div>
      </el-menu-item>
      <el-menu-item class="mid">学生作业</el-menu-item>
      <el-menu-item class="studio" index="/">
        系统主页
        <i class="el-icon-s-home"></i>
      </el-menu-item>
    </el-menu>
    <!-- {{this.$route.params}} -->
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="学号" prop="userId"></el-table-column>
      <el-table-column label="姓名" prop="id"></el-table-column>
      <el-table-column label="分数" prop="score"></el-table-column>
      <el-table-column align="right">
        <template slot="header"></template>
        <template slot="header" slot-scoped>
          <el-input v-model="search" size="middle" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">进入批改</el-button>
          <!-- <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>-->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import axios from "axios";
import Vuex from "vuex";
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      tableData: [
        // {
        //   userId: '',
        //   id: '', //要改成userName
        //   score:''
        // }
      ],
      search: ""
    };
  },
  methods: {
    goBack() {
       
      this.$router.push({ path: `/tec-class-detail/${JSON.parse(localStorage.entercourse).courseName}`});
       
    },
    //跳转到学生作业打分页面
    //可以直接把那位学生对应的id发过去，然后遍历vuex找到具体内容
    handleEdit(index, row) {
      console.log(index, row.name, row.date);
      this.$router.push({ path: `/fix-homework/${row.name}` }); //应该把workId传过去
      localStorage.workid = workid;
    }
  },
  mounted(){
    //通过missionId获取学生作业
    let newthis = this;
    axios.get(`http://2z431s2133.wicp.vip:20570/work/Work/searchWork?missionId=${newthis.$route.params.workid||localStorage.missionId}`).then((res)=>{
      // console.log(res.data.data[0].id);
      this.tableData = res.data.data;   //获取到作业列表，但此组件只显示id，score，name
    })
    this.$store.commit('updateStuworklist',res);
  }
};
</script>

<style scoped>
.studio {
  float: right;
}
.back {
  margin-top: 15px;
}
.mid {
  margin-left: 25%;
}
</style>
