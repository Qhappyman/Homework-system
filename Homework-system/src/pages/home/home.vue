<template>
<div>

    <HomeNav></HomeNav>
    
    <CreateClass @add="addCourse"></CreateClass>
    <ClassList :courseList="courseList"></ClassList>
</div>
</template>
<script>
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
}
}
</script>
<style scoped>

</style>