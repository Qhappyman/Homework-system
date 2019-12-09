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
            <el-breadcrumb-item>
              <span style="color: white; line-height: 60px;" @click="jumpHome">我的课堂</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <span style="color:#ffe; line-height: 60px;">{{this.$route.params.stuclass}}</span>
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
        <div class="class-name">{{this.$route.params.stuclass}}</div>
        <div class="class-code"><p>加课码</p><p>学生数</p></div>
      </div>
      <div class="class-nav">
        <el-tabs v-model="activeName"  @tab-click="handleClick" :stretch = true class="nav-tap">
          <el-tab-pane label="作业" name="first">
            <el-collapse v-model="workName" @change="handleChange" class="work-list" :accordion="true">
              <StuHomeworkList :stu="stuwork" v-for="(item,index) in stuHomeworkList" :key="index" ref="stuHomeworkList">
                <template slot="title">{{stuHomeworkList[index].title}}:</template>
                <template slot="content">{{stuHomeworkList[index].content}}</template>
                <template slot="deadline">截止日期：{{stuHomeworkList[index].deadline}}</template>
              </StuHomeworkList>
            </el-collapse>
          </el-tab-pane>
          <el-tab-pane label="公告" name="second">
            <el-collapse v-model="workName" @change="handleChange" class="work-list" :accordion="true">
              <StuNotice :stu="stunotice" v-for="(item,index) in stuNoticeList" :key="index" ref="stuNoticeList">
                <template slot="title">{{stuNoticeList[index].title}}:</template>
                <template slot="content">{{stuNoticeList[index].content}}</template>
                <template slot="time">发布日期：{{stuNoticeList[index].time}}</template>
              </StuNotice>
            </el-collapse>
          </el-tab-pane>
        </el-tabs>
      </div>
    </main>
  </div>
</template>

<script>
import StuHomeworkList from './stu-homework/stu-homework-list'
import StuNotice from './stu-notice.vue/stu-notice'
export default {
  name: 'StuClass',
  components: {
    StuHomeworkList,
    StuNotice
  },
  data () {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      activeName: 'first',
      workName: '',
      stuwork: '',
      stunotice: ''
    }
  },
  methods: {
    handleClick(tab, event) {
        console.log(tab, event);
    },
    handleChange(val) {
      console.log(val);
    },
    jumpHome(){
        if(this.userInfo.role == '讲师'){
          this.$router.push({path:'/home'})
          console.log(132)
        }
        else if(this.userInfo.role == '学生'){
          this.$router.push({path:'/stu-home'})
        }
        else{
          this.$router.push({path:'/*'})
        }
      }
  },
  computed: {
    stuHomeworkList() {
      return this.$store.state.stuHomeworkList;
    },
    stuNoticeList() {
      return this.$store.state.stuNoticeList;
    },
    userInfo:function(){
        return this.$store.state.userInfo;
      }
  },
  created(){
    this.$store.dispatch('stuHomeworkList')
  },
  mounted(){
    this.stuwork = this.$route.params.stuclass
    this.stunotice = this.$route.params.stuclass
  }
}
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

main {
  border-radius: 15px;
  margin: 2% auto;
  display: flex;
  height: 235px;
  width: 80%;
  flex-direction: column;
}

.base-class {
  border-radius: 15px 15px 0 0;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  /* background-color: bisque; */
  background-image: url(../../../src/assets/class.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.class-name {
  border-radius: 15px 15px 0 0;
  flex-grow: 2;
  /* background-color: blueviolet; */
  text-align: center;
  font-size: 40px;
  padding-top: 20px;
}

.class-code {
  flex-grow: 1;
  /* line-height: 20px; */
  text-align: center
}

.class-nav {
  flex-grow: 1;
  height: 8%;
  background-color:#F1F3F4;
  border-radius: 0 0 15px 15px;
}

p {
  margin-top: 10px;
  font-size: 20px;
}

.work-list {
  margin: 10px auto;
  border: 1px solid #e2e6ed;
  border-radius: 8px;
  padding: 10px 10px 0 20px; /*此处css样式可复用与notice,可添加在全局样式里面*/
}

</style>
