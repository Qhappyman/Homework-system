<template>
  <div>
    <el-button type="primary" plain @click="handelRelease">
      发布作业
      <i class="el-icon-edit-outline"></i>
    </el-button>
    <el-form
      ref="updateWork"
      :model="updateWork"
      label-width="80px"
      class="homework"
      v-if="ifupdate"
    >
      <el-form-item label="作业名称">
        <el-input v-model="updateWork.name"></el-input>
      </el-form-item>
      <el-form-item label="截止日期">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="updateWork.date"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
      </el-form-item>
      <el-form-item label="作业内容">
        <el-input type="textarea" v-model="updateWork.content"></el-input>
        <el-upload
          class="upload-demo"
          ref="upload"
          action
          :auto-upload="false"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
        >
          <div @click.stop>
            <input
              type="file"
              value="上传文件"
            
              
              ref="fileSubmit"
              id="file2"
            />
            <label for="file" class="fileSubmit">选择文件</label>
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="defineUpdate">确认修改</el-button>
        <el-button @click="cancleUpdate">取消</el-button>
      </el-form-item>
      <!-- <input type="file" id="filea"><input type="submit" @click="addfile"> -->
    </el-form>
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
          action
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :auto-upload="false"
          :file-list="fileList"
        >
          <!-- <el-button slot="trigger" size="small" type="primary" id="files">选取文件</el-button> -->
          <div @click.stop>
            <input type="file" value="上传文件"  ref="fileSubmit" id="file" />
            <label for="file" class="fileSubmit">选择文件</label>
          </div>
          <div slot="tip" class="el-upload__tip">文件大小不超过5M{{releasemissionId}}</div>
        </el-upload>
        <!-- <el-button style="margin-left: 10px;" size="small" type="danger" @click="deleteFile">删除附件</el-button> -->
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="releaseWork">立即发布</el-button>
        <el-button @click="handelRelease">取消</el-button>
      </el-form-item>
      <!-- <input type="file" id="filea"><input type="submit" @click="addfile"> -->
    </el-form>
    <!-- <el-collapse v-model="workName" @change="handleChange" class="work-list" :accordion="false"> -->
      <!-- <Worklist
        v-for="(item,index) in worklist"
        :key="index"
        ref="worklist"
        @updateWork="handleUpdate"
      > -->
        <!-- <template slot="title">{{worklist[index].context.split('and')[0]}}:</template> -->
        <!-- <template slot="content">{{worklist[index].context.split('and')[1]}}</template> -->
    <el-collapse v-model="workName" @change="handleChange" class="work-list" :accordion="true">
      <Worklist v-for="(item,index) in worklist" :key="index" ref="worklist" @updateWork="handleUpdate">
        <template slot="title">{{worklist[index].title}}</template>
        <template slot="content">{{worklist[index].content}}</template>
        <!--千万不要修改插槽，不然会有很多问题-->
      </Worklist>
    </el-collapse>
  </div>
</template>

