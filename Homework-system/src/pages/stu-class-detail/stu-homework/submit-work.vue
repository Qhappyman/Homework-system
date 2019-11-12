<template>
  <div class="container">
    <div class="title">作业题目</div>
    <div class="deadline">截止日期</div>
    <div class="content">作业内容</div>
    <div class="upload">
      <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubmitWork',
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    }
  },
  props:['appear1']
}

</script>

<style scoped>
  .container {
    position: relative;
    left: 25%;
    margin-top: 2%;
    width: 50%;
    height: 380px;
    border-radius: 8px;
    border: 1px solid #E2E6ED;
  }

  .title {
    position: relative;
    left: 8%;
    top: 5%;
    width: 84%;
    height: 10%;
    font-size: 20px;
    font-weight: 400;
    line-height: 35px;
  }

  .deadline {
    position: relative;
    left: 8%;
    top: 10%;
    width: 84%;
    height: 5%;
    font-size: 12px;
    color: grey;
  }

  .content {
    position: relative;
    left: 8%;
    top: 15%;
    width: 84%;
    height: 48%;
    color: #5F6368;
    border-bottom: 1px solid #E2E6ED;
  }

  .upload {
    position: relative;
    left: 81.5%;
    top: 20%;
    width: 50px;
  }
</style>
