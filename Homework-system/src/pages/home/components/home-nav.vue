<template>
<div>

<el-menu
  class="el-menu-demo"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  :router= true
  active-text-color="#ffd04b">
  <el-menu-item
    :default-active="navindex1"
    ><span @click="jumpHome">我的课堂</span>
  </el-menu-item>

  <el-submenu>
    <template slot="title">个人中心</template>

    <el-menu-item index="/setting-me">个人设置</el-menu-item>
    <el-menu-item @click="exit">退出账户</el-menu-item>

  </el-submenu>
  <el-menu-item
    index="/setting-me"
  >
    <div class="demo-basic--circle">
          <el-avatar :size="30" :src="circleUrl"></el-avatar>
      </div>
  </el-menu-item>

  <el-menu-item
    class="studio"
    index="/"
    >系统主页
    <i class="el-icon-s-home"></i>
  </el-menu-item>
</el-menu>
</div>
</template>

<script>
import axios from 'axios'
import vuex from 'vuex'
export default {
    data() {
      return {
        navindex1:"1",
        navindex2:"2",
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      };
    },
    methods: {
      jumpHome(){
        if(this.userInfo.role == '讲师'){
          this.$router.push({path:'/home'})
        }
        else if(this.userInfo.role == '学生'){
          this.$router.push({path:'/stu-home'})
        }
        else{
          this.$router.push({path:'/*'})
        }
      },
      exit(){
        localStorage.clear();
        this.$router.push({path:'/'})
        // axios.get('/User/logout').then(()=>{
        //   alert('已退出')
        // }).catch(()=>{
        //   alert('网络错误')
        // })
      }
    },
    computed:{
      userInfo:function(){
        return this.$store.state.userInfo;
      }
    }
}
</script>

<style scoped>
.studio{
  float: right;
}

.demo-basic--circle{
  display: inline-block;
}
</style>>

