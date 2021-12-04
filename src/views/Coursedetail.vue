<template>
  <div class="coursedetail">
    <Searchhead></Searchhead>
    <Coursetitle :title="title" :description="description"></Coursetitle>
    <Floatfix :viewCount="viewCount" :lessonNum="lessonNum"></Floatfix>
    <Content
      :teacherInfo="teacherInfo"
      :description="description"
      :list="list"
    ></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Searchhead from "@/components/search/Searchhead.vue";
import Coursetitle from "@/components/coursedetail/Coursetitle.vue";
import Floatfix from "@/components/coursedetail/Floatfix.vue";
import Content from "@/components/coursedetail/Content.vue";
import Footer from "@/components/index/Footer.vue";

export default {
  name: "Coursedetail",
  components: {
    Searchhead,
    Coursetitle,
    Floatfix,
    Content,
    Footer,
  },
  data() {
    return {
      title: "",
      description: "",
      viewCount: "",
      lessonNum: "",
      teacherInfo: {},
      list: [],
    };
  },
  beforeCreate() {
    this.$fetch(`/server/course/getCourseById/${this.$route.params.id}`).then(
      (response) => {
        if (response.success) {
          //成功返回数据
          // console.log(response);
          this.title = response.data.course.title;
          this.description = response.data.course.description;
          this.viewCount = response.data.course.viewCount;
          this.lessonNum = response.data.course.lessonNum;
          this.list = response.data.list.chapters;
          this.$fetch(
            `/server/teacher/getTeacherInfoByName/${response.data.course.teacherName}`
          ).then((response) => {
            this.teacherInfo = response.data.teacher;
          });
        } else {
          //返回数据失败
        }
      }
    );
  },
};
</script>

<style lang="less" scoped>
</style>
