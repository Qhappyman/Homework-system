
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
        <el-page-header @back="goBack" content="提交作业" class="back"></el-page-header>
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
      <p style="margin-top: 10px; font-size: 23px;">{{title}}</p>
      <p style="margin-top: 30px;">{{content}}</p>
      <el-divider></el-divider>
      <el-upload
        ref="upload"
        class="upload-demo"
        action=""
        multiple
        :file-list="file"
        :auto-upload="false"
        :before-upload="beforeUpload">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传作业</el-button>
      </el-upload>
    </el-card>
    <div class="loading" v-if="loading">
      <h4 class="tips">{{tips}}</h4>
      <el-progress type="line" :percentage="percentage" class="progress" :show-text="true"></el-progress>
    </div>
    <el-dialog
      title="提示"
      :visible="dialogVisible"
      width="30%"
      :modal-append-to-body="false">
      <span>文件上传成功</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="ensure">确定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible="dialogVisibleFail"
      width="30%"
      :modal-append-to-body="false">
      <span>文件上传失败</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="ensure">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SubmitWork',
  data() {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      title: '',
      content: '',
      file: [],
      loading: false,
      percentage: 0,
      tips: '',
      dialogVisible: false,
      dialogVisibleFail: false
    }
  },
  methods: {
    beforeUpload(file) {
      let formdata = new FormData();
      formdata.append('file',file);
      console.log(formdata.get('file'));
      // let missionId = 1
      // let userId = 1
      // let homework = {
      //   file: formdata,
      //   missionId: missionId,
      //   userId: userId
      // }
      let config = {
        // onUploadProgress: progressEvent => {
        //   let complete = (progressEvent.loaded / progressEvent.total).toFixed(2) * 100;
        //   this.percentage = complete;
        //   if(this.percentage >= 100) {
        //     this.dialogVisible = true
        //   } else {
        //     this.dialogVisibleFail = true
        //   }
        // },
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      this.$axios.post('http://2z431s2133.wicp.vip:20570/work/swagger-ui.html#/work-controller/addWorkUsingPOST?missionId=1&userId=1',formdata,config)
        .then((response)=>{
          console.log(response)
          this.dialogVisible = true
        })
        .catch((error)=>{
          console.log(error)
          this.dialogVisibleFail = true
        })
    },
    submitUpload() {
      // this.loading = true;
      // this.tips = '正在上传...'
      this.$refs.upload.submit();
    },
    ensure() {
      this.dialogVisible = false;
      this.loading = false;
      this.dialogVisibleFail = false;
    },
    goBack() {
      this.$router.go(-1)
    }
  },
   mounted() {
      for(let i = 0; i < this.stuHomeworkList.length; i++) {
        if(this.stuHomeworkList[i].title+':' == this.$route.params.homework) {
          this.title = this.stuHomeworkList[i].title
          this.content = this.stuHomeworkList[i].content
          break
        } else {
          this.title = ''
          this.content = ''
        }
      }
   },
  computed: {
    stuHomeworkList() {
      return this.$store.state.stuHomeworkList;
    }
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
  height: 500px;
  position: relative;
  left: 20%;
}

.loading{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: black;
  opacity: 0.8;
}

.progress {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 60%;
  left: 50%;
  margin-left: -100px;
  margin-top: -100px;
}

.tips {
  color: #409eff;
  position: absolute;
  top: 58%;
  left: 50%;
  margin-left: -100px;
  margin-top: -150px;
}

</style>
