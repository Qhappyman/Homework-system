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
          <el-form ref="form" :model="user" label-width="80px" size="mini">
            <el-form-item label="姓名">
              <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item label="学号">
              <el-input v-model="user.ID"></el-input>
            </el-form-item>
            <el-form-item label="专业">
              <el-input v-model="user.profession"></el-input>
            </el-form-item>
            <el-form-item label="方向">
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="前端" value="1"></el-checkbox>
                <el-checkbox label="后台" value="2"></el-checkbox>
                <el-checkbox label="安卓" value="3"></el-checkbox>
                <el-checkbox label="Python" value="4"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="角色">
              <el-radio v-model="role" label="1">讲师</el-radio>
              <el-radio v-model="role" label="2">学妹学弟</el-radio>
            </el-form-item>

            <el-form-item size="small">
              <el-button type="primary" @click="savebaseInf">保存</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="password">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
            size="small"
          >
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="user.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
              <el-input type="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item size="small">
              <el-button type="primary" @click="savePassword">确认修改</el-button>
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
    return {
      user: {
        name: "",
        ID: "2018210842",
        profession: "信管",
        password: ""
      },
      checkList: [ ], //选中的科目,保存着"前端","后台"
      role: "", //保存1/2,1老师，2学生
    };
  },
  methods: {
    savebaseInf() {
      let _this = this;
      _this.$store.commit('update',{
        name:'teach',
        data:this.user, //更新store.teach数据
        list:'checkList',
        listdata:this.checkList,
        role:'role',
        roledata:this.role,
        checklist:'checkList',
        listdata:this.checkList
      });
      console.log(this.checkList);
    },
    savePassword() {
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
  },
   computed: {
     ...mapGetters([
        'getUserDetails',
        'getChecklist'
    ]),
    ...mapState({
      name:state => state.checkList //获取store的某些数据用于验证更新到state
   })
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

