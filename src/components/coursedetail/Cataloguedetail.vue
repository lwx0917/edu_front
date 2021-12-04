<template>
  <div class="cataloguedetail">
    <div class="title">
      <h5>{{ bigTitle }}</h5>
      <span>{{ videos.length }}节</span>
    </div>
    <!-- <p>
        本章将向大家介绍，一个常规项目在团队内的开发流程、成员分工以及如何理解通用后台，最后会给大家讲解Vue3核心知识点，带你做好储备。
    </p>-->
    <div v-for="data in videos" :key="data.id" :title="data.title">
      <!-- 视频框 -->
      <el-dialog
        title="课程预览"
        :visible.sync="dialogVisible"
        :close-on-click-modal="false"
        :destroy-on-close="true"
        width="52%"
      >
        <video controls :src="videoSrc"></video>
      </el-dialog>
      <div class="list">
        <i class="el-icon-video-camera-solid"></i>
        <span>视频 :</span>
        <p>
          <el-button type="text" @click="look(data)">
            {{
            data.title
            }}
          </el-button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cataloguedetail",
  data() {
    return {
      dialogVisible: false,
      videoSrc: "",
      history: {
        videoId: "",
        chapterId: "",
        courseId: "",
        userId: 0
      }
    };
  },
  props: ["videos", "bigTitle"],
  methods: {
    look(data) {
      this.history.videoId = data.id;
      this.history.chapterId = data.chapterId;
      this.history.courseId = data.courseId;
      this.history.userId = localStorage.getItem("id");
      this.dialogVisible = true;
      this.$post(
        `/oss/file/getVideoById/${data.videoSourceId}`,
        this.history
      ).then(response => {
        if (response.success) {
          //成功返回数据
          this.videoSrc = response.data.video;
          // console.log(this.videoSrc);
        } else {
          //返回数据失败
        }
      });
    }
  },
  created() {
    alert(1);
  }
};
</script>

<style lang="less" scoped>
/deep/ .el-dialog {
  margin-top: 11vh !important;
}
video {
  width: 100%;
  height: 100%;
}
/deep/ .el-dialog__wrapper {
  background-color: rgba(0, 0, 0, 0.5);
}
/deep/ .el-dialog__headerbtn .el-dialog__close {
  margin-top: 3px;
  font-size: 25px;
  color: white;
}
/deep/ .el-dialog__title {
  color: white;
  font-weight: 700;
}
/deep/ .el-dialog {
  border-radius: 12px;
}
/deep/ .el-dialog__header {
  padding-top: 24px;
  padding-left: 32px;
}
/deep/ .el-dialog,
.el-pager li {
  background-color: #545c63;
}
/deep/ .el-dialog__body {
  padding: 0 0;
  margin-top: 20px;
  padding-bottom: 25px;
}

.cataloguedetail {
  float: left;
  width: 824px;
  padding: 24px 0px;
  border-bottom: 1px solid rgba(28, 31, 33, 0.1);
  cursor: default;
}
.title {
  overflow: hidden;
  margin-bottom: 30px;
}
.title h5 {
  float: left;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #1c1f21;
}
.title span {
  float: right;
  font-size: 13px;
  color: #93999f;
  line-height: 24px;
  font-weight: 400;
  margin-right: 10px;
}
.cataloguedetail > div > p {
  margin: 8px 0px;
  line-height: 24px;
}
/deep/ .el-button {
  padding: 0 0;
}
/deep/ .el-button--text {
  font-size: 14px;
  color: #1c1f21;
}
/deep/ .el-button--text:hover {
  text-decoration: underline;
  color: #1c1f21;
}

.list {
  overflow: hidden;
  // margin-bottom: 10px;
  margin-top: 13px;
}
.list > i,
.list > span,
.list > p {
  float: left;
}
.list > i:nth-child(1) {
  font-size: 16px;
  color: #1c1f21;
  line-height: 24px;
  font-weight: 400;
}
.list > span:nth-child(2) {
  margin-left: 8px;
  margin-right: 10px;
  line-height: 24px;
  font-weight: 700;
}
.list > p:last-child {
  overflow: hidden;
  display: -webkit-box !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-height: 24px;
  color: #1c1f21;
  width: 753px;
}
</style>