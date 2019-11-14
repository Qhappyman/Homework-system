<template>
      <el-collapse-item :title= this.title>
        <slot name="title"></slot><slot name="content"></slot>
      </el-collapse-item>
</template>

<script>
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
