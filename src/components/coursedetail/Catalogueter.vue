<template>
  <div class="catalogueter">
    <h3>讲师</h3>
    <div class="info">
      <el-image :src="teacherInfo.avatar" :fit="fit" lazy></el-image>
      <div>
        <h2>{{ teacherInfo.name }}</h2>
        <span>{{ teacherInfo.career }}</span>
      </div>
    </div>
    <p>
      {{ teacherInfo.intro }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Catalogueter",
  data() {
    return {
      fit: "fill",
      info: {},
    };
  },
  props: ["teacherInfo"],
};
</script>

<style lang="less" scoped>
.catalogueter {
  float: right;
  width: 288px;
  margin-top: 20px;
  padding: 35px 20px;
  border-bottom: 1px solid rgba(28, 31, 33, 0.1);
  background: url("../../assets/img/coursedetail/titleback.png") no-repeat;
  background-position: center;
  background-size: cover;
  cursor: default;
}
.catalogueter > h3 {
  color: #07111b;
  margin-bottom: 20px;
}
.info {
  overflow: hidden;
  margin-bottom: 10px;
}
.info > div {
  float: left;
}
.info > div:nth-child(1) {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
  border: 2px solid transparent;
}
.info > div:nth-child(1):hover {
  border: 2px solid red;
}
.info > div:nth-child(2) > h2 {
  color: #ffed00;
  font-size: 18px;
  line-height: 20px;
}
.info > div:nth-child(2) > span {
  font-size: 12px;
  color: white;
}
.catalogueter > p {
  font-size: 12px;
  line-height: 24px;
  word-break: break-all;
  word-wrap: break-word;
  color: white;
}
</style>