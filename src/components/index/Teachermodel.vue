<template>
  <div class="teachermodel">
    <el-skeleton :loading="loading" animated>
      <template slot="template">
        <el-skeleton-item variant="img" style="width: 272px; height: 222px" />
        <div style="height: 50px">
          <el-skeleton-item
            variant="h2"
            style="width: 50px; margin-right: 30px; margin: 13px 15px"
          />
          <el-skeleton-item
            variant="span"
            style="width: 85px; margin: 13px 15px"
          />
        </div>
      </template>

      <template slot="default">
        <el-image :src="avatar" :fit="fit" lazy></el-image>
        <div class="info">
          <h2>{{ name }}</h2>
          <span>{{ career }}</span>
        </div>
      </template>
    </el-skeleton>

    <!-- <img :src="avatar" />
    <div class="info">
      <h2>{{ name }}</h2>
      <span>{{ career }}</span>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Teachermodel",
  props: {
    avatar: {
      default: "",
      type: String,
    },
    career: {
      default: "",
      type: String,
    },
    name: {
      default: "",
      type: String,
    },
  },
  data() {
    return {
      loading: true,
      fit: "fill",
    };
  },
  created() {
    if (this.avatar == "") {
      this.loading = true;
    } else {
      this.loading = false;
    }
  },
};
</script>

<style lang="less" scoped>
.teachermodel {
  position: relative;
  float: left;
  width: 270px;
  margin-bottom: 35px;
  cursor: pointer;
  border-radius: 9px;
  box-shadow: 0px 6px 10px #dedee7;
}
.teachermodel:hover {
  transition-property: all;
  transform: translate(0px, -2px);
  transition-timing-function: ease;
  box-shadow: 5px 9px 10px #dedee7;
}
/deep/ img {
  // width: 100%;
  width: 272px;
  height: 300px;
  border-radius: 9px;
}
/deep/ .info {
  position: absolute;
  width: 252px;
  left: 0px;
  bottom: 0px;
  padding-left: 20px;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  background-color: white;
}
.info > h2 {
  float: left;
  font-size: 22px;
  color: #272848;
  margin-top: 10px;
  padding-right: 15px;
  margin-bottom: 15px;
  border-right: 1px solid gray;
}
.info > span {
  float: left;
  margin-top: 20px;
  margin-left: 13px;
  color: rgba(39, 40, 72, 0.6);
}
</style>
