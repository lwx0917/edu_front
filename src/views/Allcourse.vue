<template>
  <div class="allcourse">
    <Searchhead></Searchhead>
    <div class="nav">
      <div class="imgDiv">
        <img :src="url1" />
        <img :src="url2" />
      </div>
      <div class="nav1">
        <span>方向 ：</span>
        <a
          href="javascript:;"
          @click="allClick1"
          :class="{ back: isBack1 === 0 }"
          >全部</a
        >
        <a
          href="javascript:;"
          v-for="subject in subject1"
          :key="subject.id"
          @click="subClick1(subject.id)"
          :class="{ back: isBack1 === subject.id }"
          >{{ subject.title }}</a
        >
      </div>
      <div class="nav2">
        <span>分类 ：</span>
        <a
          href="javascript:;"
          v-for="subject in subject2"
          :key="subject.id"
          @click="subClick2(subject.id)"
          :class="{ back: isBack2 === subject.id }"
          >{{ subject.title }}</a
        >
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
    <Footer></Footer>
    <el-backtop
      target=".allcourse"
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
import Newmodel from "@/components/index/Newmodel.vue";
import Footer from "@/components/index/Footer.vue";

export default {
  name: "Allcourse",
  components: {
    Searchhead,
    Newmodel,
    Footer,
  },
  data() {
    return {
      url1: require("@/assets/img/allcourse/1.png"),
      url2: require("@/assets/img/allcourse/2.png"),
      isBack1: 0,
      isBack2: 0,
      datas: [],
      map: {
        current: 1,
        size: 16,
      },
      subject1: [],
      subject2: [],
    };
  },
  watch: {
    isBack1: {
      handler(newVal) {
        if (newVal == 0) {
          this.subject2 = [];
          this.$fetch("/server/course/getAllCourse").then((response) => {
            this.datas = response.data.courses;
          });
        } else {
          this.$fetch(`/server/course/getChildSubject/${newVal}`).then(
            (response) => {
              this.subject2 = response.data.subject;
            }
          );
        }
      },
    },
  },
  methods: {
    allClick1() {
      this.isBack1 = 0;
      this.$fetch("/server/course/getAllCourse").then((response) => {
        this.datas = response.data.courses;
      });
    },
    subClick1(id) {
      this.isBack1 = id;
      this.$fetch(`/server/course/getChildSubject/${id}`).then((response) => {
        this.subject2 = response.data.subject;
        this.subClick2(response.data.subject[0].id);
      });
    },
    subClick2(id) {
      this.isBack2 = id;
      this.$fetch(`/server/course/getCourseClassify/${id}`).then((response) => {
        this.datas = response.data.courses;
      });
    },
    studyTiao(id) {
      this.$router.push(`/coursedetail/${id}`);
    },
  },
  created() {
    this.$fetch(`/server/course/getAllParentSubject`).then((response) => {
      if (response.success) {
        //成功返回数据
        this.subject1 = response.data.subjects;
      } else {
        //返回数据失败
      }
    });
    this.$fetch("/server/course/getAllCourse").then((response) => {
      // console.log(response)
      this.datas = response.data.courses;
    });
  },
};
</script>

<style lang="less" scoped>
.back {
  color: #f20d0d;
  font-weight: 700;
  padding: 5px 13px;
  border-radius: 10px;
  background-color: #f3e8e9;
}
.allcourse {
  height: 100vh; // 不必是100vh，只需要是该容器显示的最大高度即可
  overflow-x: hidden;
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
.imgDiv > img:nth-child(1) {
  width: 150px;
  height: 46px;
}
.imgDiv > img:nth-child(2) {
  margin-left: 15px;
  width: 130px;
  height: 12px;
}
.nav {
  padding: 35px 170px;
  background-color: #f3f5f6;
}
.nav1 {
  margin-top: 30px;
  margin-bottom: 35px;
}
.nav1 > span,
.nav2 > span {
  margin-right: 11px;
  font-size: 16px;
  font-weight: 700;
}
.nav1 > a,
.nav2 > a {
  padding: 5px 13px;
  font-size: 16px;
  margin-right: 20px;
}
.nav1 > a:last-child,
.nav2 > a:last-child {
  margin-right: 0px;
}
//内容
.content {
  margin: 0 auto;
  width: 1152px;
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
//页数
.step {
  width: 100%;
  margin-top: 35px;
  margin-bottom: -20px;
}
.step {
  text-align: center;
}
/deep/ .btn-prev,
/deep/ .btn-next {
  width: 42px;
  height: 36px;
  background-color: white !important;
}
/deep/ .el-pagination.is-background .el-pager li {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  text-align: center;
  line-height: 36px;
  margin: 0 12px;
  color: black;
  background-color: white;
}
/deep/ .el-pagination.is-background .el-pager li:hover {
  color: black !important;
  background-color: #d9dde1;
  cursor: pointer;
}
::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  text-align: center;
  line-height: 36px;
  margin: 0 12px;
  background-color: #4d555d;
  color: #fff;
}
</style>
