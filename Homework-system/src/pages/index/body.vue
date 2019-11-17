<template>
  <el-main>
    <div class="part" id="part1">
      <div class="show">
        <div class="list"><img src=""></div>
        <div class="list"><img src=""></div>
        <div class="list"><img src=""></div>
        <div class="list"><img src=""></div>
      </div>
    </div>
    <div class="part"></div>
  </el-main>
</template>

<script>
export default {
  name:'IndexBody'
}
</script>

<style scoped>
   .el-main {
    height: 800px;
    background-color: #E9EEF3;
  }

  .part {
    width: 100%;
    height: 50%;
  }

  #part1 {
    background-image: url('../../images/img2.jpg');
    background-size: 100% 100%;
  }

  .show {
    position: relative;
    top: 80%;
    left: 10%;
    width: 80%;
    height: 60%;
    display: flex;
    justify-content: space-between;
  }

  .list {
    width: 20%;
    height: 100%;
    box-shadow: 5px 5px 3px 0 grey;
  }

  img {
    width: 100%;
    height: 100%;
  }
</style>
