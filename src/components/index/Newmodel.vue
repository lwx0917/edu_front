<template>
  <div class="studymodel">
    <el-skeleton :loading="loading" animated>
      <template slot="template">
        <el-skeleton-item variant="img" style="width: 270px; height: 152px" />
        <el-skeleton-item variant="p" style="width: 100%" />
        <el-skeleton-item variant="p" style="width: 80%" />
        <div>
          <el-skeleton-item
            variant="span"
            style="width: 30%; margin-right: 20px"
          />
          <el-skeleton-item variant="span" style="width: 30%" />
        </div>
        <div>
          <el-skeleton-item
            variant="span"
            style="width: 20%; margin-right: 20px"
          />
          <el-skeleton-item variant="span" style="width: 30%" />
        </div>
      </template>

      <template slot="default">
        <el-image :src="cover" :fit="fit"></el-image>
        <p>{{ title }}</p>
        <div class="num">
          <span>共{{ lessonNum }}节</span>
          <span>|</span>
          <span>{{ teacherName }}</span>
        </div>
        <div class="priceAndNum">
          <span>免费</span>
          <span>{{ viewCount }}人报名</span>
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<script>
export default {
  name: "Newmodel",
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
  width: 23.5%;
  margin-bottom: 35px;
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
  width: 270px;
  height: 165px;
  object-fit: contain;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  margin-bottom: 8px;
}
.studymodel p {
  overflow: hidden;
  display: -webkit-box !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin-top: 2px;
  padding: 0px 13px;
}
.num {
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 13px;
}
.num span {
  font-size: 13px;
  color: #999;
}
.num span:nth-child(2) {
  margin: 0px 12px;
}
/deep/ .priceAndNum {
  margin-bottom: 10px;
  padding-left: 13px;
}
.priceAndNum span:nth-child(1) {
  color: red;
  font-size: 16px;
  margin-right: 15px;
}
.priceAndNum span:nth-child(2) {
  color: #999;
  font-size: 13px;
}
</style>