<script>
import axios from "axios";
import Vuex from "vuex";
import Worklist from "./tec-homework-list";
export default {
  props:["clas"],
  name: "ReleaseWork",
  props: ["courseInfo"],
  components: {
    Worklist
  },
  data() {
    return {
      courseinfo:this.courseInfo,
      homework: {
        name: "",
        date: "",
        delivery: false,
        type: [],
        content: ""
      },
      release: false,
      fileList: [],
      updateId:'',
      workName: "",
      releasemissionId:'',
      updateWork: {
        name: "",
        content: "",
        data: "",
        type: [],
        delivery: false
      },
      ifupdate: false,
      // direction:this.direction
      fileList: [  
      ],
    my:this.clas,
      workName: ""
    };
  },
  methods: {
    handelRelease() {
      this.release = !this.release;
      this.ifupdate = false;
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
    cancleUpdate() {
      this.ifupdate = false;
    },
    defineUpdate() {
      if (this.updateWork.name != "" && this.updateWork.content != "") {
        let file2 = document.getElementById("file2");
        // console.log(file2.files[0]);
        if (file2.files[0] != undefined) {
          console.log(file2.files[0]);
          var formdata = new FormData();
          formdata.append("file", file2.files[0]);
        }
        let newthis = this;
        //this.updatetitle获取missionId
        //应该获取到选择的mission的id
        axios
          .post(
            `/Mission/updateMission?missionId=${this.updateId}&title=${newthis.updateWork.name}&content=${newthis.updateWork.content}`,
            formdata,
            { headers: { "Content-Type": "multipart/form-data;charset=UTF-8" } }
          )
          .then(res => {
            console.log("success");
            this.$message({
              type: "success",
              message: "已修改"
            });
            this.ifupdate = false;
            this.$store.commit("updateWork", {
              context: this.updateWork.name  //需要完善，主要是title问题
            });   //先使视图更新，然后在跳出页面时使数据更新
          })
          .catch(error => {
            this.$message({
              type: "info",
              message: "网络错误"
            });
          });
      } else {
        this.$message.error({
          message: "作业名称或内容不可为空",
          type: "warning"
        });
      }
    },
    handleUpdate(param) {
      this.updateId = param;
      this.ifupdate = true;
      this.release = false;
    },
    deleteFile() {
      console.log("delete");
      let file = document.getElementById("file");
      if (file.files[0] == undefined) {
        this.$message({
          type: "info",
          message: "未上传附件"
        });
      } else {
        console.log(file.files[0]);
        file.value = "";
        this.fileList = [];
        console.log(file.files[0]);
        this.$message({
          message: "已删除",
          type: "success"
        });
      }
    },
    getWorklist() {
      // axios.get(`http://2z431s2133.wicp.vip:20570/work/Mission/searchMission?${this.directnumber}`);
    },
    deleteWork() {
      // axios.delete(
      //   `http://2z431s2133.wicp.vip:20570/work/Mission/deleteMission?mission=1`
      // );
      this.$store.commit("deleteWorklist");
    },
    releaseWork() {
      if (!(this.homework.name == ""||this.homework.content == "")) {
       let newthis = this;
       let missionid;
       let data = {
         content:this.homework.content,
         title:this.homework.name,
         courseId:newthis.entercourse.courseId||localStorage.courseId
       }
       axios
          .post(
            `/Mission/addMission`,data
          )
          .then((response)=>{
            newthis.releasemissionId = response.data.data.id;  //获取到返回来的missionId
            this.$store.commit("addWorklist", {content: this.homework.content,title: this.homework.name})
            this.$message({
              message: "发布成功",
              type: "success"
            })
            this.handelRelease();
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "网络错误"
            })
          });
        // let file = this.$refs.fileSubmit;

        
      } else {
       this.$message({
              type: "info",
              message: "作业不可为空"
            });
       } 
  
  }
  },
  watch:{
    releasemissionId(){
      let file = document.getElementById("file");
        if (file.files[0] != undefined) {
          console.log(file.files[0]);
          let formdata = new FormData();
          formdata.append("file", file.files[0]);
          axios
            .post(
              `/Mission/addMissionFile?missionId=${this.releasemissionId}`,  //获取第一步发布作业返回来的missionId
              formdata,
              {
                headers: { "Content-Type": "multipart/form-data;charset=UTF-8" }
              }
            )
            .then(res => {
              console.log("file success");
            })
            .catch(error => {
              this.$message({
                type: "info",
                message: "发布失败"
              });
            });
        }
    }
  },
  computed: {
    worklist() {
      return this.$store.state.workList;
    },
    entercourse(){
      return this.$store.state.entercourse;
    }
  },
  mounted() {
    let newthis=this;
    axios
      .get(
        `/Mission/searchMission?courseId=${newthis.entercourse.courseId||JSON.parse(localStorage.entercourse).courseId}`
      )
      .then(res => {
        let workArray = res.data.data;
        if (workArray == "") {
          this.release = true;
        }
        this.$store.commit("updateWorklist", workArray); //分析返回数据传给store
      })
      .catch(res => {
        alert('网络错误');
      });
  }

}
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
/* .fileSubmit {
  color: aliceblue;
  margin-top: 5px;
  display: inline-block;
  background-color: #409eff;
  border-radius: 4px;
  width: 70px;
  height: 35px;
} */
</style>
