<template>
<div>

    <HomeNav></HomeNav>
    <ClassList></ClassList>
    <CreateClass></CreateClass>
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
}
}
</script>
<style scoped>

</style>