<template>
  <div class="coursetitle">
    <h1>{{ title }}</h1>
    <!-- <h2>{{ description }}</h2> -->
  </div>
</template>

<script>
export default {
  name: "Coursetitle",
  data() {
    return {};
  },
  props: ["title", "description"],
};
</script>

<style lang="less" scoped>
.coursetitle {
  width: 100%;
  // width: 1519.5px;
  height: 260px;
  background: url("../../assets/img/coursedetail/titleback.png") no-repeat;
  border-top: 1px solid transparent;
  background-position: center;
  background-size: cover;
  cursor: default;
}
.coursetitle > h1 {
  color: white;
  font-size: 40px;
  text-align: center;
  margin-top: 80px;
  font-weight: 400;
  font-family: "Microsoft YaHei", PingFangSC-Regular;
  text-shadow: 0 2px 5px #666;
}
.coursetitle > h2 {
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
  font-family: "Microsoft YaHei", PingFangSC-Regular;
  color: white;
  text-shadow: 0 2px 5px #666;
}
</style>
