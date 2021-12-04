<template>
  <div class="studyall">
    <Searchhead></Searchhead>
    <Twohead></Twohead>
    <Content></Content>
    <Footer></Footer>
    <el-backtop
      target=".studyall"
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
import Twohead from "@/components/studyall/Twohead.vue";
import Content from "@/components/studyall/Content.vue";
import Footer from "@/components/index/Footer.vue";

export default {
  name: "Studyall",
  components: {
    Searchhead,
    Twohead,
    Content,
    Footer,
  },
};
</script>

<style lang="less" scoped>
.studyall {
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
.footer {
  margin-top: 0px;
}
</style>
