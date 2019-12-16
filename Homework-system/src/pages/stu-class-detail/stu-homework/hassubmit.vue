
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
      <el-menu-item class="back">
        <el-page-header @back="goBack" content="查看作业" class="back"></el-page-header>
      </el-menu-item>
      <el-menu-item index="/setting-me">
        <div class="demo-basic--circle">
          <el-avatar :size="30" :src="circleUrl"></el-avatar>
        </div>
      </el-menu-item>
      <el-menu-item class="studio" index="/">
        系统主页
        <i class="el-icon-s-home"></i>
      </el-menu-item>
    </el-menu>
    <el-card class="box-card">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="作业"
          width="580">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.fileName }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="300">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import Bus from '../../../bus'
export default {
  name: 'HasSubmit',
  data() {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      missionId: '',
      tableData: ''
    }
  },
  methods: {
    handleDelete(index, row) {
      console.log(index,row.fileName)
      for(let i = 0; i < this.tableData.length; i++) {
        if(this.tableData[i].fileName == row.fileName) {
          let workId = this.tableData[i].id
          localStorage.setItem("workId", workId)
        }
      }
      let work = localStorage.getItem("workId")
      this.$axios.delete(`http://2z431s2133.wicp.vip:31188/work/Work/deleteWork?workId=${work}`)
        .then((response) => {
          console.log(response)
          alert('删除成功！')
          this.$router.go(0)
        })
        .catch((error) => {
          console.log(error)
          alert('删除失败！')
          this.$router.go(0)
        })
    },
    goBack() {
      this.$router.go(-1)
    }
  },
  mounted() {
    Bus.$on('val',(data) => {
      localStorage.setItem("mission", data)
    })
    let mission = localStorage.getItem("mission")
    this.$axios.get(`http://2z431s2133.wicp.vip:31188/work/Work/searchWork?missionId=${mission}`)
      .then((response) => {
        console.log(response)
        this.tableData = response.data.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
  .back {
  line-height: 60px;
}

.studio {
  float: right;
}

.box-card {
  margin-top: 3%;
  width: 60%;
  position: relative;
  left: 20%;
}
</style>
