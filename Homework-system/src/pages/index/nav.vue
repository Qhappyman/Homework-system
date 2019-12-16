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
        index="/login"
        :default-active="navindex1"
      >进入课堂
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
