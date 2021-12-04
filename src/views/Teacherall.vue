<template>
  <div class="teacherall">
    <Searchhead></Searchhead>
    <Content></Content>
    <Footer></Footer>
    <el-backtop
      target=".teacherall"
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
import Content from "@/components/teacherall/Content.vue";
import Footer from "@/components/index/Footer.vue";

export default {
  name: "Teacherall",
  components: {
    Searchhead,
    Content,
    Footer,
  },
};
</script>

<style lang="less" scoped>
.teacherall {
  height: 100vh; // 不必是100vh，只需要是该容器显示的最大高度即可
  overflow-x: hidden;
  cursor: default;
}
.footer {
  margin-top: 0px;
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
