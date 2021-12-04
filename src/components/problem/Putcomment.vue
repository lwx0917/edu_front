<template>
  <div class="putcomment">
    <h3>我要评论</h3>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="map.content"
    ></el-input>
    <div @click="pjClick">立即评论</div>
  </div>
</template>

<script>
export default {
  name: "Putcomment",
  data() {
    return {
      flag: true,
      map: {
        content: ``,
        userId: -1,
        publishId: -1,
      },
    };
  },
  methods: {
    pjClick() {
      if (this.map.content == "") {
        if (
          document.getElementsByClassName("el-message el-message--error")[0]
        ) {
          return;
        }
        this.$message.error("请输入内容!");
        return;
      }
      if (this.flag) {
        this.flag = false;
        this.$post(`/server/discuss/reply`, this.map).then((response) => {
          if (response.success) {
            //成功返回数据
            this.map.content = "";
            this.$message.success("发布成功");
            this.flag = true;
            setTimeout(() => {
              location.reload();
            }, 700);
          } else {
            //返回数据失败
            this.flag = true;
          }
        });
      }
    },
  },
  created() {
    this.map.userId = localStorage.getItem("id");
    this.map.publishId = this.$route.params.id;
  },
};
</script>

<style lang="less" scoped>
.putcomment {
  width: 335px;
  margin-top: 115px;
  margin-left: 30px;
  padding-left: 40px;
}
.putcomment > h3 {
  font-size: 20px;
}
.putcomment > div:nth-child(2) {
  margin-top: 20px;
  margin-bottom: 40px;
}
/deep/ .el-textarea__inner {
  height: 200px;
}
.putcomment > div:nth-child(3) {
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  font-weight: 700;
  color: white;
  background-color: #f01414;
  cursor: pointer;
}
.putcomment > div:nth-child(3):hover {
  background-color: #c20a0a;
}
</style>
