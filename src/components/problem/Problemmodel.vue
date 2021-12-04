<template>
  <div class="problemmodel">
    <div class="info">
      <el-image :src="salt" :fit="fit" lazy></el-image>
      <h3>{{ nickName }}</h3>
    </div>
    <p @click="detailJump" v-html="content"></p>
    <div class="good">
      <span class="iconfont icon-dianzan1"> {{ good }} 赞</span>
      <span class="iconfont icon-cai1"> {{ bed }} 踩</span>
      <span class="el-icon-chat-round"> {{ num }} 评论</span>
      <span>{{ gmtCreate }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Problemmodel",
  data() {
    return {
      fit: "fill",
    };
  },
  props: [
    "id",
    "salt",
    "nickName",
    "content",
    "good",
    "bed",
    "num",
    "gmtCreate",
  ],
  methods: {
    detailJump() {
      this.$router.push(`/problemdetail/${this.id}`);
    },
  },
};
</script>

<style lang="less" scoped>
.problemmodel {
  width: 710px;
  padding: 16px 25px;
  border-bottom: 1px solid #d9dde1;
  // overflow: hidden;
  cursor: default;
}
.info {
  display: flex;
}
.info > div {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
.info > h3 {
  margin-top: 10px;
  margin-left: 20px;
}
// .problemmodel > h1 {
//   display: inline-block;
//   font-size: 20px;
//   margin-top: 15px;
//   margin-bottom: 6px;
//   cursor: pointer;
// }
.problemmodel > p {
  overflow: hidden;
  display: -webkit-box !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-indent: 2em;
  margin-top: 9px;
  margin-bottom: 9px;
  font-size: 15px;
  line-height: 25px;
  cursor: pointer;
}
p:hover {
  color: red;
}
/deep/ p img {
  display: block;
  max-width: 200px;
  max-height: 200px;
}
.good {
  margin-top: 6px;
}
.good > span {
  font-size: 14px;
  font-weight: 400;
  color: black;
}
.good > span:nth-child(2) {
  margin: 0 15px;
}
.good > span:last-child {
  font-size: 13px;
  margin-left: 380px;
}
</style>
