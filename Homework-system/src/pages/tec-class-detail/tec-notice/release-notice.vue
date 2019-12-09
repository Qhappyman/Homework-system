<template>
  <div>
    <el-button type="primary" plain @click="handleRelease">
      发布公告
      <i class="el-icon-edit"></i>
    </el-button>
    <el-form ref="notice" :model="notice" label-width="80px" v-if="release" class="notice">
      <el-form-item label="公告名称">
        <el-input v-model="notice.name"></el-input>
      </el-form-item>
      <el-form-item label="公告内容">
        <el-input type="textarea" v-model="notice.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addNotice">立即发布</el-button>
        <el-button @click="handleRelease">取消</el-button>
      </el-form-item>
    </el-form>
    <el-collapse v-model="noticeName" @change="handleChange" class="notice-list" :accordion="true">
      <Noticelist v-for="(item,index) in noticelist" :key="index" ref="noticelist">
        <template slot="title">{{noticelist[index].title}}:</template>
        <template slot="content">{{noticelist[index].content}}</template>
      </Noticelist>
      <!--千万不要修改插槽，不然会有很多问题-->
    </el-collapse>
  </div>
</template>

<script>
import Noticelist from "./notice-list";
import axios from "axios";
import Vuex from "vuex";
export default {
  components: {
    Noticelist
  },
  data() {
    return {
      notice: {
        name: "",
        content: ""
      },
      release: false,
      noticeName: ""
    };
  },
  methods: {
    handleRelease() {
      this.release = !this.release;
    },
    handleChange(val) {
      console.log(val);
    },
    addNotice() {
      if (!(this.notice.name == "" || this.notice.content == "")) {
        let newthis = this;
        axios.post(`http://2z431s2133.wicp.vip:20570/work/Course/updateBoard&contentTitle=${newthis.notice.name}&scousrId=${newthis.entercourse.courseId}&content=${newthis.notice.content}`)
        .then((res)=>{
          this.$message({   //及时刷新页面:1. 再次请求axios 2.更新vuex
          message: "发布成功",
          type: "success"
        })
        this.$store.commit("updateNoticelist", {
            name: { title: this.notice.name, content: this.notice.content }
          });
        this.handleRelease();
        })
        .catch(()=>{
          alert('网络错误');
        })
      } else {
        this.$message.error({
          message: "请完善公告",
          type:'warning'
        });
      }
    }
  },
  computed: {
    noticelist() {
      return this.$store.state.noticeList;  //是否有必要上传到vuex
    },
    entercourse(){
      return this.$router.state.entercourse;
    }
  },
  mounted(){
    //获取到教师端公告
    axios.post('http://2z431s2133.wicp.vip:20570/work/')
    .then((res)=>{
        this.noticelist = res;  //会报错，已经声明了noticelist,如果每次都会有mounted执行，可以删除vuex中的数据
    })
  }
};
</script>

<style scoped>
.notice {
  margin: 10px auto;
  border: 1px solid #e2e6ed;
  border-radius: 8px;
  padding: 10px 10px 0 0;
}
.notice-list {
  margin: 10px auto;
  border: 1px solid #e2e6ed;
  border-radius: 8px;
  padding: 10px 10px 0 20px;
}
</style>

