<template>
  <div>
      <el-menu mode="horizontal">
        <el-menu-item>
          课程列表
        </el-menu-item>

          <el-menu-item class="create-class-nav">
    <el-popover placement="right" width="500" trigger="click">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="课程名称:">
          <el-select v-model="form.course" placeholder="请选择课程名称" filterable="true">
            <el-option label="前端" value="qianduan"></el-option>
            <el-option label="后台" value="houtai"></el-option>
            <el-option label="安卓" value="anzhuo"></el-option>
            <el-option label="Python" value="python"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学年:">
          <el-select v-model="form.schoolyear" placeholder="请选择学年" filterable="true">
            <el-option label="2017-2018" value="2017"></el-option>
            <el-option label="2018-2019" value="2018"></el-option>
            <el-option label="2019-2020" value="2019"></el-option>
            <el-option label="2020-2021" value="2020"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学期:">
          <el-select v-model="form.schoolteam" placeholder="请选择学期" filterable="true">
            <el-option label="第一学期" value="first"></el-option>
            <el-option label="第二学期" value="second"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" plain @click="createClass">立即创建</el-button>
          <el-button @click="cancle">取消</el-button>
        </el-form-item>
      </el-form>
      <el-button slot="reference" ref="create"><i class="el-icon-plus"></i>创建课程</el-button>
    </el-popover>
          
          
    <el-popover placement="right" width="500" trigger="click" class="el-popover2">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="课程">
          <el-select v-model="form.noticecourse" placeholder="请选择课程">
            <el-option label="前端" value="qianduan"></el-option>
            <el-option label="后台" value="houtai"></el-option>
            <el-option label="安卓" value="anzhuo"></el-option>
            <el-option label="Python" value="python"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="公告内容">
          <el-input type="textarea" v-model="form.notice"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="releaseNotice">立即发布</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
      <el-button slot="reference" ref="create"><i class="el-icon-plus"></i>发布公告</el-button>
    </el-popover>
          </el-menu-item>
      </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        course: "",
        delivery: false,
        schoolteam: "",
        schoolyear: "",
        notice: "",
        noticecourse: ""
      }
    };
  },
  methods: {
    onSubmit: function() {},
    cancle: function() {},
    createClass() {
      this.$notify({
        title: "成功",
        message: "创建成功",
        type: "success"
      });
    },
    releaseNotice(){
      this.$notify({
        title: "成功",
        message: "发布成功",
        type: "success"
      });
    }
  }
};
</script>

<style scoped>
.el-popover2{
    margin-left: 5px;
}
.create-class-nav{
  float:right;
}
el-menu-item{
  margin: 0 10px;
}
</style>>
