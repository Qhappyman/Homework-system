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
                <el-checkbox label="前端"></el-checkbox>
                <el-checkbox label="后台"></el-checkbox>
                <el-checkbox label="安卓"></el-checkbox>
                <el-checkbox label="Python"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="角色">
              <el-radio v-model="user.changerole" label="1">讲师</el-radio>
              <el-radio v-model="user.changerole" label="2">学妹学弟</el-radio>
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


import HomeNav from '../home/components/home-nav'
export default {
  name: "SettingMe",
  data() {
    return {
      user: {
        name: "郭俊清",
        ID: "2018210842",
        profession: "信管",
        changerole: "", //保存着1/2,1老师，2学生
        password: ""
      },
      checkList: [] //选中的科目
    };
  },
  methods: {
    savebaseInf() {
      console.log(this.checkList);
    },
    savePassword() {
      console.log(parseInt(this.user.password));
    }
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


