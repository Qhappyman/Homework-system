<template>
<div>
  <router-view></router-view>
</div>
</template>

<script>
import FixHomework from './fix-homework'
import ReleaseWork from './release-work'
import StuHomework from './stu-homework'
import TecHomeworkList from './tec-homework-list'
export default {
name:'TecHomework',
components:{
    FixHomework,
    ReleaseWork,
    StuHomework,
    TecHomeworkList
}
}
</script>

<style>

</style>