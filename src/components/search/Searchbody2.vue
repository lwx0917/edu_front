<template>
  <div class="Searchbody2father">
    <div class="resou">
      <h3>热搜关键词</h3>
      <ul>
        <li v-for="data in hots" :key="data.id" @click="jump(data.title)">
          {{ data.title }}
        </li>
      </ul>
    </div>
    <div class="xiangguan">
      <h3>相关关键词</h3>
      <ul>
        <li v-for="data in relates" :key="data.id" @click="jump(data.title)">
          {{ data.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import sea from "./search.js";

export default {
  name: "Searchbody2",
  data() {
    return {
      hots: [
        { id: "0", title: "Java" },
        { id: "1", title: "Vue" },
        { id: "2", title: "SpringBoot" },
        { id: "3", title: "React" },
        { id: "4", title: "HTML" },
      ],
      relates: [
        { id: "0", title: "Python" },
        { id: "1", title: "Vue" },
        { id: "2", title: "SpringBoot" },
        { id: "3", title: "React" },
        { id: "4", title: "Linux" },
      ],
    };
  },
  methods: {
    jump(title) {
      sea.$emit("search", title);
      this.$router.push(`/search/${title}`);
    },
  },
};
</script>

<style lang="less" scoped>
.Searchbody2father {
  float: right;
  margin-right: 160px;
  width: 320px;
}
.Searchbody2father li {
  float: left;
  padding: 4px 8px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 14px;
  line-height: 16px;
  font-size: 12px;
  color: #646b71;
  background-color: white;
  cursor: pointer;
}
.Searchbody2father li:hover {
  color: red;
}
.Searchbody2father h3 {
  margin-bottom: 15px;
}
.xiangguan {
  margin-top: 16px;
}
.resou,
.xiangguan {
  *zoom: 1;
}
.resou:before,
.resou:after,
.xiangguan:before,
.xiangguan:after {
  content: "";
  display: table;
}
.resou:after,
.xiangguan:after {
  clear: both;
}
</style>
