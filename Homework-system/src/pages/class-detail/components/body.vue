<template>
  <div>
    <StuHomeworkList v-for="(item,index) in items" :key="index"></StuHomeworkList>
  </div>
</template>

<script>
import StuHomeworkList from '../../stu-class-detail/stu-homework/stu-homework-list'
export default {
  name: 'Body',
  data() {
    return {
      items:['1','2']
    }
  },
  components: {
    StuHomeworkList
  }
}
</script>

<style scoped>

</style>
