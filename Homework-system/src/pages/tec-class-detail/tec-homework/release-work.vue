<template>
  <div>
    <el-button type="primary" plain @click="handelRelease">
      发布作业
      <i class="el-icon-edit-outline"></i>
    </el-button>
    <el-form ref="homework" :model="homework" label-width="80px" v-if="release" class="homework">
      <el-form-item label="作业名称">
        <el-input v-model="homework.name"></el-input>
      </el-form-item>
      <el-form-item label="截止日期">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="homework.date"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
      </el-form-item>
      <el-form-item label="作业内容">
        <el-input type="textarea" v-model="homework.content"></el-input>
        <!-- <i class="el-icon-paperclip" title="添加附件"></i> -->
        <el-upload
          class="upload-demo"
          ref="upload"
          action=""
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false"
        >
          <!-- <el-button slot="trigger" size="small" type="primary" id="files">选取文件</el-button> -->
          <input type="file" value="上传文件" style="display:none" ref="fileSubmit" id="file">
          <label for="file" class="fileSubmit">选择文件</label>
         
          <div slot="tip" class="el-upload__tip">文件大小不超过5M</div>
        </el-upload>
         <el-button
            style="margin-left: 10px;"
            size="small"
            type="danger"
            @click="deleteFile"
          >删除附件</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="releaseWork">立即发布</el-button>
        <el-button @click="handelRelease">取消</el-button>
      </el-form-item>
<!-- <input type="file" id="filea"><input type="submit" @click="addfile"> -->
    </el-form>
    <el-collapse v-model="workName" @change="handleChange" class="work-list" :accordion="true">
      <Worklist v-for="(item,index) in worklist" :key="index" ref="worklist">
        <template slot="title">{{worklist[index].title}}:</template>
        <template slot="content">{{worklist[index].content}}</template>
        <!--千万不要修改插槽，不然会有很多问题-->
      </Worklist>
    </el-collapse>
  </div>
</template>

<script>
import axios from "axios";
import Worklist from "./tec-homework-list";
export default {
  name: "ReleaseWork",
  props:['direction'],
  components: {
    Worklist
  },
  data() {
    return {
      homework: {
        name: "",
        date: "",
        delivery: false,
        type: [],
        content: ""
      },
      release: false,
      fileList: [
       
      ],
      directnumber:'',
      workName: "",
      // direction:this.direction
    };
  },
  methods: {
    handelRelease() {
      this.release = !this.release;
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      // console.log(file, fileList);
    },
    handlePreview(file) {
      // console.log(file);
    },
    handleChange(val) {
      // console.log(val);
    },
    deleteFile(){
      console.log('delete');
    },
    getWorklist(){
      axios.get(`http://2z431s2133.wicp.vip:20570/work/Mission/searchMission?${this.directnumber}`);
    },
    releaseWork() {
      if (!(this.homework.name == "" || this.homework.content == "")) {

        this.$message({
          // title: "成功",
          message: "发布成功",
          type: "success"
        }),
        this.$store.commit('updateWorklist',{name:{title:this.homework.name,content:this.homework.content}});

 
axios.post(`http://2z431s2133.wicp.vip:20570/work/Mission/addMission?direction=${this.directnumber}&time=3&context=${this.homework.name+'and'+this.homework.content}`
)
.then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  // let file = this.$refs.fileSubmit;

  let file = document.getElementById('file');
  
  if(file.files[0]!=undefined){
    console.log(file.files[0]);
let formdata = new FormData();
formdata.append('file',file.files[0]);
axios.post(`http://2z431s2133.wicp.vip:20570/work/Mission/addMissionFile?missionId=1`,formdata,{ headers: {'Content-Type': 'multipart/form-data;charset=UTF-8'}});
  // let a = document.getElementById('files');
  }
          this.handelRelease();
      } else {
        this.$message.error({
          // title: "失败",
          message: "作业名称或内容不可为空",
          type:'warning'
        });
      }
    },
  },
  computed: {
    worklist() {
      return this.$store.state.workList;
    }
  },
  watch:{

  },
created(){
  if(this.direction == '前端'){
            this.directnumber=1;
        }
        else if(this.direction == '后台'){
          this.directnumber=2;
        }
         else if(this.direction == 'Python'){
          this.directnumber=3;
        }
        else{
          this.directnumber=4;
        }
        
},
mounted(){
  axios.get(`http://2z431s2133.wicp.vip:20570/work/Mission/searchMission?direction=${this.directnumber}`).then((res)=>{
    this.$store.commit('updateWorklist')   //分析返回数据传给store
  })
}, 
updated(){
 
}
};
</script>

<style scoped>
.homework {
  margin: 10px auto;
  border: 1px solid #e2e6ed;
  border-radius: 8px;
  padding: 10px 10px 0 0;
}
.work-list {
  margin: 10px auto;
  border: 1px solid #e2e6ed;
  border-radius: 8px;
  padding: 10px 10px 0 20px; /*此处css样式可复用与notice,可添加在全局样式里面*/
}
.fileSubmit{
  color: aliceblue;
  margin-top: 5px;
  display: inline-block;
  background-color:#409EFF;
  border-radius: 4px;
  width: 70px;
  height: 35px;
}
</style>
