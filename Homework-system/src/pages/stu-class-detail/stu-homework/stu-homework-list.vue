<template>
  <div>
    <el-collapse-item :title="this.title">
      <slot name="content"></slot>
      <br>
      <slot name="deadline"></slot>
      <br><br>
      <el-link type="primary" @click="stuHomeworkLis" class="icon" :underline="false">
        查看详情
        <i class="el-icon-view el-icon--right"></i>
      </el-link>
    </el-collapse-item>
  </div>
</template>

<script>
import Vuex from 'vuex'
export default {
  name: 'StuHomeworkList',
  data() {
    return {

    }
  },
  methods: {
    stuHomeworkLis: function (){
      this.$router.push({ path: `/stu-submit-work/${this.title}` })
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
  props: ['stu']
}
</script>

<style scoped>
</style>
