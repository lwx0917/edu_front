<template>
  <div class="history">
    <h3>历史记录</h3>
    <div class="content" v-for="data in datas" :key="data.index">
      <el-image :src="data.cover" :fit="fit" lazy></el-image>
      <div class="info">
        <h3>{{ data.title }}</h3>
        <h5>{{ data.chapter }}</h5>
        <div class="time">
          <span>看到 {{ data.video }}</span>
          <span>|</span>
          <span>{{ data.nowTime }}</span>
        </div>
      </div>
      <!-- <div class="continue">继续观看</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "History",
  data() {
    return {
      fit: "fill",
      url: require("@/assets/img/index/hotimg.png"),
      id: localStorage.getItem("id"),
      data: [],
    };
  },
  computed: {
    datas: function () {
      let arr = [];
      for (let history in this.data) {
        arr.push(this.data[`${history}`]);
      }
      let result = arr.sort((a, b) => {
        return a.nowTime > b.nowTime ? -1 : 1;
      });
      return result;
    },
  },
  created() {
    this.$fetch(
      `/server/history/getHistoryByUserId/${this.id}, {
          map: JSON.stringify(this.map),
        }`
    ).then((response) => {
      // console.log(response);
      this.data = response.data.history;
    });
  },
};
</script>

<style lang="less" scoped>
.history {
  flex: 5;
  padding-left: 3%;
}
.history > h3 {
  font-size: 16px;
  padding-bottom: 1.5%;
  border-bottom: 1px solid #d9dde1;
}
.content {
  display: flex;
  padding-left: 1%;
}
.content > div:first-child {
  cursor: pointer;
}
.el-image {
  margin-top: 15px;
  width: 160px;
  height: 100px;
}
.info {
  flex: 10;
  padding-left: 8%;
  padding-top: 2%;
}
.info > h3 {
  display: inline-block;
  cursor: pointer;
}
.info > h5 {
  margin-top: 10px;
  margin-bottom: 15px;
  color: #6d757a;
  font-size: 12px;
}
.time > span {
  font-size: 12px;
  color: #99a2aa;
}
.time > span:nth-child(2) {
  margin: 0 20px;
}
.continue {
  align-self: center;
  text-align: center;
  width: 100px;
  height: 50px;
  line-height: 50px;
  background-color: #f8fafc;
  cursor: pointer;
}
.continue:hover {
  background-color: #ebf0f3;
}
</style>
