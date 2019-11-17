<template>
  <div>

    <HomeNav></HomeNav>
    <header>
      <div class="mycount">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <!-- <i class="el-icon-user-solid"></i> -->
        <div style="font-family:Microsoft YaHei">{{user.name}}</div>
      </div>
    </header>
    <el-divider></el-divider>

    <main>
      <div class="information">
        <div class="base-inf">
          <el-form ref="user" :model="user" label-width="80px" size="mini" :rules="userrules">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item label="学号" prop="ID">
              <el-input v-model="user.ID"></el-input>
              <!-- <el-alert title="学号格式错误" type="error" class="alert" v-if="true"> -->
              </el-alert>
            </el-form-item>
            <el-form-item label="专业" prop="profession">
              <el-input v-model="user.profession"></el-input>
              <!-- <el-alert title="请填写专业" type="error" class="alert" v-if="true"></el-alert> -->
            </el-form-item>
            <el-form-item label="方向">
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="前端" value="前端"></el-checkbox>
                <el-checkbox label="后台" value="后台"></el-checkbox>
                <el-checkbox label="安卓" value="安卓"></el-checkbox>
                <el-checkbox label="Python" value="Python"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
         
            <el-form-item label="角色">
              <el-radio-group v-model="role">
              <el-radio v-model="role" label="1">讲师</el-radio>
              <el-radio v-model="role" label="2">学妹学弟</el-radio>
              </el-radio-group>
              <!-- <el-alert title="请选择身份" type="error" class="alert" v-if="true"></el-alert> -->
            </el-form-item>
    
            <el-form-item size="small">
              <el-button type="primary" @click="savebaseInf('user')">保存</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="password">
          <el-form
            :model="password"
            status-icon
            :rules="passrules"
            ref="password"
            label-width="100px"
            class="demo-ruleForm"
            size="small"
          >
            <el-form-item label="修改密码" prop="pass">
              <el-input type="password" v-model="password.pass" autocomplete="off"></el-input>
              <!-- <el-alert title="密码只能由字母,数字构成，不可包含特殊字符" type="error" class="alert" v-if="true"></el-alert> -->
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" autocomplete="off" v-model="password.checkPass"></el-input>
              <!-- <el-alert title="密码不一致" type="error" class="alert" v-if="true"></el-alert> -->
            </el-form-item>
            <el-form-item size="small">
              <el-button type="primary" @click="savePassword('password')">确认修改</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </main>

  </div>
</template>

<script>





import HomeNav from "../home/components/home-nav";
import {mapState} from 'vuex';
import {mapGetters} from 'vuex'

export default {
  name: "SettingMe",
  data() {
    let testID =(rule,value,callback)=>{
      let test = /^20{1,2}\d{7}/;
      if(!test.test(value)){
        return callback(new Error('学号格式不正确'));  //为了代码方便，可以获取到当年时间，2019级不允许选择教师
      }
    };
    let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.password.pass !== '') {
            let reg = /^[\w]{6,12}$/;
            if(!value.match(reg)){
              callback(new Error('密码6-12位，只能包括字母、数字和下划线'));
            } 
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.password.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      user: {
        name: "",
        ID: "2018210842",
        profession: "信管",
      },
      role: "", //保存着1/2,1老师，2学生
      password:{
        pass:"",
        checkPass:""
      },
      checkList: [ ], //选中的科目,保存着"前端","后台"
      
      userrules:{
        name:[
          {required:true,message:'请填写姓名',tigger:'blur'}
          ],
        ID:[
          {required:true,message:'请输入正确的学号',validator:testID,tigger:'blur'}
          ],
        profession:[
          {required:true,message:'请填写专业',tigger:'blur'}
          ]
      },
      passrules:{
        pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
      },
     
      
    
    };
  },
  
  methods: {
    savebaseInf() {
      let result = Object.keys(this.user);
    if(result.some((item)=>{
      return this.user[item] == "";   //通过user.item无法访问属性，反思一下区别？
    })){
      this.$notify.error({
          title: '未完善',
          message: '请完善你的内容'
        });
    }
    else{
      let newarr = new Array();     
      for(let i in this.checkList){
        newarr[i] = this.checkList[i];
      };
       let courselist= newarr.filter((item)=>{
      return !(item>=1&&item<=127)  
    })                        //因为最开始的checkList列表包括了observe的属性值，为了创建一个
      //纯粹的数组，定义一个新的数组来存放数据，去除了多余不需要的数据
      let _this = this;
      _this.$store.commit('update',{
        name:'teach',
        data:this.user, //更新store.teach数据
        roledata:this.role,
        checklist:'checkList',
        listdata: courselist
      });

      this.$notify({
          title: '保存',
          message: '保存成功',
          type:'success'
        });
    }
    },
   
    savePassword(password) {
      this.$refs[password].validate((valid) => {
          if (valid) {
            this.$notify({
              title:'成功',
              message:'修改成功',
              type:'success'
            })
          } else {
            this.$notify.error({
              title:'失败',
              message:'请检查密码'
            })
            console.log('error submit!!');
            return false;
          }
        });
      
    }
  },
  // watch: {
  //       getUserDetails (newData){
  //           this.user = newData;
  //       }
  //   },
  created(){
     this.user = this.$store.getters.getUserDetails; //获取用户数据
     this.checkList = this.$store.getters.getChecklist;
     this.role = this.$store.getters.getRole;
  },
   computed: {
     ...mapGetters([
        'getUserDetails',
        'getChecklist',
        'getRole'
    ]),
    ...mapState({
      name:state => state.checkList, //获取store的某些数据用于验证更新到state
   })
   },
   watch:{
     
   },
  components: {
    HomeNav
  }
};
</script>

<style scoped>
.el-icon-user-solid {
  display: inline-block;
}
header {
  width: 100%;
  height: 100px;
}
.mid-class {
  width: 100%;
  color: #409eff;
}
.mycount {
  position: absolute;
  text-align: center;
  margin: 20px 0 10px 0;
  left: 45%;
  font-size: 30px;
  font-weight: 600;
}
.alert{
  height: 30px;
}
.information {
  display: flex;
  flex-direction: column;
  width: 50%;
}
.base-inf {
  flex-grow: 4;
  margin-left: 2%;
}
.password {
  flex-grow: 1;
  float: left;
}
</style>>


