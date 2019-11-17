<template>
  <div class="container">
    <div class="title">{{title}}</div>
    <div class="deadline">{{deadline}}</div>
    <div class="score">成绩
      <div class="scores">{{score}}</div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: 'HasSubmit',
  data() {
    return {
      title: '作业题目',
      deadline: '截止日期',
      score: '分数未公布'
    }
  },
  props: ['appear2']
}
</script>

<style scoped>
  .container {
    position: relative;
    left: 10%;
    top: 40px;
    width: 80%;
    height: 500px;
  }

  .title {
    height: 6%;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
  }

  .deadline {
    position: relative;
    top: 2%;
    height: 3%;
    font-size: 12px;
    color: grey;
  }

  .score {
    position: relative;
    top: 8%;
    height: 6%;
    font-size: 15px;
    line-height: 30px;
  }

  .scores {
    position: relative;
    left: 5%;
    bottom: 29.5px;
    width: 95%;
    height: 100%;
    font-size: 20px;
    color: red;
  }

  .content {
    position: relative;
    top: 12%;
    height: 73%;
    border: 1px solid #E2E6ED;
    border-radius: 8px;
  }
</style>
