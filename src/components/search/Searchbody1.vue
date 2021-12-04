<template>
  <div class="Searchbody1father">
    <div>
      <h3>全站课程</h3>
      <span>({{ total }})</span>
    </div>
    <div class="content">
      <Searchbody1model
        v-for="data in datas"
        :key="data.id"
        :id="data.id"
        :cover="data.cover"
        :title="data.title"
        :description="data.description"
        :teacherName="data.teacherName"
        :viewCount="data.viewCount"
      ></Searchbody1model>
    </div>
  </div>
</template>

<script>
import sea from "./search.js";
import Searchbody1model from "@/components/search/Searchbody1model.vue";

export default {
  name: "Searchbody1",
  components: {
    Searchbody1model,
  },
  data() {
    return {
      datas: [],
      total: 0,
      pageQuery: {
        current: 1,
        size: 10,
      },
    };
  },
  created() {
    this.$post(
      `/server/course/searchCourse/${this.$route.params.key}`,
      this.pageQuery
    ).then((response) => {
      if (response.success) {
        // console.log(response)
        this.datas = response.data.courses;
        this.total = response.data.total;
      } else {
      }
    });
    sea.$on("search", (val) => {
      if (val != this.$route.params.key) {
        this.$post(`/server/course/searchCourse/${val}`, this.pageQuery).then(
          (response) => {
            if (response.success) {
              this.datas = response.data.courses;
              this.total = response.data.total;
            } else {
            }
          }
        );
      }
    });
  },
};
</script>

<style lang="less" scoped>
.Searchbody1father {
  float: left;
  width: 800px;
  margin-left: 183.6px;
  padding-bottom: 30px;
  background-color: white;
}
.Searchbody1father > div:nth-child(1) {
  padding: 20px 32px;
  font-size: 15px;
  height: 42px;
  line-height: 42px;
  border-bottom: 1px solid #f3f5f6;
}
.Searchbody1father > div:nth-child(1) h3 {
  float: left;
}
.Searchbody1father > div:nth-child(1) span {
  float: left;
  font-weight: 700;
  margin-left: 15px;
  font-size: 13px;
  color: #9199a1;
}
</style>
