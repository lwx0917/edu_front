<template>
  <div class="replymodel">
    <div class="replyInfo">
      <el-image :src="salt" :fit="fit" lazy></el-image>
      <h2>{{ nickName }}</h2>
      <span>{{ gmtCreate }}</span>
    </div>
    <div class="replyContent">{{ content }}</div>
    <!-- <div class="replyGood">
      <span class="iconfont icon-dianzan1"> 1 赞</span>
      <span class="iconfont icon-cai1"> 2 踩</span>
      <span class="el-icon-chat-round"> 3 评论</span>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Replymodel",
  data() {
    return {
      fit: "fill",
    };
  },
  props: ["salt", "nickName", "content", "gmtCreate"],
};
</script>

<style lang="less" scoped>
.replymodel {
  padding: 12px 20px;

  border-bottom: 2px solid #f6f6f6;
}
.replyInfo {
  position: relative;
  display: flex;
}
.replyInfo > div:first-child {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}
.replyInfo > h2 {
  font-weight: 500;
  font-size: 15px;
  height: 25px;
  line-height: 25px;
}
.replyInfo > span {
  position: absolute;
  right: 0;
  display: block;
  height: 25px;
  line-height: 25px;
  font-size: 14px;
  color: #8590a6;
}
.replyContent {
  margin-top: 8px;
  margin-bottom: 5px;
  padding-left: 33px;
  font-size: 15px;
  color: #121212;
}
</style>
