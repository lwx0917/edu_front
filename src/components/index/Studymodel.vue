<template>
  <div class="studymodel">
    <el-skeleton :loading="loading" animated>
      <template slot="template">
        <el-skeleton-item variant="img" style="width: 367px; height: 139px" />
        <!-- <div> -->
        <el-skeleton-item variant="p" style="width: 95%; margin-top: 5px" />
        <el-skeleton-item variant="p" style="width: 65%" />
        <!-- </div> -->
      </template>

      <template slot="default">
        <el-image :src="cover" :fit="fit"></el-image>
        <p>{{ title }}</p>
        <!-- <div class="num">
          <span>共{{ lessonNum }}节</span>
          <span>|</span>
          <span>{{ teacherName }}</span>
        </div>
        <div class="priceAndNum">
          <span>免费</span>
          <span>{{ viewCount }}人报名</span>
        </div> -->
      </template>
    </el-skeleton>

    <!-- <el-image :src="cover" :fit="fit" lazy></el-image>
    <div>
      <el-skeleton :loading="loading" animated>
        <template slot="template">
          <el-skeleton-item variant="p" style="width: 100%" />
          <el-skeleton-item variant="p" style="width: 35%" />
        </template>
        <template slot="default">
          <p>{{ title }}</p>
        </template>
      </el-skeleton>
    </div>

    <div>
      <el-skeleton :loading="loading" animated>
        <template slot="template">
          <el-skeleton-item variant="span" style="width: 30%" />
          <el-skeleton-item variant="span" style="width: 10%" />
          <el-skeleton-item variant="span" style="width: 30%" />
        </template>
        <template slot="default">
          <span>共{{ lessonNum }}节</span>
          <span>|</span>
          <span>{{ teacherName }}</span>
        </template>
      </el-skeleton>
    </div>

    <div>
      <el-skeleton :loading="loading" animated>
        <template slot="template">
          <el-skeleton-item variant="span" style="width: 20%" />
          <el-skeleton-item variant="span" style="width: 30%" />
        </template>
        <template slot="default">
          <span>免费</span>
          <span>{{ viewCount }}人报名</span>
        </template>
      </el-skeleton>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Studymodel",
  props: {
    cover: {
      default: "",
      type: String,
    },
    title: {
      default: "",
      type: String,
    },
    teacherName: {
      default: "",
      type: String,
    },
    lessonNum: {
      default: 0,
    },
    viewCount: {
      default: 0,
    },
  },
  data() {
    return {
      loading: true,
      fit: "fill",
      url: require("@/assets/img/index/courese.png"),
    };
  },
  created() {
    if (this.cover == "") {
      this.loading = true;
    } else {
      this.loading = false;
    }
  },
};
</script>

<style lang="less" scoped>
.studymodel {
  float: left;
  width: 31.9%;
  height: 196px;
  margin-bottom: 35px;
  padding-bottom: 20px;
  cursor: pointer;
  border-radius: 9px;
  box-shadow: 0px 6px 10px #dedee7;
}
.studymodel:hover {
  transition-property: all;
  transform: translate(0px, -2px);
  // transition-duration: 0.2s;
  transition-timing-function: ease;
  box-shadow: 5px 9px 10px #dedee7;
}
/deep/ .el-image img {
  width: 100%;
  height: 139px;
  object-fit: contain;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  margin-bottom: 8px;
}
// .studymodel > div:nth-child(2) {
.studymodel p {
  overflow: hidden;
  display: -webkit-box !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 2px;
  padding: 0px 13px;
}
// .studymodel > div:nth-child(3) {
.num {
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 13px;
}
// .studymodel > div:nth-child(3) span {
.num span {
  font-size: 13px;
  color: #999;
}
// .studymodel > div:nth-child(3) span:nth-child(2) {
.num span:nth-child(2) {
  margin: 0px 12px;
}
// .studymodel > div:nth-child(4) {
/deep/ .priceAndNum {
  margin-bottom: 10px;
  padding-left: 13px;
}
// .studymodel > div:nth-child(4) span:nth-child(1) {
.priceAndNum span:nth-child(1) {
  color: red;
  font-size: 16px;
  // padding-left: 13px;
  margin-right: 15px;
}
// .studymodel > div:nth-child(4) span:nth-child(2) {
.priceAndNum span:nth-child(2) {
  color: #999;
  font-size: 13px;
}
</style>
