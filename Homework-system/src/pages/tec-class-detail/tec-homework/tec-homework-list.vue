<template>
  <div>
    <el-collapse-item :title= this.title>
      <slot name="title"></slot><slot name="content"></slot>
      <el-link type="primary" @click="workDetail" class="icon" :underline="false">查看详情<i class="el-icon-view el-icon--right"></i> </el-link>
    </el-collapse-item>
  </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    props:['clas'],
name:'Worklist',
data(){
    return{
        // titl:"1"
    }
},
computed:{
    worklist(){
      return this.$store.state.workList;
    },
    title(){
      return  this.$slots.title[0].text;
    }
},
methods:{
    workDetail(){
        this.$router.push({path:`/stu-homework/${this.$slots.title[0].text}`})
    }
},
mounted(){
    // let a =worklist.forEach((item,index)=>{
    //         if(worklist[index][content] == this.$slots.title[0].text ){
    //             return worklist[index].title;
    //         }
    //     });
    // Object.defineProperty(worklist,)
    // this.$set(this,"titl", a);
}
}
</script>

<style scoped>
.icon{
    display: block;
    margin-top: 15px;
}
</style>
