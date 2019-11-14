<template>
  <div>
      <el-button type="primary" plain @click="handleRelease">发布公告<i class="el-icon-edit"></i></el-button>
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
 <el-collapse v-model="noticeName" @change="handleChange" class="notice-list" :accordion= true>
       <Noticelist v-for="(item,index) in noticelist" :key="index" ref="noticelist"><template slot="title">{{noticelist[index].title}}:</template><template slot="content">{{noticelist[index].content}}</template></Noticelist>  
        <!--千万不要修改插槽，不然会有很多问题-->
    </el-collapse>
  </div>
</template>

<script>
import Noticelist from './notice-list'
export default {
components:{
    Noticelist
},
data(){
    return{
        notice:{
            name:"",
            content:""
        },
        release:false,
        noticeName:""
    }

},
methods:{
    handleRelease() {
      this.release = !this.release;
    },
    handleChange(val) {
      console.log(val);
    },
    addNotice(){
        if (!(this.notice.name == "" || this.notice.content == "")) {

        this.$notify({
          title: "成功",
          message: "发布成功",
          type: "success"
        }),
        this.$store.commit('updateNoticelist',{name:{title:this.notice.name,content:this.notice.content}});
          this.handleRelease();
      } else {
        this.$notify.error({
          title: "失败",
          message: "请完善公告"
        });
      }
    }
    

},
computed:{
      noticelist(){
        return this.$store.state.noticeList;
    }
}
}
</script>

<style scoped>
.notice{
    margin: 10px auto;
    border:1px solid #E2E6ED;
    border-radius: 8px;
    padding:10px 10px 0 0;
}
.notice-list{
    margin: 10px auto;
    border: 1px solid #e2e6ed;
  border-radius: 8px;
  padding: 10px 10px 0 20px;
}
</style>

