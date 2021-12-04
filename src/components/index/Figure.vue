<template>
  <div class="figure">
    <el-carousel :interval="4000" type="card" height="415px">
      <el-carousel-item v-for="item in imgbox" :key="item.id">
        <img :src="item.cover" class="figureimg" @click="detail(item.id)" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Figure",
  data() {
    return {
      imgbox: [
        // {id:0,idView:require("@/assets/img/index/1.png")},
        // {id:1,idView:require("@/assets/img/index/2.png")},
        // {id:2,idView:require("@/assets/img/index/3.png")},
        // {id:3,idView:require("@/assets/img/index/4.png")},
        // {id:4,idView:require("@/assets/img/index/5.png")},
        // {id:5,idView:require("@/assets/img/index/6.png")}
      ],
    };
  },
  methods: {
    detail(id) {
      this.$router.push(`/coursedetail/${id}`);
    },
  },
  beforeCreate() {
    this.$fetch("/server/course/getHotImage").then((response) => {
      this.imgbox = response.data.images;
    });
  },
};
</script>

<style lang="less" scoped>
.figure {
  padding-top: 37px;
  height: 465px;
  box-shadow: 0px 5px 8px #dedee7;
  background-image: linear-gradient(to bottom, #e9f7f2, white);
}
.figureimg {
  width: 100%;
  height: 400px;
}
</style>
