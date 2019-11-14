<template>
  <div class="container">
    <div class="title" @click="lookUp">作业题目</div>
    <div class="content">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
    <div class="whole-text" @click="lookUp">查看全文></div>
    <div class="deadline">截止日期</div>
    <el-button @click="lookUp">{{score}}</el-button>
  </div>
</template>

<script>
export default {
  name: 'StuHomeworkList',
  data() {
    return {
      score: '成绩未公布'
    }
  },
  methods: {
    lookUp: function() {
      this.$router.push({path: '/stu-class-detail'})
    }
  }
}
</script>

<style scoped>
  .container {
    position: relative;
    left: 10%;
    margin-top: 20px;
    padding-left: 2%;
    width: 78%;
    height: 200px;
    border: 1px solid #BABCBE;
    border-radius: 8px;
  }

  .title {
    position: relative;
    top: 10%;
    width: 85%;
    height: 15%;
    font-size: 20px;
    cursor: pointer;
  }

  .title:hover {
    color: #0390FA;
  }

  .content {
    position: relative;
    top: 25%;
    width: 85%;
    height: 15%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
  }

  .whole-text {
    position: relative;
    top: 25%;
    width: 7%;
    height: 15%;
    color: #0390FA;
    cursor: pointer;
  }

  .deadline {
    position: relative;
    top: 30%;
    width: 85%;
    height: 10%;
    font-size: 15px;
    color: #BABCBE;
  }

  .el-button {
    position: relative;
    left: 88%;
  }
</style>
