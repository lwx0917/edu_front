<template>
  <div class="catalogue">
    <Catalogueter :teacherInfo="teacherInfo"></Catalogueter>
    <Cataloguedetail
      v-for="data in datas"
      :key="data.id"
      :bigTitle="data.title"
      :videos="data.videos"
    ></Cataloguedetail>
  </div>
</template>

<script>
import Cataloguedetail from "@/components/coursedetail/Cataloguedetail.vue";
import Catalogueter from "@/components/coursedetail/Catalogueter.vue";

export default {
  name: "Catalogue",
  userId: localStorage.getItem("id"),
  components: {
    Cataloguedetail,
    Catalogueter,
  },
  data() {
    return {
      datas: [],
    };
  },
  props: ["list", "teacherInfo"],
  created() {
    this.$fetch(`/server/course/getCourseById/${this.$route.params.id}`).then(
      (response) => {
        if (response.success) {
          //成功返回数据
          this.datas = response.data.list.chapters;
        } else {
          //返回数据失败
        }
      }
    );
  },
};
</script>

<style lang="less" scoped>
.catalogue {
  overflow: hidden;
  margin: 0 auto;
  width: 1200px;
  border-top: 1px solid rgba(28, 31, 33, 0.1);
}
</style>
