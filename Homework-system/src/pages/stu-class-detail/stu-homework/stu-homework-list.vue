<template>
  <div>
    <el-collapse-item :title="this.title">
      <slot name="content"></slot>
      <br>
      <slot name="deadline"></slot>
      <br>
      <el-link type="primary" @click="stuHomeworkLi" class="icon" :underline="false">
        查看详情
        <i class="el-icon-view el-icon--right"></i>
      </el-link>
    </el-collapse-item>
  </div>
</template>

<script>
import Bus from '../../../bus'
import Vuex from 'vuex'
export default {
  name: 'StuHomeworkList',
  data() {
    return {
      stuHomeworkList: ''
    }
  },
  methods: {
    stuHomeworkLi: function (){
      this.$router.push({ path: `/stu-submit-work/${this.title}` })
      Bus.$emit('val',this.stuHomeworkList)
    }
  },
  computed: {
    // stuHomeworkList(){
    //   return this.$store.state.stuHomeworkList;
    // },
    title(){
      return this.$slots.title[0].text;
    },
    content(){
      return this.$slots.content[0].text;
    }
  },
  mounted() {
    this.$axios.get(`http://2z431s2133.wicp.vip:31188/work/Mission/searchMission?courseId=${this.enterStuCourse.code}`)
      .then((response) => {
        console.log(response)
        this.stuHomeworkList = response.data.data
        })
        .catch((error) => {
          console.log(error)
        })
  },
  props: ['stu']
}
</script>

<style scoped>
</style>
