<template>
  <div class="studyroute">
    <div class="title">
      <div>
        <img src="@/assets/img/index/linelogo.png" />
        <h2>学习路线</h2>
      </div>
      <div>
        <a href="#/studyall/all">全部 ></a>
      </div>
    </div>
    <div class="content">
      <Studymodel
        v-for="data in datas"
        :key="data.id"
        :cover="data.cover"
        :title="data.description"
        :teacherName="data.teacherName"
        :lessonNum="data.lessonNum"
        :viewCount="data.viewCount"
        @click.native="studyTiao(data.id)"
      ></Studymodel>
    </div>
  </div>
</template>

<script>
import Studymodel from "@/components/index/Studymodel.vue";

export default {
  name: "Studyroute",
  components: {
    Studymodel,
  },
  data() {
    return {
      datas: {},
    };
  },
  methods: {
    studyTiao(id) {
      if (id == undefined) {
        return;
      }
      this.$router.push(`/studyall/${id}`);
    },
  },
  beforeCreate() {
    this.$fetch("/edu/direction/getHotDirection").then((response) => {
      this.datas = response.data.direction;
    });
  },
  created() {
    if (this.datas) {
      this.datas = [{}, {}, {}];
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
.studyroute {
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
.content > .studymodel:nth-child(3n) {
  margin-right: 0;
}
</style>