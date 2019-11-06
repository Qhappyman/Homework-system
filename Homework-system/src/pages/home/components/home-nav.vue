<template>
<div>

<el-menu
  class="el-menu-demo"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  router=true
  active-text-color="#ffd04b">
  <el-menu-item 
    index="/home"
    :default-active="navindex1"
    >我的课堂
  </el-menu-item>

  <el-submenu>
    <template slot="title">个人中心</template>
    
    <el-menu-item index="/setting-me">个人设置</el-menu-item>
    <el-menu-item @click="exitCount">退出账户</el-menu-item>
    
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
export default {
    data() {
      return {
        navindex1:"1",
        navindex2:"2",
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      exitCount(){

      }
    }
}
</script>

<style scoped>
.studio{
  float: right;
}
.el-menu-demo{
  
}
.demo-basic--circle{
  display: inline-block;
}
</style>>

