<template>
  <div>
    <el-menu mode="horizontal">
      <el-menu-item>课程列表</el-menu-item>

      <el-menu-item class="create-class-nav">
        <el-button type="text" @click="dialogFormVisible = true" class="create-release">
          <i class="el-icon-plus"></i>创建课程
        </el-button>
        <el-dialog title="选择信息" :visible.sync="dialogFormVisible" class="dialog-title">
          <el-form ref="form" :model="createclass" label-width="80px">
            <el-form-item label="课程名称:">
              <el-select v-model="createclass.course" placeholder="请选择课程名称">
                <el-option label="前端" value="1"></el-option>
                <el-option label="后台" value="2"></el-option>
                <el-option label="安卓" value="3"></el-option>
                <el-option label="Python" value="4"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="学年:">
              <el-select v-model="createclass.schoolyear" placeholder="请选择学年" >
                <el-option label="2017-2018" value="2017"></el-option>
                <el-option label="2018-2019" value="2018"></el-option>
                <el-option label="2019-2020" value="2019"></el-option>
                <el-option label="2020-2021" value="2020"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="学期:">
              <el-select v-model="createclass.schoolteam" placeholder="请选择学期">
                <el-option label="第一学期" value="first"></el-option>
                <el-option label="第二学期" value="second"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <span @click="createClass">
              <el-button type="primary" @click="dialogFormVisible = false">确定</el-button>
            </span>
          </div>
        </el-dialog>

        <el-button type="text" @click="dialogForVisible = true" class="create-release">
          <i class="el-icon-plus"></i>发布公告
        </el-button>
        <el-dialog title="编辑公告" :visible.sync="dialogForVisible" class="dialog-title">
          <el-form ref="form" :model="releasenotice" label-width="80px">
            <el-form-item label="课程">
              <el-select v-model="releasenotice.noticecourse" placeholder="请选择课程">
                <el-option label="前端" value="1"></el-option>
                <el-option label="后台" value="2"></el-option>
                <el-option label="安卓" value="3"></el-option>
                <el-option label="Python" value="4"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="公告内容">
              <el-input type="textarea" v-model="releasenotice.notice"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogForVisible = false">取 消</el-button>
            <span @click="releaseNotice">
              <el-button type="primary" @click="dialogForVisible = false">发布</el-button>
            </span>
          </div>
        </el-dialog>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogForVisible: false,
      dialogForVisible: false,
      createclass: {
        course: "",
        schoolyear: "",
        schoolteam: ""
      },
      releasenotice: {
        notice: "",
        noticecourse: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    onSubmit: function() {},
    cancle: function() {},
    createClass() {
      if((this.createclass.course=="")||(this.createclass.schoolyear=="")||(this.createclass.schoolteam=="")){
        
        this.$notify.error({
          title: '未完善',
          message: '请完善你的内容'
        });
        this.dialogFormVisible = true;
      }
      // else{
      //   if(this.classlist.indexOf(this.createclass.course)!=-1){
      //     console.log('error');
      //     console.log(this.createclass.course)
      //   }
      
      else{
      this.$notify({
        title: "成功",
        message: "创建成功",
        type: "success"
      });
      console.log(this.createclass.course)
      this.$emit('add',this.createclass.course);
      if(this.createclass.course == 1){
        this.createclass.course = "前端";
      }
      else if(this.createclass.course == 2){
        this.createclass.course = "后台";
      }
      else if(this.createclass.course == 3){
        this.createclass.course = "安卓";
      }
      else
        this.createclass.course = "Python"; //根据选择的课程进行更新state,代码需要简化
      this.$store.commit('updateChecklist',this.createclass.course);
      console.log(this.createclass.course)
      }
      
    },
    releaseNotice() {
      if((this.releasenotice.notice=="")||(this.releasenotice.noticecourse=="")){
        this.$notify.error({
          title: '未完善',
          message: '请完善你的内容'
        });
        this.dialogForVisible = true;
      }
      else{
      this.$notify({
        title: "成功",
        message: "发布成功",
        type: "success"
      });
    }
  }
  },
  computed:{
    classlist(){
      return this.$store.checkList;
    }
      
    
  },
  watch:{
  }
};
</script>

<style scoped>
.el-popover2 {
  margin-left: 5px;
}
.create-class-nav {
  float: right;
}
el-menu-item {
  margin: 0 10px;
}
.create-release {
  background-color: #409eff;
  color: white;
  border-radius: 8px;
  width: 120px;
  margin-left: 20px;
}
i {
  color: whitesmoke;
}
.dialog-title {
  font-family: Microsoft YaHei;
}
</style>>
