<template>
  <div class="searchhead">
    <div class="nav">
      <a href="#/index">首页</a>
      <a href="#/problem">猿问</a>
      <a href="#/allcourse">全部课程</a>
    </div>
    <div class="seachermodel">
      <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入内容"
        @select="handleSelect"
      ></el-autocomplete>
      <div @click="search">搜索</div>
    </div>
    <div class="statue" v-if="loginState">
      <el-image :src="url" :fit="fit" @click="personPage"></el-image>
      <div><span @click="exit">退出登录</span></div>
    </div>
  </div>
</template>

<script>
import sea from "./search.js";

export default {
  name: "Searchhead",
  data() {
    return {
      id: "",
      restaurants: [],
      state: "",
      timeout: null,
      fit: "fill",
      url: "",
      loginState: false,
    };
  },
  methods: {
    personPage() {
      this.$router.push("/personal");
    },
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
      return (state) => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    },
    //搜索按钮
    search() {
      if (this.state == "") {
        this.$message.error("请输入关键字!");
        return;
      }
      if (this.state == this.$route.params.key) {
        return;
      }
      sea.$emit("search", this.state);
      this.$router.push(`/search/${this.state}`);
    },
    exit() {
      localStorage.removeItem("userToken");
      localStorage.removeItem("id");
      this.$router.replace("/index");
    },
  },
  created() {
    if (localStorage.getItem("id")) {
      this.id = localStorage.getItem("id");
      this.loginState = true;
      this.$fetch(`/server/user/getUserInfo/${this.id}`).then((response) => {
        this.url = response.data.user.salt;
      });
    }
    this.state = this.$route.params.key;
  },
  mounted() {
    this.$fetch(`/server/course/getHotWords`).then((response) => {
      this.restaurants = response.data.hotWords;
    });
  },
};
</script>

<style lang="less" scoped>
.searchhead {
  width: 1335.9px;
  // height: 65px;
  height: 87px;
  padding-left: 183.6px;
  background-color: white;
  border-bottom: 1px solid #f3f5f6;
}
.searchhead > div:nth-child(1) {
  float: left;
}
.searchhead > div:nth-child(1) a {
  font-size: 16px;
  line-height: 87px;
  color: #545c63;
}
.nav > a:nth-child(2) {
  margin: 0 29px;
}
.nav > a:hover {
  color: red !important;
}
//搜索框
.seachermodel {
  float: left;
  margin-top: 19px;
}
.seachermodel > div:first-child {
  float: left;
  // margin-left: 90px;
  margin-left: 90px;
}
/deep/ .el-input__inner {
  // padding: 12px;
  padding-left: 19px;
  font-size: 16px;
  // width: 736px;
  width: 520px;
  height: 48px;
}
/deep/ .el-input__inner:focus {
  border: 1px solid #666666;
}
.seachermodel > div:last-child {
  float: left;
  text-align: center;
  font-size: 16px;
  width: 104px;
  height: 48px;
  line-height: 48px;
  color: white;
  background-color: #f01414;
  cursor: pointer;
}
.seachermodel > div:last-child:hover {
  background-color: #c20a0a;
}

// statue
.statue {
  display: flex;
  width: 120px;
  margin-right: 50px;
}
.statue > div:last-child {
  flex: 1;
  margin-top: 10px;
  margin-bottom: 5px;
  cursor: pointer;
}
.statue > div:last-child :hover {
  color: red;
}
.searchhead > div:nth-child(3) {
  float: right;
  margin-top: 25px;
  margin-right: 135px;
}
/deep/ .el-image {
  flex: 1;
  width: 100%;
  height: 100%;
}
/deep/ .el-image img {
  width: 37px;
  height: 37px;
  border: 2px solid transparent;
  margin-right: 20px;
  line-height: 32px;
  border-radius: 50%;
  cursor: pointer;
}
/deep/ .el-image img:hover {
  border: 2px solid red;
}
</style>
