<template>
  <div>
    <router-view/>
    <div>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        :router="true"
        active-text-color="#ffd04b"
      >
        <el-menu-item>
          <el-breadcrumb separator-class="el-icon-arrow-right" class="newstyle">
            <el-breadcrumb-item :to="{ path: '/home' }">
              <span>我的课堂</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <span style="color:#ffe">{{this.$route.params.class}}</span>  <!--根据params参数传递过来的的路由值进行更改-->
            </el-breadcrumb-item>
          </el-breadcrumb>
        </el-menu-item>

        <el-menu-item index="/setting-me">
          <div class="demo-basic--circle">
            <el-avatar :size="30" :src="circleUrl"></el-avatar>
          </div>
        </el-menu-item>

        <el-menu-item class="studio" index="/">
          系统主页
          <i class="el-icon-s-home"></i>
        </el-menu-item>
      </el-menu>
    </div>
    <main>
      <div class="base-class">
        <div class="class-name">{{this.$route.params.class}}</div>
        <div class="class-code"><p>加课码 : 123456</p><p>学生数 : 50</p></div>
      </div>
      <div class="class-nav">
        <el-tabs v-model="activeName"  @tab-click="handleClick" :stretch = true class="nav-tap">
    <el-tab-pane label="作业" name="first"><ReleaseWork :direction="this.$route.params.class"></ReleaseWork></el-tab-pane>
    <el-tab-pane label="公告" name="second"><ReleaseNotice></ReleaseNotice></el-tab-pane>
    
  </el-tabs>
      </div>
    </main>
  </div>
</template>

<script>
import ReleaseWork from './tec-homework/release-work'
import TecNotice from "./tec-notice/tec-notice";
import TecHomework from "./tec-homework/tec-homework.vue";
import ReleaseNotice from './tec-notice/release-notice'
export default {
  name: "TecClass",
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        activeName: 'first'
    };
  },
  methods:{
    handleClick(tab, event) {
        console.log(tab, event);
      }
  },
  components: {
    TecNotice,
    TecHomework,
    ReleaseWork,
    ReleaseNotice
  }
};
</script>

<style scoped>
.studio {
  float: right;
}
.newstyle {
  color: white;
  font-size: 16px;
  text-align: center;
  line-height: 50px;
}
main{
  border-radius: 15px;
  margin: 2% auto;
  display: flex;
  height: 230px;
  width: 80%;
  background-color: aquamarine;
  flex-direction: column;
}
.base-class{
  border-radius: 15px 15px 0 0;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  /* background-color: bisque; */
  background-image: url(../../../src/assets/class.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;

}
.class-name{
  border-radius: 15px 15px 0 0;
  flex-grow: 2;
  /* background-color: blueviolet; */
  text-align: center;
  font-size: 40px;
  padding-top: 20px;
  
}
.class-code{
  flex-grow: 1;
  /* line-height: 20px; */
  text-align: center
}
.class-nav{
  flex-grow: 1;
  height: 8%;
  background-color:#F1F3F4;
  border-radius: 0 0 15px 15px;
}

</style>

