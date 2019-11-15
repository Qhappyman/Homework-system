<template>
<div class="background">
  <div class="container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
export default {
  name:'Register',
   data() {
      return {
        form: {
          name: ''
        }
      }
    }
}
</script>

<style>
  .background {
    width: 100%;
    height: 100%;
    background-color: red;
  }

  .container {
    width: 40%;
    height: 80%;
    background-color: white;
  }

  .el-input {
    width: 80px;
  }
</style>
