<template>
  <div class="container" style="border: 1px solid #F1F3F4; border-radius: 4px;">
    <header ref="class"><slot name="name"></slot></header>
    <main><slot name="code"></slot></main>
    <footer><slot name="button"><el-button type="primary" size="big" @click="goCourse" style="float:left">进入课程</el-button><el-button type="primary" size="big" @click="deleteCourse" style="float:right">删除课程<i class="el-icon-delete"></i></el-button></slot></footer>
  </div>
</template>

<script>
export default {
  name: 'Course',
  methods: {
    goCourse() {
      this.$router.push({ path: `/stu-class-detail/${this.$slots.name[0].text}` })
    }
  }
}
</script>

<style scoped>
  .continer{
    margin-top: 10%;
    width:250px;
    border-radius: 10px;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    margin: 10px 10px 10px  30px;
    align-items: stretch;
  }
  header{
    margin-top: 10%;
    text-align: center;
    height: 40%;
    line-height: 50px;
    font-size: 40px;
    color: cornflowerblue;
    background-image:url(../../../assets/course.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 5px 0 0 5px;
  }

  main{
    height: 40%;
    text-align: center;
    font-size: 20px;
    line-height: 40px;
  }

  footer{
    height: 18%;
    text-align: right;
    font-size: 20px;
    color: cornflowerblue;
    background-color: #409EFF;
    border-radius: 0 0 5px 5px;
  }
</style>
