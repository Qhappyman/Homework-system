<template>
  <div>
    <el-menu background-color="#545c64" text-color="#fff" class="el-menu-demo" mode="horizontal" :router="true">
      <el-menu-item>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/stu-homework/1' }" class="back">返回</el-breadcrumb-item>
          <el-breadcrumb-item class="back">
            <span style="color:white">{{this.$route.params.id}}</span>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </el-menu-item>
       <el-menu-item class="studio" index="/">
          系统主页
          <i class="el-icon-s-home"></i>
        </el-menu-item>
    </el-menu>
    <div class="homework">
      <div class="work-score">
        <el-input placeholder="分数(100)" v-model="input" maxlength="3" clearable></el-input>
        <el-button type="primary" class="submit" size="medium" @click="submitScore">提交分数</el-button>
      </div>
      <div class="work-content">
        <el-input type="textarea" :rows="10" placeholder="作业内容" v-model="textarea"></el-input>
      </div>
      <div class="work-file">
<el-button plain size="small">        <el-button type="info" icon="el-icon-download" circle size="small"></el-button><span class="download">文件下载</span></el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FixHomework",
  data() {
    return {
      input: "",
      textarea: ""
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    submitScore(){
        if(this.input!=''){
    //          this.$notify({
    //     title: "成功",
    //     message: "分数以提交",
    //     type: "success"
    //   });
    this.$confirm("确认提交?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "提交成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消提交"
          });
        })
        }
    // this.$message({
    //       message: '提交成功',
    //       type: 'success'
    //     })
    //     }
        else{
        //     this.$notify.error({
        //   title: '分数为空',
        //   message: '请完善你的内容'
        // });
        this.$message({
          message: '分数为空',
          type: 'warning'
        })}

    }
  }
};
</script>

<style scoped>
.back {
  margin-top: 20px;
}
.homework {
  display: flex;
  flex-direction: column;
  height: 500px;
}
.work-content {
  margin: 20px 0px;
}
.work-score {
  /* flex-grow: 1; */
  margin: 10px 0;
  width: 10%;
}
.work-file {
  /* flex-grow: 1; */
}
.download{
    font-size: 15px;
    display: inline-block;
    margin-left: 5px;
}
.submit{
    margin-top: 15px;
}
.studio {
  float: right;
}
</style>