<template>
  <div class="content">
    <Left></Left>
    <router-view></router-view>
  </div>
</template>

<script>
import Left from '@/components/person/Left.vue'

export default {
  name: "Content",
  components: {
    Left
  },
};
</script>

<style lang="less" scoped>
.content{
    // width: 100%;
    height: 500px;
    padding: 35px 175px;
    // background-color: pink;
}
</style>
