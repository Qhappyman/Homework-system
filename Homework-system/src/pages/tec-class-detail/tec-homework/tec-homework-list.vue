<template>
  <div>
    <el-collapse-item :title="title">
      <slot name="title"></slot>
      <slot name="content"></slot>
      <el-link type="primary" @click="workDetail" class="icon" :underline="false">
        查看学生作业
        <i class="el-icon-view el-icon--right"></i>
      </el-link>
      <el-button type="danger" size="mini" class="delete" @click="deleteWork">删除任务</el-button>
       <el-button type="danger" size="mini" class="delete" @click="updateWork">修改任务</el-button>
    </el-collapse-item>
  </div>
</template>
import axios from "axios";
import Vuex from "vuex";
<script>
export default {
 props:['clas','workname'],
  name: "Worklist",
  data() {
    return {
    deletename:this.workname
    };
  },
  computed: {
    worklist() {
      return this.$store.state.workList;
    },
    title() {
      //this.$slots.title[0].text;
      return this.worklist
        .filter((item, index) => {
          return item.context
            .split("and")
            .includes(this.$slots.content[0].text);
        })[0]
        .context.split("and")[0];
    }
  },
  methods: {
    workDetail() {
      this.$router.push({
        path: `/stu-homework/${this.worklist.filter((item, index) => {
          return item.context
            .split("and")
            .includes(this.$slots.content[0].text);
        })[0].id}`
      });
    },
    updateWork(){
      this.$emit('updateWork',this.worklist.filter((item, index) => {
          return item.context
            .split("and")
            .includes(this.$slots.content[0].text);
        })[0].id)
    },
    deleteWork() {
      this.$confirm("确认删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        let deleteId = this.worklist.filter((item, index) => {
          return item.context
            .split("and")
            .includes(this.$slots.content[0].text);
        })[0].id;
        axios
          .delete(
            `http://2z431s2133.wicp.vip:20570/work/Mission/deleteMission?missionId=${deleteId}`
          )
          .then(res => {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
            this.$store.commit(
              "deleteWorklist",
              this.worklist.filter((item, index) => {
                return item.context
                  .split("and")
                  .includes(this.$slots.content[0].text);
              })[0].id
            );
          })
          .catch(err => {
            this.$message({
              type: "info",
              message: "网络错误"
            });
          });
      });
    }
  },
  mounted() {
    // worklist();
  }
}
  </script>



<style scoped>
.icon {
  display: block;
  margin-top: 15px;
}
.delete {
  margin-top: 10px;
}
.delete{
    margin-top: 10px
}
</style>
