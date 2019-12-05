<template>
<div>

    <HomeNav></HomeNav>
    
    <CreateClass @add="addCourse"></CreateClass>
    <ClassList :courseList="courseList"></ClassList>
</div>
</template>
<script>
import axios from "axios";
import ClassList from './components/class-list'
import CreateClass from './components/create-class'
import HomeNav from './components/home-nav'
export default {
name:'Home',
components:{
     ClassList,
     CreateClass,
     HomeNav
},
data(){
    return{
        courseList:[1]
    }
},
methods:{
    addCourse(course){
        this.courseList.unshift(course);
}
},
mounted(){
    axios.post(
              'http://2z431s2133.wicp.vip:20570/work/Course/allCourse'             
            ).then(res=>{
                this.$store.commit('getCourse',res.data.data);
                console.log(res.data.data);
            })
}
}
</script>
<style scoped>

</style>