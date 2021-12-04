<template>
  <div class="problem">
    <Searchhead></Searchhead>
    <Content></Content>
    <Footer></Footer>
    <el-backtop
      target=".problem"
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
import Content from "@/components/problem/Content.vue";
import Footer from "@/components/index/Footer.vue";

export default {
  name: "Problem",
  components: {
    Searchhead,
    Content,
    Footer,
  },
};
</script>

<style lang="less" scoped>
.problem {
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
</style>
