<template>
  <div class="Searchbody1model">
    <div @click="studyTiao(id)">
      <el-image :src="cover" :fit="fit" lazy></el-image>
    </div>
    <div>
      <h3 @click="studyTiao(id)">{{ title }}</h3>
      <p>{{ description }}</p>
      <span>讲师 :</span>
      <span>{{ teacherName }}</span>
      <i class="el-icon-user"></i>
      <span>{{ viewCount }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Searchbody1model",
  data() {
    return {
      fit: "fill",
    };
  },
  props: ["id", "cover", "title", "description", "teacherName", "viewCount"],
  methods: {
    studyTiao(id) {
      this.$router.push(`/coursedetail/${id}`);
    },
  },
};
</script>

<style lang="less" scoped>
.Searchbody1model {
  margin-left: 32px;
  padding: 20px 0px;
  width: 736px;
  height: 110px;
  border-bottom: 1px solid rgba(43, 51, 59, 0.1);
  cursor: default;
}
/deep/ .el-image__inner {
  width: 135px;
  height: 100px;
  cursor: pointer;
}
.Searchbody1model > div:nth-child(1),
.Searchbody1model > div:nth-child(2) {
  float: left;
}
.Searchbody1model > div:nth-child(2) {
  margin-left: 40px;
  width: 560px;
}
.Searchbody1model > div:nth-child(2) h3 {
  cursor: pointer;
}
.Searchbody1model > div:nth-child(2) h3:hover {
  color: red;
}
.Searchbody1model > div:nth-child(2) p {
  overflow: hidden;
  height: 50px;
  display: -webkit-box !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 7px;
  margin-bottom: 5px;
  line-height: 25px;
  text-indent: 1em;
}
.Searchbody1model > div:nth-child(2) > span {
  font-size: 13px;
  color: #999;
}
.Searchbody1model > div:nth-child(2) > span:nth-child(4) {
  margin-left: 7px;
  margin-right: 80px;
}
.Searchbody1model > div:nth-child(2) > span:nth-child(6) {
  margin-left: 7px;
}
</style>
