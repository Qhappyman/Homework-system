<template>
  <div class="container">
    <div class="title">公告题目</div>
    <div class="publish-time">发布时间</div>
    <div class="content">公告内容</div>
  </div>
</template>

<script>
export default {
  name: 'StuNotice'
}
</script>

<style scoped>
  .container {
    position: relative;
    left: 10%;
    margin-top: 25px;
    padding-left: 3%;
    width: 77%;
    height: 250px;
    border: 1px solid #BABCBE;
    border-radius: 8px;
  }

  .title {
    position: relative;
    top: 10%;
    width: 96%;
    height: 12%;
    font-size: 20px;
  }

  .publish-time {
    position: relative;
    top: 15%;
    width: 96%;
    height: 8%;
    font-size: 13px;
    color: #A0A0A0;
  }

  .content {
    position: relative;
    top: 21%;
    width: 96%;
    height: 45%;
    font-size: 16px;
  }
</style>
