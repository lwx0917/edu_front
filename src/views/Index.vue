<template>
  <div class="index">
    <ul class="fixNav" v-show="state">
      <li v-for="data in titles" :key="data.id" @click="navClick(data.id)">
        {{ data.title }}
      </li>
    </ul>
    <Login></Login>
    <Register></Register>
    <!-- <keep-alive>
      <component :is="Head"> </component>
    </keep-alive> -->
    <Head></Head>
    <Figure></Figure>
    <Newcourse></Newcourse>
    <Studyroute></Studyroute>
    <Teacherlist></Teacherlist>
    <Story></Story>
    <Hot></Hot>
    <Footer></Footer>
    <el-backtop
      target=".index"
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
import Login from "@/components/index/Login.vue";
import Register from "@/components/index/Register.vue";
import Head from "@/components/index/Head.vue";
import Figure from "@/components/index/Figure.vue";
import Newcourse from "@/components/index/Newcourse.vue";
import Studyroute from "@/components/index/Studyroute.vue";
import Teacherlist from "@/components/index/Teacherlist.vue";
import Story from "@/components/index/Story.vue";
import Hot from "@/components/index/Hot.vue";
import Footer from "@/components/index/Footer.vue";

export default {
  name: "Index",
  components: {
    Login,
    Register,
    Head,
    Figure,
    Newcourse,
    Studyroute,
    Teacherlist,
    Story,
    Footer,
    Hot,
  },
  data() {
    return {
      Head: Head,
      state: false,
      titles: [
        { id: "0", title: "新上好课" },
        { id: "1", title: "学习路线" },
        { id: "2", title: "教师列表" },
        { id: "3", title: "用户故事" },
        { id: "4", title: "知识热点" },
      ],
      child: [],
      flag: true,
    };
  },
  methods: {
    clear(id) {
      const lis = document.getElementsByTagName("li");
      for (let i = 0; i <= 4; i++) {
        lis[i].style.color = "#6d7278";
      }
      lis[id].style.color = "#e02020";
    },
    navClick(id) {
      this.clear(id);
      this.child[id].scrollIntoView();
    },
    scrollHandle() {
      if (this.flag) {
        setTimeout(() => {
          var newcourse;
          try {
            newcourse = document
              .getElementsByClassName("newcourse")[0]
              .getBoundingClientRect().top;
          } catch (e) {
            return;
          }
          if (newcourse > 220) {
            if (this.state) {
              this.state = false;
              // return;
            }
            // return;
          } else {
            if (this.state == false) {
              this.state = true;
              this.clear(0);
            }
          }
          var studyroute;
          var teacherlist;
          var story;
          var hot;
          try {
            studyroute = document
              .getElementsByClassName("studyroute")[0]
              .getBoundingClientRect().top;
            teacherlist = document
              .getElementsByClassName("teacherlist")[0]
              .getBoundingClientRect().top;
            story = document
              .getElementsByClassName("story")[0]
              .getBoundingClientRect().top;
            hot = document
              .getElementsByClassName("hot")[0]
              .getBoundingClientRect().top;
          } catch (e) {
            return;
          }
          if (hot <= 130) {
            this.clear(4);
          } else if (story <= 115) {
            this.clear(3);
          } else if (teacherlist <= 121) {
            this.clear(2);
          } else if (studyroute <= 115) {
            this.clear(1);
          } else if (newcourse <= 45) {
            this.clear(0);
          }
          this.flag = true;
        }, 500);
      }
      this.flag = false;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHandle, true);
    for (let i = 5; i <= 9; i++) {
      this.child.push(
        document.getElementsByClassName("index")[0].childNodes[i]
      );
    }
  },
};
</script>

<style lang="less" scoped>
.current {
  color: #e02020;
}
.index {
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
.fixNav {
  position: fixed;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  box-shadow: 0 4px 8px 0 #dedee7;
  text-align: center;
  border-radius: 0 8px 8px 0;
  color: #6d7278;
  background-color: white;
  z-index: 5;
}
.fixNav > li {
  position: relative;
  width: 120px;
  padding: 16px 0;
  cursor: pointer;
}
.fixNav > li :hover {
  color: red !important;
}
.fixNav > li::after {
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -30px;
  content: "";
  width: 60px;
  border: 1px solid #f3f5f7;
}
.fixNav > li:last-child::after {
  border: 0px;
}
</style>
