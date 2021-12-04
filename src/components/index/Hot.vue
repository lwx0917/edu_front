<template>
  <div class="hot">
    <div class="title">
      <div>
        <img src="@/assets/img/index/hotlogo.png" />
        <h2>知识热点</h2>
      </div>
      <div>
        <!-- <a href="#/hotall">全部 ></a> -->
      </div>
    </div>
    <div class="content">
      <Hotmodel
        v-for="data in datas"
        :key="data.id"
        :cover="data.cover"
        :topic="data.topic"
        :content="data.content"
        :name="data.name"
        @click.native="detailPage(data.id)"
      ></Hotmodel>
    </div>
  </div>
</template>

<script>
import Hotmodel from "@/components/index/Hotmodel.vue";

export default {
  name: "Hot",
  components: {
    Hotmodel,
  },
  data() {
    return {
      datas: {},
    };
  },
  methods: {
    detailPage(id) {
      if (id == undefined) {
        return;
      }
      this.$router.push(`/hotdetail/${id}`);
    },
  },
  beforeCreate() {
    this.$fetch("/edu/newsInfo/getAllNews").then((response) => {
      if (response.success) {
        //成功返回数据
        this.datas = response.data.result;
      } else {
        //返回数据失败
      }
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
.hot {
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
.title > div:nth-child(2) a:last-child {
  float: right;
  line-height: 40px;
  margin-left: 30px;
  margin-right: 20px;
}
.content {
  margin-top: 30px;
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

.content > .hotmodel {
  margin-right: 24px;
}
.content > .hotmodel:nth-child(4n) {
  margin-right: 0px;
}
</style>
