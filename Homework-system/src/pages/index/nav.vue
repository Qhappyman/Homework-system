<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      router=true
      active-text-color="#ffd04b">作业提交
      <el-menu-item
        :default-active="navindex1"
      ><span @click="goClass">进入课堂</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name:'IndexNav',
  data() {
    return {
      navindex1: '1'
    }
  },
  methods:{
    goClass(){
      if(this.role==''){
        this.$router.push({path:'/login'});
      }
      else if(this.role=='讲师'){
        this.$router.push({path:'/home'})
      }
      else if(this.role == '学生'){
        this.$router.push({path:'/stu-home'})
      }
    }
  },
  computed:{
    role(){
      return this.$store.state.role;
    }
  }
}
</script>

<style scoped>
  .el-menu {
    padding-left: 20px;
    font-size: 25px;
    font-weight: 800;
    line-height: 60px;
    color: white;
  }

  .el-menu-item {
    float: right;
    font-weight: 400;
  }
</style>
