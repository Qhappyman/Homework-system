<template>
  <div class="class-list">
      <Class v-for="item in checklist" :key="item.index" style="display:inline-block; margin-right:15px;"><template v-slot:classname>{{item}}</template></Class>   <!--通过插槽动态加入数据-->
      

  </div>
</template>

<script>
import Class from '../components/class'
export default {
    // props:['courseList'],
components:{
    Class
},
data(){
    return{
      
    }
},
methods:{
  },
  created(){
    // this.classlist = this.$store.getters.getChecklist;
  },
  computed:{
    checklist(){
        return this.$store.state.checkList;
    }
  }
  

}


</script>

<style scoped>

</style>

