<template>
  <div class="head">
    <div>
      <img src="@/assets/img/index/logo.png" />
      <h1>新课网</h1>
    </div>
    <div class="courseKey">
      <a href="#/index">首页</a>
      <a href="#/problem">猿问</a>
      <a href="#/allcourse">全部课程</a>
    </div>
    <div class="search">
      <el-autocomplete
        v-model="keyWord"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入关键字"
        @select="handleSelect"
      ></el-autocomplete>
      <div @click="search1">搜索</div>
      <!-- <input type="text" placeholder="请输入关键字" v-model="keyWord" />
      <div @click="search1"><i class="el-icon-search"></i></div> -->
    </div>
    <div class="logreg">
      <div v-if="denglu" class="logreg1">
        <el-button type="text" @click="login11">登录</el-button>
        <span>/</span>
        <el-button type="text" @click="zhuce11">注册</el-button>
      </div>
      <div v-else class="logreg2">
        <el-image :src="url" :fit="fit" @click="personPage"></el-image>
        <div><span @click="exit">退出登录</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "./eventBus.js";
import lo from "./login.js";

export default {
  name: "Head",
  data() {
    return {
      keyWord: "",
      timeout: null,
      restaurants: [],
      id: "",
      denglu: true,
      fit: "fill",
      url: "",
    };
  },
  methods: {
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 1000 * Math.random());
    },
    createStateFilter(queryString) {
      return (keyWord) => {
        return (
          keyWord.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    },
    personPage() {
      this.$router.replace("/personal");
    },
    login11() {
      bus.$emit("login11");
    },
    zhuce11() {
      bus.$emit("zhuce11");
    },
    search1() {
      if (this.keyWord == "") {
        if (document.getElementsByClassName("el-notification right")[0]) {
          return;
        }
        this.$notify({
          title: "请输入关键字!",
          message: "",
          offset: 200,
        });
        return;
      }
      this.$router.push(`/search/${this.keyWord}`);
    },
    exit() {
      localStorage.removeItem("userToken");
      localStorage.removeItem("id");
      this.denglu = true;
    },
  },
  created() {
    lo.$on("loginSuc", (val) => {
      this.denglu = false;
      this.url = val.salt;
    });
    if (localStorage.getItem("id")) {
      this.id = localStorage.getItem("id");
      this.denglu = false;
      this.$fetch(`/server/user/getUserInfo/${this.id}`).then((response) => {
        this.url = response.data.user.salt;
      });
    } else {
      this.denglu = true;
    }
  },
  mounted() {
    this.$fetch(`/server/course/getHotWords`).then((response) => {
      this.restaurants = response.data.hotWords;
    });
  },
};
</script>

<style lang="less" scoped>
.head {
  height: 90px;
  // box-shadow: 0px 0px 8px 0px #9999b3;
  border-top: 1px solid transparent;
  background-color: white;
}

.head > div:first-child {
  margin-left: 100px;
  cursor: default;
}
.head > div:first-child h1 {
  float: left;
  margin-left: 10px;
  line-height: 85px;
}
img {
  float: left;
  margin-top: 5px;
  height: 80px;
}
//搜索框
.search {
  margin-top: 20px;
  margin-left: 500px;
}
.search > div:first-child {
  float: left;
  margin-left: 90px;
}
/deep/ .el-input__inner {
  padding-left: 19px;
  font-size: 16px;
  width: 310px;
  height: 48px;
}
/deep/ .el-input__inner:focus {
  border: 1px solid #666666;
}
.search > div:last-child {
  float: left;
  text-align: center;
  font-size: 16px;
  width: 90px;
  height: 48px;
  line-height: 48px;
  color: white;
  background-color: #f01414;
  cursor: pointer;
}
.search > div:last-child:hover {
  background-color: #c20a0a;
}
// .search input {
//   float: left;
//   width: 290px;
//   height: 45px;
//   font-size: 15px;
//   padding-left: 20px;
//   border: 1px solid #dddddd;
// }
// input[type="text"]:focus {
//   border: 1px solid #666666;
//   outline: none;
// }
// .search div {
//   float: left;
//   width: 50px;
//   height: 46.3px;
//   line-height: 46px;
//   margin-top: 0.5px;
//   text-align: center;
//   cursor: pointer;
//   background-color: #409eff;
// }
// .search div i {
//   color: white;
//   font-size: 17px;
// }

.logreg {
  float: right;
  margin-right: 60px;
}
.logreg > div {
  margin-top: 8px;
}
.logreg1 span:nth-child(2) {
  margin: 0 20px;
  cursor: default;
}
.logreg1 span,
.logreg1 button {
  color: #4d555d;
  font-size: 15px;
}
.logreg1 button:nth-child(1):hover,
.logreg1 button:nth-child(3):hover {
  cursor: pointer;
  color: red;
}

.logreg2 {
  display: flex;
  width: 120px;
  margin-right: 50px;
}
.logreg2 > div:last-child {
  flex: 1;
  margin-top: 10px;
  margin-bottom: 5px;
  cursor: pointer;
}
.logreg2 > div:last-child :hover {
  color: red;
}
/deep/ .el-image {
  flex: 1;
  width: 100%;
  height: 100%;
  margin-top: -2px;
}
/deep/ .el-image img {
  width: 37px;
  height: 37px;
  border: 2px solid transparent;
  border-radius: 50%;
  cursor: pointer;
}
/deep/ .el-image img:hover {
  border: 2px solid red;
}
.courseKey {
  float: left;
  height: 100%;
  margin-left: 39px;
}
.courseKey > a {
  font-size: 16px;
  line-height: 90px;
  color: #545c63;
}
.courseKey > a:nth-child(2) {
  margin: 0 29px;
}
.courseKey > a:hover {
  color: red;
}
</style>
