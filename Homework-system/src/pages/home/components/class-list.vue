<template>
  <div>
      <Class v-for="item in classlist" :key="item.index" style="display:inline-block; margin-right:15px;">item</Class>
      

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
     
  },
  



}


</script>

<style>

</style>