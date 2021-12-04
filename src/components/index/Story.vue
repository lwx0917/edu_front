<template>
  <div class="story" :style="bg">
    <div class="title">
      <img src="@/assets/img/index/toplogo.png" />
      <h2>用户故事</h2>
    </div>
    <div class="share-container">
      <div class="share-left">
        <Storyleft :datas="odd"></Storyleft>
      </div>
      <div class="share-right">
        <Storyright :datas="even"></Storyright>
      </div>
    </div>
    <button class="conversion" @click="conversion">
      换一换
      <i class="el-icon-refresh"></i>
    </button>
  </div>
</template>

<script>
import Storyleft from "@/components/index/Storyleft.vue";
import Storyright from "@/components/index/Storyright.vue";

export default {
  name: "Story",
  components: {
    Storyleft,
    Storyright,
  },
  data() {
    return {
      bg: {
        backgroundImage: this.url,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
      num: 0,
      query: {
        current: 1,
        size: 4,
      },
      info: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$post(`/edu/share/getSharePage`, this.query).then((response) => {
        this.info = response.data.data;
        this.num = response.data.total;
      });
    },
    conversion() {
      if (this.query.current < this.num / this.query.size) {
        this.query.current++;
      } else {
        this.query.current = 1;
      }
      this.info = [];
      this.$post(`/edu/share/getSharePage`, this.query).then((response) => {
        this.info = response.data.data;
        this.num = response.data.total;
      });
    },
  },
  computed: {
    odd: function () {
      return this.info.filter((ele) => {
        return ele.id % 2 == 0;
      });
    },
    even: function () {
      return this.info.filter((ele) => {
        return ele.id % 2 != 0;
      });
    },
  },
};
</script>

<style>
.story {
  position: relative;
  margin-top: 50px;
  margin-left: 180px;
  width: 1152px;
}
.share-container {
  margin-top: 30px;
  padding-top: 30px;
  padding-bottom: 50px;
  width: 1152px;
  background-color: #4f6f93;
  border-radius: 20px;
  display: flex;
  color: #fff;
  height: 375px;
}

.title {
  height: 40px;
}
.title img,
.title h2 {
  float: left;
  line-height: 40px;
}
.title img {
  margin-top: 1.5px;
  margin-right: 8px;
}

.share-left {
  width: 50%;
  height: 100%;
  display: flex;
}
.share-right {
  width: 50%;
  height: 100%;
  display: flex;
}

.conversion {
  position: absolute;
  left: 1030px;
  top: 95px;
  width: 80px;
  line-height: 5px;
  height: 25px;
  padding: 5px 8px;
  border-radius: 30px;
  font-size: 14px;
  background-color: #7089a9;
  color: #fff;
  border: none;
  outline: none;
  z-index: 999;
  opacity: 0.8;
}
</style>

