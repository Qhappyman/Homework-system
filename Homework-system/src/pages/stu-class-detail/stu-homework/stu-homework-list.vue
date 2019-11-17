<template>
  <div class="container">
    <div class="title" @click="lookUp">题目</div>
    <div class="content"></div>
    <div class="whole-text" @click="lookUp">查看全文></div>
    <div class="deadline">截止日期</div>
    <div class="score" @click="lookUp">成绩</div>
  </div>
</template>

<script>
export default {
  name: 'StuHomeworkList',
  data() {
  },
  methods: {
    lookUp: function() {
      this.$router.push({path: '/stu-class-detail'})
    }
  },
  props: ['items']
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

  .score {
    position: relative;
    left: 88%;
    width: 10%;
    height: 20%;
    text-align: center;
    line-height: 240%;
    border: 1px solid #BABCBE;
    border-radius: 4px;
    cursor: pointer;
  }

  .score:hover {
    color: #0390FA;
    border-color: #0390FA;
  }
</style>
