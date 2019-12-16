<template>
  <div>
    <el-menu mode="horizontal">
      <el-menu-item>课程列表</el-menu-item>
      <el-menu-item class="join-class-nav">
        <el-button type="primary" @click="dialogFormVisible = true" class="join-class">
          加入课程
        </el-button>
        <el-dialog title="选择信息" :visible.sync="dialogFormVisible" class="dialog-title">
          <el-form ref="form" label-width="80px">
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
import axios from 'axios'
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
      // Bus.$emit('val', this.classCode)
      //let newthis = this;   //axios里面的this作用域变化了，所以需要一个临时的newthis来代替this
      this.$axios.post('http://2z431s2133.wicp.vip:31188/work/StudentCourse/studentAddCourse',{
        courseId: this.classCode,
        studentId: this.GLOBAL.userId
      })
      .then((response)=>{
        console.log(response)
        alert('加入课程成功！')
        this.$router.go(0)
      })
      .catch((error)=>{
        console.log(error)
        alert('加入课程失败！')
        this.$router.go(0)
      })
      this.classCode = ''
    }
  }
}
</script>

<style scoped>
  .join-class-nav {
    float: right;
  }
</style>
