<template>
  <div class="teacherlist">
    <div class="title">
      <div>
        <img src="@/assets/img/index/toplogo.png" />
        <h2>教师列表</h2>
      </div>
      <div>
        <a href="#/teacherall">全部 ></a>
      </div>
    </div>
    <div class="content">
      <Teachermodel
        ref="ref1"
        v-for="data in datas"
        :key="data.id"
        :avatar="data.avatar"
        :career="data.career"
        :name="data.name"
      ></Teachermodel>
    </div>
  </div>
</template>

<script>
import Teachermodel from "@/components/index/Teachermodel.vue";

export default {
  name: "Teacherlist",
  components: {
    Teachermodel,
  },
  data() {
    return {
      datas: {},
    };
  },
  beforeCreate() {
    this.$fetch("/server/teacher/getHotTeacher").then((response) => {
      this.datas = response.data.teachers;
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
.teacherlist {
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
.content > .teachermodel {
  margin-right: 24px;
}
.content > .teachermodel:nth-child(4n) {
  margin-right: 0px;
}
</style>
