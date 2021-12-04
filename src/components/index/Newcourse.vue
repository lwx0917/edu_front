<template>
  <div class="newcourse">
    <div class="title">
      <div>
        <img src="@/assets/img/index/newlogo.png" />
        <h2>新上好课</h2>
      </div>
      <div>
        <a
          href="javascript:;"
          @click="tuijian"
          :class="{ under: isUnder === 0 }"
          >推荐</a
        >
        <a
          href="javascript:;"
          v-for="subject in subjects"
          :key="subject.id"
          @click="subClick(subject.id)"
          :class="{ under: isUnder === subject.id }"
          >{{ subject.title }}</a
        >
        <a href="javascript:;"></a>
      </div>
    </div>
    <div class="content">
      <Newmodel
        v-for="data in datas"
        :key="data.id"
        :cover="data.cover"
        :title="data.title"
        :teacherName="data.teacherName"
        :lessonNum="data.lessonNum"
        :viewCount="data.viewCount"
        @click.native="studyTiao(data.id)"
      ></Newmodel>
    </div>
  </div>
</template>

<script>
import Newmodel from "@/components/index/Newmodel.vue";

export default {
  name: "Newcourse",
  components: {
    Newmodel,
  },
  data() {
    return {
      isUnder: 0,
      datas: {},
      subjects: {},
    };
  },
  methods: {
    subClick(id) {
      this.isUnder = id;
      this.$fetch(`/server/course/getCourseBySubject/${id}`).then(
        (response) => {
          this.datas = response.data.courses;
        }
      );
    },
    tuijian() {
      this.isUnder = 0;
      this.$fetch("/server/course/getHotCourse").then((response) => {
        // console.log(response);
        this.datas = response.data.course;
      });
    },
    studyTiao(id) {
      if (id == undefined) {
        return;
      }
      this.$router.push(`/coursedetail/${id}`);
    },
  },
  beforeCreate() {
    this.$fetch("/server/course/getHotCourse").then((response) => {
      this.datas = response.data.course;
      // console.log(response)
    });
    this.$fetch("/server/course/getSubject").then((response) => {
      this.subjects = response.data.subject;
    });
  },
  created() {
    if (this.datas) {
      this.datas = [{}, {}, {}, {}, {}, {}, {}, {}];
    }
  },
};
</script>

<style lang="less" scoped>
.under {
  padding-bottom: 3px;
  font-weight: 700;
  border-bottom: 3px solid red;
}
.newcourse {
  margin-top: 50px;
  margin-left: 180px;
  width: 1152px;
}

.title {
  height: 40px;
}
.title > div:nth-child(1) {
  cursor: default;
}
.title > div:nth-child(1) img,
.title > div:nth-child(1) h2 {
  float: left;
  line-height: 40px;
}
.title > div:nth-child(1) img {
  margin-top: 1.5px;
  margin-right: 8px;
}
.title > div:nth-child(2) {
  margin-left: 190px;
}
.title > div:nth-child(2) a {
  line-height: 40px;
  margin-left: 30px;
}
.title > div:nth-child(2) a:last-child {
  float: right;
  margin-right: 20px;
}
.title > div:nth-child(2) a:last-child:hover {
  color: black;
}
.title > div:nth-child(2) a:hover {
  color: red;
}
.content {
  margin-top: 30px;
  *zoom: 1;
  display: flex;
  justify-content: flex-start;
  flex-shrink: 1;
  flex-wrap: wrap;
}
.content:before,
.content:after {
  content: "";
  display: table;
}
.content:after {
  clear: both;
}
.content > .studymodel {
  margin-right: 23px;
}
.content > .studymodel:nth-child(4n) {
  margin-right: 0;
}
</style>