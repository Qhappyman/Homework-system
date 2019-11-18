<template>
<div>
      <el-collapse-item :title= this.title>
        <slot name="title"></slot><slot name="content"></slot>
         <el-link type="primary" @click="workDetail" class="icon" :underline="false">查看作业情况<i class="el-icon-view el-icon--right"></i> </el-link>
        <!-- <el-button type="danger" round size="mini" class="delete" @click="deleteWork">删除任务</el-button> -->
      </el-collapse-item>
      
      </div>
</template>

<script>
import axios from 'axios'
import Vuex from 'vuex'
export default {
    props:['clas','workname'],
name:'Worklist',
data(){
    return{
        deletename:this.workname
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
    // },
    // deleteWork(){
    //     axios.delete('http://2z431s2133.wicp.vip:20570/work/Mission/deleteMission?missionId=1').then((res)=>console.log(res))
    // }
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
.delete{
    margin-top: 10px
}
</style>
