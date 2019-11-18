<template>
  <div>
    <StuHomeworkList></StuHomeworkList>
    <StuNotice></StuNotice>
  </div>
</template>

<script>
import StuHomeworkList from '../../stu-class-detail/stu-homework/stu-homework-list';
import StuNotice from '../../stu-class-detail/stu-notice.vue/stu-notice'
export default {
  name: 'Body',
  components: {
    StuHomeworkList,
StuNotice
  }
}
</script>

<style scoped>

</style>
