<template>

  <div id="continer">
      {{checklist}}
      <header ref="class"><slot name="classname"></slot><p class="header-p">课程号:20720</p></header>
     
      <main>学生数:23<br>学年:2019</main>
      
      <footer><el-button type="primary" size="small" @click="deleteCourse">删除课程<el-button type="primary" icon="el-icon-delete" size="mini"></el-button></el-button></footer>
  </div>
</template>

<script>
export default {
    props:['classtype','item'],
data(){
    return{
        itemclass:this.item
    }
},
methods:{
    deleteCourse(){
        this.$store.commit('deleteClass',this.$slots.classname[0].text); //获取到对应课程的名字，通过插槽属性获取
        // this.$emit('delete')
        console.log(this.$slots.classname[0].text);
        console.log(this.checklist);
    }
},
computed:{
    checklist(){
        return this.$store.state.checkList
    }
}
}
</script>

<style scoped>
#continer{
    width:250px;
    height: 250px;
    border-radius: 10px;
    background-color:cornsilk;
    display: flex;
    flex-direction: column;
    margin: 10px 10px 10px  30px;
    align-items: stretch;
}
.header-p{
    font-size: 20px;
    line-height: 5px;
}

header{
   
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
    
    height: 20%;
    text-align: right;
    font-size: 20px;
    color: cornflowerblue;
    background-color: #409EFF;
    border-radius: 0 0 5px 5px;
}
</style>
