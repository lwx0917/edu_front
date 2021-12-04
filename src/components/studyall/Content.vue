<template>
  <div class="content">
    <div class="link">
      <a
        href="javascript:;"
        v-for="subject in subjects"
        :key="subject.id"
        @click="subClick(subject.id)"
        :class="{ under: isUnder === subject.id }"
        >{{ subject.title }}</a
      >
    </div>
    <Step :datas="datas"></Step>
  </div>
</template>

<script>
import Step from "@/components/studyall/Step.vue";

export default {
  name: "Content",
  components: {
    Step,
  },
  data() {
    return {
      isUnder: 0,
      subjects: {},
      datas: [],
      tmp: {},
    };
  },
  methods: {
    subClick(id) {
      this.isUnder = id;
      this.$fetch(`/edu/stage/getStageByCategoryId/${id}`).then((response) => {
        this.datas = response.data.direction.stageList;
        // console.log(response)
      });
    },
  },
  created() {
    if (this.$route.params.id == "all") {
      this.$fetch("/edu/direction/getDirection").then((response) => {
        this.subClick(response.data.direction[0].id);
        this.subjects = response.data.direction;
      });
    } else {
      this.$fetch("/edu/direction/getDirection")
        .then((response) => {
          this.tmp = response.data.direction;
        })
        .then(() => {
          let result = this.tmp.filter((ele) => {
            return ele.id == this.$route.params.id;
          });
          return result;
        })
        .then((rep) => {
          this.subjects = rep;
          this.subClick(rep[0].id);
        });
    }
  },
};
</script>

<style lang="less" scoped>
.under {
  border-bottom: 3px solid #9448eb;
}
.content {
  width: 100%;
  padding-bottom: 50px;
  background-color: #f8fafc;
  cursor: default;
}
.link {
  text-align: center;
  height: 100px;
}
.link > a {
  font-size: 16px;
  font-weight: 700;
  line-height: 100px;
  margin-right: 60px;
  padding-bottom: 7px;
}
.link > a:hover {
  color: #9448eb;
}
.link > a:last-child {
  margin-right: 0px;
}
</style>
