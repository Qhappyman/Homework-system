<template>
  <div>
    <el-collapse-item :title="this.title">
      <slot name="content"></slot>
      <br>
      <slot name="time"></slot>
    </el-collapse-item>
  </div>
</template>

<script>
import Vuex from 'vuex'
export default {
  name: 'StuNotice',
  data() {
    return {

    }
  },
  methods: {},
  computed: {
    stuNoticekList(){
      return this.$store.state.stuNoticeList;
    },
    title(){
      return this.$slots.title[0].text;
    }
  },
  props: ['stu']
}
</script>

<style scoped>
  .container {
    position: relative;
    left: 10%;
    margin-top: 25px;
    padding-left: 3%;
    width: 77%;
    height: 250px;
    border: 1px solid #BABCBE;
    border-radius: 8px;
  }

  .title {
    position: relative;
    top: 10%;
    width: 96%;
    height: 12%;
    font-size: 20px;
  }

  .publish-time {
    position: relative;
    top: 15%;
    width: 96%;
    height: 8%;
    font-size: 13px;
    color: #A0A0A0;
  }

  .content {
    position: relative;
    top: 21%;
    width: 96%;
    height: 45%;
    font-size: 16px;
  }
</style>
