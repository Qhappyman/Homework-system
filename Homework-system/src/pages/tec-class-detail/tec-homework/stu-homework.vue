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
        <template slot="header">
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
       
      this.$router.push({ path: "/tec-class-detail/前端"});
       
    },
    handleEdit(index, row) {
      console.log(index, row.name, row.date);
      this.$router.push({ path: `/fix-homework/${row.name}` });
    }
  },
  mounted(){
    axios.get(`http://2z431s2133.wicp.vip:20570/work/Work/searchWork?missionId=${this.$route.params.workid}`).then((res)=>{
      // console.log(res.data.data[0].id);
      this.tableData = res.data.data;
    })
    this.$store.commit('updateStuworklist');
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
