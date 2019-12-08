<template>
  <el-main>
    <div class="part" id="part1"></div>
    <div class="part" id="part2">
      <div class="show">
        <div class="list"><img src="./../../assets/image1.jpg"></div>
        <div class="list"><img src="./../../assets/images2.png"></div>
        <div class="list"><img src="./../../assets/images3.png"></div>
        <div class="list"><img src="./../../assets/images43.jpg"></div>
      </div>
    </div>
  </el-main>
</template>

<script>
export default {
  name:'IndexBody'
}
</script>

<style scoped>
   .el-main {
    height: 1000px;
    background-color: #E9EEF3;
  }

  #part1 {
    width: 100%;
    height: 400px;
  }

  #part2 {
    width: 100%;
    height: 500px;
  }

  #part1 {
    background-image: url('../../images/img2.jpg');
    background-size: 100% 100%;
  }

  .show {
    position: relative;
    bottom: 20%;
    left: 10%;
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-content: space-between;
  }

  .list {
    width: 230px;
    height: 230px;
    margin-top: 50px;
    box-shadow: 5px 5px 3px 0 grey;
  }

  img {
    width: 100%;
    height: 100%;
  }
</style>
