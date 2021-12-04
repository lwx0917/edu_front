<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Index from "@/views/Index.vue";

export default {
  name: "App",
  components: {
    Index,
  },
  // created() {
  //   if (localStorage.getItem("userToken")) {
  //     localStorage.removeItem("userToken");
  //   }
  //   if (localStorage.getItem("id")) {
  //     localStorage.removeItem("userToken");
  //   }
  // },
};
</script>

<style lang="less" scoped>
</style>
