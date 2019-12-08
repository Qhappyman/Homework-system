<template>
  <div>
    <el-menu mode="horizontal">
      <el-menu-item>课程列表</el-menu-item>
      <el-menu-item class="join-class-nav">
        <el-button type="primary" @click="dialogFormVisible = true" class="join-class">
          加入课程
        </el-button>
        <el-dialog title="选择信息" :visible.sync="dialogFormVisible" class="dialog-title">
          <el-form ref="form" :model="createclass" label-width="80px">
            <el-form-item label="课程码">
              <el-input style="width:90%;" v-model="classCode"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <span>
              <el-button @click="dialogFormVisible = false; classCode = ''">取 消</el-button>
            </span>
            <span @click="joinClass">
              <el-button type="primary" @click="dialogFormVisible = false;">确定</el-button>
            </span>
          </div>
        </el-dialog>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import Bus from '../../../bus'
export default {
  name: 'JoinClass',
  data() {
    return {
      dialogFormVisible: false,
      classCode: ''
    }
  },
  methods: {
    joinClass: function() {
      // let appear = false
      // let appears = new Array()
      // for(let i = 0; i < this.courseList.length; i++) {
      //   if(this.courseList[i].code == this.classCode) {
      //     appear = true
      //     appears.push(appear)
      //   } else {
      //     appear = false
      //     appears.push(appear)
      //   }
      // }
      // console.log(appears)
      // Bus.$emit('val', appears)
      let ClassCode = this.classCode
      // let studentCoursePo = {
      //   studentCoursePo: ClassCode
      // }
      this.$axios.post('http://2z431s2133.wicp.vip:20570/work/StudentCourse/studentAddCourse?studentCoursePo=1')
        .then((response)=>{
          console.log(response)
        })
        .catch((error)=>{
          console.log(error)
        })
    }
  },
  computed: {
    courseList() {
      return this.$store.state.courseList
    }
  }
}
</script>

<style scoped>
  .join-class-nav {
    float: right;
  }
</style>
