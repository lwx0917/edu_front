<template>
  <div>
    <Searchhead></Searchhead>
    <div class="content">
      <Left></Left>
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Searchhead from "@/components/search/Searchhead.vue";
import Left from "@/components/person/Left.vue";
import Footer from "@/components/index/Footer.vue";

export default {
  name: "Personal",
  components: {
    Searchhead,
    Left,
    Footer,
  },
};
</script>

<style lang="less" scoped>
.footer{
  margin-top: 50px;
}
.content {
  display: flex;
  width: 78%;
  margin: 0 auto;
  padding: 35px 0px;
}
</style>
