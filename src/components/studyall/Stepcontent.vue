<template>
  <div class="stepcontent">
    <h2>阶段{{ stage }}：{{ title }}</h2>
    <div class="detail">
      <span>{{ lessonNum }}门课</span>
      <!-- <span>/</span>
      <span>课程总时长：53小时</span> -->
    </div>
    <div class="course">
      <p>
        {{ description }}
      </p>
      <h3>课程安排：</h3>
      <Courseinfo
        v-for="list in lists"
        :key="list.id"
        :cover="list.cover"
        :courseId="list.courseId"
        :title="list.title"
        @click.native="detailTiao(list.courseId)"
      ></Courseinfo>
    </div>
  </div>
</template>

<script>
import Courseinfo from "@/components/studyall/Courseinfo.vue";

export default {
  name: "Stepcontent",
  components: {
    Courseinfo,
  },
  props: ["id", "title", "stage", "description", "lists", "lessonNum"],
  methods: {
    detailTiao(id) {
      this.$router.push(`/coursedetail/${id}`);
    },
  },
};
</script>

<style lang="less" scoped>
.stepcontent {
  float: right;
  width: 835px;
  margin-bottom: 60px;
}
.stepcontent > h2,
.detail {
  margin-left: 62px;
  margin-bottom: 22px;
}
.stepcontent > h2 {
  font-size: 18px;
  color: #1c1f21;
  line-height: 50px;
  margin-bottom: 8px;
}
.detail > span {
  font-size: 12px;
  color: #717a84;
}
.detail > span:nth-child(2) {
  margin-left: 20px;
  margin-right: 20px;
}
.course {
  margin-left: 40px;
  padding-left: 20px;
  border-left: 2px solid #dedfe0;
}
.course > p {
  line-height: 24px;
  margin-bottom: 20px;
  overflow: hidden;
  display: -webkit-box !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #1c1f21;
}
.course > h3 {
  font-size: 16px;
  line-height: 24px;
  color: #1c1f21;
  margin-bottom: 10px;
}
</style>
