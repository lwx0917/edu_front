<template>
  <div class="introduce">
    <div class="pic">
      <el-image :src="teacherInfo.avatar" :fit="fit" lazy></el-image>
      <div>教授</div>
      <div>
        <p>{{ teacherInfo.name }}</p>
        <p>{{ teacherInfo.career }}</p>
      </div>
    </div>
    <div class="jiesao">
      <div>
        <el-image :src="url1" :fit="fit" lazy></el-image>
      </div>
      <div>
        <p>
          {{ description }}
        </p>
      </div>
      <div>
        <el-image :src="url2" :fit="fit" lazy></el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduce",
  data() {
    return {
      fit: "fill",
      info: {},
      url: require("@/assets/img/coursedetail/tx.png"),
      url1: require("@/assets/img/coursedetail/zuo.png"),
      url2: require("@/assets/img/coursedetail/you.png"),
    };
  },
  props: ["teacherInfo", "description"],
};
</script>

<style lang="less" scoped>
.introduce {
  width: 1152px;
  height: 240px;
  margin: 0 auto;
  border-radius: 19px;
  background: url("../../assets/img/coursedetail/infoback.png") no-repeat;
  border-top: 1px solid transparent;
  background-position: center;
  background-size: cover;
  cursor: default;
}
.pic {
  position: relative;
  float: left;
  width: 234px;
  height: 240px;
  background: url("../../assets/img/coursedetail/kuang.png") no-repeat;
  background-position-x: 45px;
  background-position-y: 45px;
}
/deep/ .pic > .el-image:nth-child(1) > img {
  margin-top: 47.1px;
  margin-left: 73.1px;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  cursor: pointer;
}
.pic > div:nth-child(2) {
  position: absolute;
  top: 126px;
  left: 95px;
  color: #ffed00;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  font-family: PingFangSC-Medium;
  box-shadow: 0 2px 4px 0 rgb(35 175 255 / 50%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: #3c54f3;
}
.pic > div:last-child > p {
  text-align: center;
  font-size: 12px;
  font-family: PingFangSC-Medium;
}
.pic > div:last-child > p:nth-child(1) {
  margin-top: 16px;
  color: #ffed00;
}
.pic > div:last-child > p:nth-child(2) {
  margin-top: 3px;
  color: white;
}

.jiesao {
  float: left;
  width: 918px;
  height: 240px;
}
.jiesao > div {
  float: left;
}
/deep/ .jiesao img {
  width: 27px;
  height: 22px;
}
.jiesao > div:nth-child(1),
.jiesao > div:nth-child(3) {
  width: 79px;
  height: 100%;
}
/deep/ .jiesao > div:nth-child(1) img {
  margin-top: 45px;
  margin-left: 20px;
}
.jiesao > div:nth-child(2) {
  display: flex;
  width: 760px;
  height: 100%;
}
.jiesao > div:nth-child(2) > p {
  align-self: center;
  line-height: 28px;
  text-indent: 2em;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: white;
}
/deep/ .jiesao > div:nth-child(3) img {
  margin-top: 170px;
  margin-left: 10px;
}
</style>
