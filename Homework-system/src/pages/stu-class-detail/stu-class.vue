<template>
  <div>
    <el-header>
      <router-link to="/class-detail"><i class="el-icon-back"></i></router-link>
      <div class="submit" @click="change1">提交作业</div>
      <div class="has-submit" @click="change2">已交作业</div>
      <router-link to="/setting-me"><div class="icon"><el-avatar :size="40" :src="circleUrl"></el-avatar></div></router-link>
    </el-header>
    <SubmitWork v-show="appear1"></SubmitWork>
    <HasSubmit v-show="appear2"></HasSubmit>
  </div>
</template>

<script>
import SubmitWork from './stu-homework/submit-work'
import HasSubmit from './stu-homework/hassubmit'
export default {
  name: 'StuClass',
  components: {
    SubmitWork,
    HasSubmit
  },
  data () {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      appear1: true,
      appear2: false
    }
  },
  methods: {
    change1: function() {
      this.appear1 = true
      this.appear2 = false
    },
    change2: function() {
      this.appear2 = true
      this.appear1 = false
    }
  }
}
</script>

<style scoped>
  .el-header {
    height: 60px;
    background-color: #F1F3F4;
    font-size: 20px;
    font-weight: 400;
    color: black;
    text-align: center;
    line-height: 60px;
  }

  .el-icon-back {
    position: relative;
    right: 49%;
    cursor: pointer;
  }

  .submit {
    position: relative;
    left: 42%;
    bottom: 60px;
    width: 8%;
    height: 100%;
    background-color: #F1F3F4;
    cursor: pointer;
  }

  .has-submit {
    position: relative;
    left: 50%;
    bottom: 120px;
    width: 8%;
    height: 100%;
    background-color: #F1F3F4;
    cursor: pointer;
  }

  .submit:hover {
    background-color: #5F6368;
  }

  .has-submit:hover {
    background-color: #5F6368;
  }

  .icon {
    width: 30px;
    position: relative;
    left: 96%;
    bottom: 170px;
    cursor: pointer;
  }
</style>
