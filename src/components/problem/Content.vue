<template>
  <div class="content">
    <Putproblem></Putproblem>
    <div class="infinite-list-wrapper" style="overflow: auto">
      <Problemmodel
        v-infinite-scroll="load"
        infinite-scroll-immediate="false"
        infinite-scroll-disabled="disabled"
        v-for="data in datas"
        :key="data.id"
        :id="data.id"
        :salt="data.salt"
        :nickName="data.nickName"
        :content="data.content"
        :good="data.good"
        :bed="data.bed"
        :num="data.num"
        :gmtCreate="data.gmtCreate"
      ></Problemmodel>
      <p v-if="loading" style="text-align: center; font-weight: bold">
        加载中...
      </p>
      <p v-if="noMore" style="text-align: center; font-weight: bold">
        没有更多了
      </p>
    </div>
  </div>
</template>

<script>
import Problemmodel from "@/components/problem/Problemmodel.vue";
import Putproblem from "@/components/problem/Putproblem.vue";

export default {
  name: "Content",
  components: {
    Problemmodel,
    Putproblem,
  },
  data() {
    return {
      datas: [],
      num: 0,
      temp: 0,
      loading: false,
      query: {
        current: 1,
        size: 5,
      },
      version: 1,
      scroll: 1000,
    };
  },
  methods: {
    topLength(event) {
      this.scroll =
        event.target.scrollHeight -
        event.target.scrollTop -
        event.target.clientHeight;
      if (this.scroll < 1) {
        this.load();
      }
    },
    load() {
      this.loading = true;
      this.temp -= 3;
      this.query.current += 1;
      this.getInfo();
      // console.log(this.temp);
    },
    getInfo() {
      this.$post("/server/discuss/getDiscuss", this.query)
        .then((response) => {
          this.datas = this.datas.concat(response.data.records);
          this.num = response.data.total;
          this.loading = false;
        })
        .then(() => {
          if (this.version === 1) {
            this.temp = this.num;
            this.version++;
          }
        });
    },
  },
  computed: {
    noMore() {
      return this.temp <= 0;
    },
    disabled() {
      return this.loading || this.noMore;
    },
    sc() {
      return this.scroll + 1;
    },
  },
  created() {
    window.addEventListener("scroll", this.topLength, true);
    this.getInfo();
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 1200px;
  margin-top: 60px;
  margin-left: 159.6px;
  *zoom: 1;
}
.content:before,
.content:after {
  content: "";
  display: table;
}
.content:after {
  clear: both;
}

.content > div:nth-child(2) {
  padding: 28px 32px;
  width: 760px;
  box-shadow: 0 4px 8px 0 #dedee7;
}
.content > div:nth-child(3) {
  width: 824px;
  margin-top: 40px;
  margin-bottom: -30px;
}
.content > div:nth-child(3) > div {
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
.infinite-list-wrapper > p {
  margin-top: 20px;
}
</style>