<template>
  <div class="floatfix">
    <div>
      <div>
        <h1>免费</h1>
      </div>
      <div>
        <span>学习人数</span>
        <span>{{ viewCount }}</span>
        <span>·</span>
        <span>课程章节</span>
        <span>{{ lessonNum }}</span>
      </div>
    </div>
    <div>
      <div @click="roll">立即观看</div>
    </div>
  </div>
</template>

<script>
import bus from "./eventBus.js";

export default {
  name: "Floatfix",
  props: ["viewCount", "lessonNum"],
  methods: {
    roll() {
      bus.$emit("rolls");
    },
  },
};
</script>

<style lang="less" scoped>
.floatfix {
  width: 1152px;
  height: 128px;
  border-radius: 18px;
  margin: 0 auto;
  margin-top: -64px;
  box-shadow: 0px 6px 10px #dedee7;
  background: url("../../assets/img/coursedetail/fix.png") no-repeat;
  background-position: center;
  background-size: cover;
  cursor: default;
}
.floatfix > div:nth-child(1) {
  float: left;
}
.floatfix > div:nth-child(1) > div:nth-child(1) > h1 {
  font-size: 32px;
  color: #f01414;
  margin-top: 20px;
  margin-left: 70px;
}
.floatfix > div:nth-child(1) > div:nth-child(2) {
  margin-top: 10px;
}
.floatfix > div:nth-child(1) > div:nth-child(2) > span {
  font-size: 12px;
  color: #545c63;
}
.floatfix > div:nth-child(1) > div:nth-child(2) > span:nth-child(2) {
  margin-left: 10px;
  margin-right: 20px;
}
.floatfix > div:nth-child(1) > div:nth-child(2) > span:nth-child(4) {
  margin-left: 20px;
  margin-right: 10px;
}
.floatfix > div:nth-child(1) > div:nth-child(2) > span:nth-child(1),
.floatfix > div:nth-child(1) > div:nth-child(2) > span:nth-child(3),
.floatfix > div:nth-child(1) > div:nth-child(2) > span:nth-child(4) {
  font-weight: 700;
}
.floatfix > div:nth-child(1) > div:nth-child(2) > span:nth-child(1) {
  margin-left: 70px;
}
.floatfix > div:nth-child(2) {
  float: right;
}
.floatfix > div:nth-child(2) > div {
  font-size: 16px;
  color: white;
  line-height: 24px;
  font-weight: 700;
  padding: 12px 38px;
  border-radius: 24px;
  margin-top: 39px;
  margin-right: 70px;
  background-color: #f01414;
  cursor: pointer;
}
.floatfix > div:nth-child(2) > div:hover {
  background-color: #c20a0a;
}
</style>