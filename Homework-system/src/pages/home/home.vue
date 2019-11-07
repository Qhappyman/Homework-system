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
        courseList:[]
    }
},
methods:{
    addCourse(){
        this.courseList.unshift(1);
    }
}
}
</script>
<style scoped>

</style>