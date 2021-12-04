<template>
  <div class="evaluate">
    <Pingjiamodel></Pingjiamodel>
    <div>
      <Evaluatemodel
        v-for="data in evaluateData"
        :key="data.id"
        :avatar="data.avatar"
        :content="data.content"
        :nickname="data.nickName"
        :gmtCreate="data.gmtCreate"
      ></Evaluatemodel>
    </div>
    <div>
      <el-pagination
        :current-page.sync="map.current"
        :page-size="map.size"
        :total="total"
        background
        layout="prev, pager, next"
        @current-change="get"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import Evaluatemodel from "@/components/coursedetail/Evaluatemodel.vue";
import Pingjiamodel from "@/components/coursedetail/Pingjiamodel.vue";

export default {
  name: "Evaluate",
  components: {
    Evaluatemodel,
    Pingjiamodel,
  },
  data() {
    return {
      list: null,
      map: {
        current: 1,
        size: 5,
      },
      total: 0,
      evaluateData: [],
    };
  },
  methods: {
    get() {
      this.$fetch(`/server/comment/getComments/${this.$route.params.id}`, {
        map: JSON.stringify(this.map),
      }).then((response) => {
        if (response.success) {
          //成功返回数据
          this.evaluateData = response.data.comments;
          this.total = response.data.total;
        } else {
          //返回数据失败
        }
      });
    },
  },
  created() {
    this.$fetch(`/server/comment/getComments/${this.$route.params.id}`, {
      map: this.map,
    }).then((response) => {
      if (response.success) {
        //成功返回数据
        this.evaluateData = response.data.comments;
        this.total = response.data.total;
      } else {
        //返回数据失败
      }
    });
  },
};
</script>

<style lang="less" scoped>
.evaluate {
  width: 1200px;
  margin-left: 159.6px;
}
.evaluate > div:nth-child(2) {
  padding: 28px 32px;
  width: 760px;
  box-shadow: 0 4px 8px 0 #dedee7;
}
.evaluate > div:nth-child(3) {
  width: 824px;
  margin-top: 40px;
  margin-bottom: -30px;
}
.evaluate > div:nth-child(3) > div {
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
