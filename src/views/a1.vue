<template>
  <div class="content">
    <div class="infinite-list-wrapper" style="overflow:auto">
      <Teachermodel
        v-infinite-scroll="load"
        infinite-scroll-immediate="false"
        infinite-scroll-disabled="disabled"
        v-for="data in datas"
        :key="data.id"
        :name="data.name"
        :intro="data.intro"
        :career="data.career"
        :avatar="data.avatar"
      ></Teachermodel>
      <p v-if="loading" style="text-align: center;font-weight:bold;">加载中...</p>
      <p v-if="noMore" style="text-align: center;font-weight:bold;">没有更多了</p>
    </div>
  </div>
</template>

<script>
import Teachermodel from "@/components/teacherall/Teachermodel.vue";

export default {
  name: "Content",
  components: {
    Teachermodel
  },
  data() {
    return {
      num: 0,
      temp: 0,
      loading: false,
      query: {
        current: 1,
        size: 3
      },
      version: 1,
      datas: [],
      scroll: 1000
    };
  },
  created() {
    window.addEventListener("scroll", this.topLength, true);
    this.getInfo();
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
    }
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
      console.log(this.temp);
    },
    getInfo() {
      this.$post("http://localhost:9001/edu/teacher/teacherPage", this.query)
        .then(response => {
          this.datas = this.datas.concat(response.data.teachers);
          this.num = response.data.total;
          this.loading = false;
        })
        .then(() => {
          if (this.version === 1) {
            this.temp = this.num;
            this.version++;
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
.content {
  padding: 50px 0;
  background-color: #f3f3f3;
}
</style>
