<template>
  <div class="background">
    <div class="login">账号登录
      <el-form ref="form">
        <el-form-item>
          <el-input v-model="username" placeholder="请输入学号" id="username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入密码" v-model="password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
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
    login: function() {
      axios.post('', {
        uesrName: username,
        password: password
      })
      .then(function (response) {
        console.log(response);
        const h = this.$createElement;
        this.$notify({
          title: '提示',
          message: h('i','登录成功')
        });
      })
      .catch(function (error) {
        console.log(error);
        const h = this.$createElement;
        this.$notify({
          title: '提示',
          message: h('i','登录失败')
        });
      });
    },
    goRegister: function() {
      this.$router.push({path: '/register'})
    }
  }
}
</script>

<style scoped>
  .background {
    width: 100%;
    /* height: 100%; */
    height: 800px;
    background-image: url('../../images/img1.jpg');
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

  .el-form {
    margin-top: 50px;
  }

  .el-input {
    width: 380px;
    height: 80px;
  }

  .el-button {
    margin-top: 10px;
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
    top: 20px;
    width: 60px;
    height: 20px;
    font-size: 15px;
    color: #0390FA;
    cursor: pointer;
  }
</style>