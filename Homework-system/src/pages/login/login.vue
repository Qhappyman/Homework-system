<template>
  <div class="background">
    <div class="login">账号登录
      <el-input v-model="username" placeholder="请输入学号" id="username"></el-input>
      <el-input placeholder="请输入密码" v-model="password" show-password id="password"></el-input>
      <el-button type="primary">登录</el-button>
      <div class="to-register" @click="goRegister">注册账号</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    goRegister: function() {
      this.$router.push({path: '/register'})
    }
  }
}
</script>

<style>
  body {
    width: 100%;
    height: 100%;
    margin: 0%;
    position: absolute;
  }

  .background {
    width: 100%;
    height: 100%;
  }

  .login {
    position: relative;
    left: 35%;
    top: 15%;
    padding-top: 30px;
    padding-left: 25px;
    width: 405px;
    height: 470px;
    font-size: 25px;
    font-weight: 400;
    background-color: white;
    border: 1px solid #E2E6ED;
    border-radius: 8px;
  }

  #username {
    margin-top: 60px;
    width: 380px;
    height: 60px;
  }

  #password {
    margin-top: 30px;
    width: 380px;
    height: 60px;
  }

  span {
    position: relative;
    right: 30px;
    top: 15px;
  }

  .el-button {
    margin-top: 80px;
    width: 380px;
    height: 60px;
    font-size: 20px;
    text-align: center;
    line-height: 1px;
  }
  .el-button span {
    position: relative;
    left:1px;
    top: 1px;
  }

  .to-register {
    position: relative;
    left: 320px;
    top: 30px;
    width: 60px;
    height: 20px;
    font-size: 15px;
    color: #0390FA;
    cursor: pointer;
  }
</style>
