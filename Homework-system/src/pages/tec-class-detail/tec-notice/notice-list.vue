<template>
      <el-collapse-item :title="title">
         
        <span style="display:none"><slot name="title"></slot></span>
        <slot name="content"></slot>
      </el-collapse-item>
</template>

<script>
import axios from "axios";
import Vuex from "vuex";
export default {
name:'Noticelist',
data(){
    return{
        // titl:"1"
    }
},
computed:{
    noticelist(){
        return this.$store.state.noticeList;
    },
    title(){   
       return  this.$slots.title[0].text;
    }
},
methods:{
    
},
mounted(){
    
}
}
</script>

<style scoped>
.icon{
    display: block;
    margin-top: 15px;
}
</style>
