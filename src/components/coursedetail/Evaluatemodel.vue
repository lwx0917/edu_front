<template>
  <div class="evaluatemodel">
    <el-image :src="avatar" :fit="fit" lazy></el-image>
    <div>
      <h3>{{ nickname }}</h3>
      <p v-html="content"></p>
      <span>{{ gmtCreate }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Evaluatemodel",
  data() {
    return {
      fit: "fill",
      url: require("@/assets/img/coursedetail/tx.png"),
    };
  },
  props: ["avatar", "content", "nickname", "gmtCreate"],
};
</script>

<style lang="less" scoped>
.evaluatemodel {
  width: 710px;
  padding: 19px 25px;
  border-bottom: 1px solid #d9dde1;
  overflow: hidden;
  cursor: default;
}
.evaluatemodel > div {
  float: left;
}
.evaluatemodel > div:nth-child(1) {
  cursor: pointer;
}
.evaluatemodel > div:nth-child(1) {
  width: 40px;
  height: 40px;
  margin-right: 20px;
  border-radius: 50%;
}
.evaluatemodel > div:nth-child(2) {
  width: 642px;
}
.evaluatemodel > div:nth-child(2) > h3 {
  font-size: 14px;
  line-height: 40px;
  color: #1c1f21;
}
.evaluatemodel > div:nth-child(2) > p {
  font-size: 16px;
  text-indent: 2em;
  margin-bottom: 8px;
  color: #1c1f21;
  line-height: 28px;
}
.evaluatemodel > div:nth-child(2) > span {
  font-size: 13px;
  color: #999;
}
</style>
