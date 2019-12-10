<template>
  <div class="background">
    <div class="login">账号登录
      <el-form ref="form">
        <el-form-item>
          <el-input v-model="name" placeholder="请输入学号" id="username"></el-input>
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
import Vuex from "vuex"
import axios from 'axios'
export default{
  name:'Login',
  data () {
    return {
      name: '',
      password: '',
    }
  },
  methods: {
    jump(role){
      if(role==1){
        this.$router.push({path:'/home'})
      }
      else if(role==0){
        this.$router.push({path:'/stu-home'})
      }
      else{
        this.$router.push({path:'/*'})
      }
    },
    login: function() { 
       
      //加入axios后删上面四句
      let newthis = this;
      let jump;
      let data = {
        id:this.name,
        password:this.password
      }
      axios.post('http://2z431s2133.wicp.vip:20570/work//User/login',data)
      .then(function (response) {
        console.log(response.data.data.role==1);
        newthis.jump(response.data.data.role)
           newthis.$store.commit('saveInfo',{userid:response.data.data.id,role:response.data.data.role})
          window.localStorage.id = response.data.data.id;
      window.localStorage.role = response.data.data.role;
        const h = newthis.$createElement;
        newthis.$notify({
          title: '提示',
          message: h('i','登录成功')
        });    
        
      })
      .catch(function (error) {
        console.log(error);
        const h = newthis.$createElement;
        newthis.$notify({
          title: '提示',
          message: h('i','登录失败')
        });
      })
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