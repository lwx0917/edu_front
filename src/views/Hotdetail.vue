<template>
  <div class="hotdetail">
    <Searchhead></Searchhead>
    <div class="content">
      <h1>{{ datas.topic }}</h1>
      <div class="time">
        <span>{{ datas.createTime }}</span>
        <span>·</span>
        <span>{{ datas.name }}</span>
      </div>
      <h2>{{ datas.topic }}</h2>
      <p v-html="datas.content"></p>
      <!-- <el-image :src="datas.cover" :fit="fit"></el-image> -->
    </div>
    <Footer></Footer>
    <el-backtop
      target=".hotdetail"
      :visibility-height="260"
      :right="70"
      :bottom="60"
    >
      <div class="btn">
        <i class="el-icon-caret-top"></i>
      </div>
    </el-backtop>
  </div>
</template>

<script>
import Searchhead from "@/components/search/Searchhead.vue";
import Footer from "@/components/index/Footer.vue";

export default {
  name: "Hotdetail",
  components: {
    Searchhead,
    Footer,
  },
  data() {
    return {
      datas: {},
      fit: "fill",
      url: require("@/assets/img/index/courese.png"),
    };
  },
  beforeCreate() {
    this.$fetch(`/edu/newsInfo/getNewsInfo/${this.$route.params.id}`).then(
      (response) => {
        if (response.success) {
          //成功返回数据
          this.datas = response.data.news;
        } else {
          //返回数据失败
        }
      }
    );
  },
};
</script>

<style lang="less" scoped>
.hotdetail {
  height: 100vh; // 不必是100vh，只需要是该容器显示的最大高度即可
  overflow-x: hidden;
}
.btn {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  box-shadow: 0 0 6px rgb(0 0 0 / 12%);
  text-align: center;
  line-height: 40px;
  color: #434343;
}
.content {
  width: 1000px;
  margin: 30px auto;
}
.content > h1 {
  font-size: 37px;
  text-align: center;
}
.time {
  text-align: right;
  margin-top: 16px;
  margin-bottom: 30px;
  margin-right: 30px;
}
.time > span {
  color: #707070;
}
.time > span:nth-child(2) {
  font-size: 20px;
  margin: 0 10px;
}
.content > p {
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 40px;
  color: #222;
  text-indent: 2em;
}
/deep/ p img {
  max-width: 900px;
}
// /deep/ .content>.el-image {
//   text-align: center;
//   width: 100%;
// }
// /deep/ .content .el-image img {
//   width: 50%;
//   height: 350px;
// }
</style>
