<template>
  <div id="continer">
      <header>前端<p class="header-p">课程号:20720</p></header>
     
      <main>学生数:23</main>
      <el-divider></el-divider>
      <footer><el-button type="primary" size="small" @click="deleteCourse">删除课程<el-button type="primary" icon="el-icon-delete" size="mini"></el-button></el-button></footer>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#continer{
    width:250px;
    height: 250px;
    border-radius: 10px;
    background-color: cornflowerblue;
    display: flex;
    flex-direction: column;
}
.header-p{
    font-size: 20px;
    line-height: 5px;
}

header{
    flex-grow: 3;
    text-align: center;
    line-height: 40px;
    font-size: 30px;
    color: cornflowerblue;
    background-image:url(../../../assets/course.jpg);
    background-repeat: no-repeat;
    background-size: 99%;

}
main{
    flex-grow: 3;
    text-align: center;
    font-size: 25px;
    padding: 0px;   
}
footer{
    flex-grow: 2;
    text-align: right;
    font-size: 20px;
    color: cornflowerblue;
    background-color: azure;
}
</style>
