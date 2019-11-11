<template>
  <div>
    <el-header>作业提交
      <el-button type="primary" round>登录</el-button>
      <el-button type="primary" round>注册</el-button>
    </el-header>
  </div>
</template>

<script>
export default {
  name:'IndexNav'
}
</script>

<style scoped>
header {
  padding-left: 3%;
  background-color: #272E38;
  color: white;
  font-size: 2vw;
  font-weight: 800;
  font-family: "PingFang SC";
  line-height: 58px;
}

.el-button {
  position: relative;
  left: 78%;
  bottom: 10%;
}
</style>
