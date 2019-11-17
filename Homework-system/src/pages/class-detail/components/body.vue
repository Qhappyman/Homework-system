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
      items:[
        {
          title:'题目1',
          content: '内容1',
          score: '成绩1'
        },
        {
          title:'题目2',
          content: '内容2',
          score: '成绩2'
        }
      ]
    }
  },
  components: {
    StuHomeworkList
  }
}
</script>

<style scoped>

</style>
