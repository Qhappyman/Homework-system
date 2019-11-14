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
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false"
        >
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button
            style="margin-left: 10px;"
            size="small"
            type="success"
            @click="submitUpload"
          >上传文件</el-button>
          <div slot="tip" class="el-upload__tip">文件大小不超过5M</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="releaseWork">立即发布</el-button>
        <el-button @click="handelRelease">取消</el-button>
      </el-form-item>
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
import Worklist from "./tec-homework-list";
export default {
  name: "ReleaseWork",
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
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ],
      workName: ""
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
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleChange(val) {
      console.log(val);
    },
    releaseWork() {
      if (!(this.homework.name == "" || this.homework.content == "")) {

        this.$notify({
          title: "成功",
          message: "发布成功",
          type: "success"
        }),
        this.$store.commit('updateWorklist',{name:{title:this.homework.name,content:this.homework.content}});
          this.handelRelease();
      } else {
        this.$notify.error({
          title: "失败",
          message: "作业名称或内容不可为空"
        });
      }
    }
  },
  computed: {
    worklist() {
      return this.$store.state.workList;
    }
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
</style>
