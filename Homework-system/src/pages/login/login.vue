<template>
  <div id="login">
      <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="身份">
    <el-radio-group v-model="form.role">
      <el-radio label="讲师"></el-radio>
      <el-radio label="学生"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit" size="small">登录</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
export default {
name:'Login',
data(){
  return{
    form:{
      role:''
    }
}
}
}
</script>
<style scoped>
#login{
margin: auto;
width: 500px;
height: 500px;
background-color: azure;
margin: 20px 15px;
}
</style>