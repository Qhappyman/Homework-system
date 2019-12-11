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
import Vuex from "vuex";
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
        
},
computed:{
    studentId(){
        
    }
}
},
mounted(){
    let newthis = this;
    axios.get(
              `/Course/selectCourseByTeacherId?id=${localStorage.id}`         
            ).then(res=>{
                console.log(res.data.data);
                this.$store.commit('getCourse',res.data.data)
            })
}
}
</script>
<style scoped>

</style>
