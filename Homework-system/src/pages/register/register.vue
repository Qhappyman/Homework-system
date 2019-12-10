<template>
  <div class="background">
    <div class="container">
      <el-form :ref="form" :model="form" status-icon :rules="rules" label-width="80px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="学号" prop="id">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" type="text"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input v-model="form.checkPass" type="password"></el-input>
        </el-form-item>
        <el-form-item label="身份" prop="status">
          <el-radio-group v-model="form.role">
            <el-radio label="0">讲师</el-radio>
            <el-radio label="1">学生</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(form)">立即注册</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click='goLogin'>登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Login from '../login/login'
export default {
  name: "Register",
  data() {
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入姓名"));
      } else {
        callback();
      }
    };
    var validateNum = (rule, value, callback) => {
      let reg = /^20{1,2}\d{7}/;
      if (value === "") {
        callback(new Error("请输入学号"));
      } else if (!reg.test(value)) {
        callback(new Error("学号格式不正确"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        // if (this.form.checkPass !== '') {
        //   this.$refs.form.validateField('checkPass');
        // }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      form: {
        name: "",
        id: "",
        password: "",
        checkPass: "",
        role: "",
        email: ""
      },
      rules: {
        name: [{ validator: validateName, trigger: "blur" }],
        num: [{ validator: validateNum, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  components:{
    Login
  },
  methods: {
    goLogin(){
      this.$router.push({path:'/login'})
    },
    submitForm(form) {
      this.$refs[form].validate(valid => {
        let data = {
          email: this.form.email,
          id: this.form.id,
          password: this.form.password,
          role: this.role=='讲师'?0:1,   //无效,后续判断
          userName: this.form.name
        };
        if (valid) {
          axios.post(
            "http://2z431s2133.wicp.vip:20570/work//User/register",
            data
          ).then((res)=>{
            console.log(res);
            const h = this.$createElement;
          this.$notify({
            title: "提示",
            message: h("i", "注册成功")
          })
          this.$router.push({path:'/login'})
          })
          
        } else {
          const h = this.$createElement;
          this.$notify({
            title: "提示",
            message: h("i", "注册失败")
          });
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.background {
  width: 100%;
  height: 800px;
  background-image: url("../../images/img1.jpg");
}

.container {
  position: relative;
  left: 35%;
  top: 13%;
  padding-top: 10px;
  padding-left: 25px;
  width: 405px;
  height: 530px;
  font-size: 25px;
  font-weight: 400;
  background-color: white;
  border: 1px solid #e2e6ed;
  border-radius: 8px;
}

.el-form {
  margin-top: 30px;
}

.el-input {
  width: 280px;
}

.el-button {
  position: relative;
  right: 25px;
  top: 3px;
  width: 280px;
}
</style>
