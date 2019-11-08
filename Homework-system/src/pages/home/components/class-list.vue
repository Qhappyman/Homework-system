<template>
  <div class="class-list">
      <Class v-for="item in classlist" :key="item.index" @delete="handleDelete" :classtype="classlist" style="display:inline-block; margin-right:15px;">item</Class>
      

  </div>
</template>

<script>
import Class from '../components/class'
export default {
    props:['courseList'],
components:{
    Class
},
data(){
    return{
      classlist:this.courseList
    }
},
methods:{
     handleDelete(){
       this.classlist.pop();
       console.log(this.classlist);
     }
  },
  

}


</script>

<style scoped>

</style>>

