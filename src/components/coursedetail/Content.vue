<template>
  <div class="content">
    <div>
      <a
        href="javascript:;"
        @click="kcclick"
        :class="{ under: isUnder === 'kc' }"
        >课程介绍</a
      >
      <a
        href="javascript:;"
        @click="zjclick"
        :class="{ under: isUnder === 'zj' }"
        >章节目录</a
      >
      <a
        href="javascript:;"
        @click="pjclick"
        :class="{ under: isUnder === 'pj' }"
        >用户评价</a
      >
      <span>{{ total }}</span>
    </div>
    <Introduce
      v-if="isUnder === 'kc'"
      :teacherInfo="teacherInfo"
      :description="description"
    ></Introduce>
    <Catalogue
      v-if="isUnder === 'zj'"
      :list="list"
      :teacherInfo="teacherInfo"
    ></Catalogue>
    <Evaluate v-if="isUnder === 'pj'"></Evaluate>
  </div>
</template>

<script>
import bus from "./eventBus.js";
import Introduce from "@/components/coursedetail/Introduce.vue";
import Catalogue from "@/components/coursedetail/Catalogue.vue";
import Evaluate from "@/components/coursedetail/Evaluate.vue";

export default {
  name: "Content",
  components: {
    Introduce,
    Catalogue,
    Evaluate,
  },
  data() {
    return {
      isUnder: "kc",
      map: {
        current: 1,
        size: 5,
      },
      total: 0,
    };
  },
  props: ["teacherInfo", "description", "list"],
  methods: {
    kcclick() {
      this.isUnder = "kc";
    },
    zjclick() {
      this.isUnder = "zj";
    },
    pjclick() {
      this.isUnder = "pj";
    },
  },
  created() {
    bus.$on("rolls", (val) => {
      this.isUnder = "zj";
      window.scrollTo({
        top: 450,
        behavior: "smooth",
      });
    });
    this.$fetch(`/server/comment/getComments/${this.$route.params.id}`, {
      map: JSON.stringify(this.map),
    }).then((response) => {
      if (response.success) {
        //成功返回数据
        this.total = response.data.total;
      } else {
        //返回数据失败
      }
    });
  },
};
</script>

<style lang="less" scoped>
.under {
  border-bottom: 3px solid red;
}
.content {
  cursor: default;
}
.content > div:nth-child(1) {
  position: relative;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 60px;
}
.content > div:nth-child(1) > span {
  position: absolute;
  top: -5px;
  right: 603px;
  font-size: 12px;
  color: #93999f;
}
.content > div:nth-child(1) > a {
  margin-right: 50px;
  font-size: 17px;
  font-weight: 700;
  padding-bottom: 7px;
}
.content > div:nth-child(1) > a:hover {
  color: red;
  border-bottom: 3px solid red;
}
</style>
