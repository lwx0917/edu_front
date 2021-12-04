<template>
  <div class="problemdetail">
    <Searchhead></Searchhead>
    <div class="contentFather">
      <div class="content">
        <div class="info">
          <el-image :src="datas.salt" :fit="fit" lazy></el-image>
          <div class="infoName">
            <h2>{{ datas.nickName }}</h2>
            <p>{{ datas.sign }}</p>
          </div>
        </div>
        <div class="time">
          <span>{{ datas.good }} 人赞同了该回答</span>
          <span>{{ datas.gmtCreate }}</span>
        </div>
        <p v-html="datas.content"></p>
        <div class="good">
          <span class="iconfont icon-dianzan1" @click="goodClick">
            {{ datas.good }} 赞</span
          >
          <span class="iconfont icon-cai1" @click="bedClick">
            {{ datas.bed }} 踩</span
          >
          <span class="el-icon-chat-round"> {{ replys.length }} 评论</span>
        </div>
        <div class="reply">
          <div class="replyNum">{{ replys.length }} 条评论</div>
          <Replymodel
            v-for="data in replys"
            :key="data.id"
            :salt="data.salt"
            :nickName="data.nickName"
            :content="data.content"
            :gmtCreate="data.gmtCreate"
          >
          </Replymodel>
        </div>
      </div>
      <Putcomment></Putcomment>
    </div>
    <Footer></Footer>
    <el-backtop
      target=".problemdetail"
      :visibility-height="260"
      :right="70"
      :bottom="60"
    >
      <div class="btn">
        <i class="el-icon-caret-top"></i>
      </div>
    </el-backtop>
  </div>
</template>

<script>
import Replymodel from "@/components/problem/Replymodel.vue";
import Putcomment from "@/components/problem/Putcomment.vue";
import Searchhead from "@/components/search/Searchhead.vue";
import Footer from "@/components/index/Footer.vue";

export default {
  name: "problemdetail",
  components: {
    Searchhead,
    Replymodel,
    Putcomment,
    Footer,
  },
  data() {
    return {
      fit: "fill",
      url: require("@/assets/img/search/tx.png"),
      datas: {},
      replys: {},
      userId: -1,
    };
  },
  methods: {
    goodClick() {
      this.$post(
        `/server/discuss/good/${this.$route.params.id}/${this.userId}`
      ).then((response) => {
        if (response.success) {
          //成功返回数据
          location.reload();
        } else {
          //返回数据失败
        }
      });
    },
    bedClick() {
      this.$post(
        `/server/discuss/bed/${this.$route.params.id}/${this.userId}`
      ).then((response) => {
        if (response.success) {
          //成功返回数据
          location.reload();
        } else {
          //返回数据失败
        }
      });
    },
  },
  created() {
    this.userId = localStorage.getItem("id");
    this.$fetch(`/server/discuss/getDiscussById/${this.$route.params.id}`).then(
      (response) => {
        if (response.success) {
          //成功返回数据
          this.datas = response.data.problem;
          this.replys = response.data.reply;
        } else {
          //返回数据失败
        }
      }
    );
  },
};
</script>

<style lang="less" scoped>
.problemdetail {
  height: 100vh; // 不必是100vh，只需要是该容器显示的最大高度即可
  overflow-x: hidden;
  // background-color: #f6f6f6;
}
.btn {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  color: #434343;
}
.contentFather {
  display: flex;
}
.content {
  width: 800px;
  padding: 25px 30px;
  margin: 30px 0;
  // margin-left: 183.6px;
  margin-left: 160px;
  box-shadow: 0 4px 8px 0 #dedee7;
}

.info {
  display: flex;
}
.info > div:first-child {
  width: 45px;
  height: 45px;
  margin-right: 16px;
}
.infoName > h2 {
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 5px;
}
.infoName > p {
  color: #646464;
}

.time {
  margin: 16px 0;
  color: #8590a6;
}
.time > span:nth-child(2) {
  margin-left: 530px;
}

.content > p {
  font-size: 15px;
  line-height: 1.6;
  color: #121212;
}

.good {
  margin: 11px 0;
}
.good > span {
  font-size: 14px;
  font-weight: 400;
  color: #8590a6;
  cursor: pointer;
}
.good > span:nth-child(2) {
  margin: 0 20px;
}

.reply {
  margin: 30px auto;
  padding-bottom: 20px;
  border: 1px solid #ebebeb;
  box-shadow: 0 0 6px #dedee7;
}
.replyNum {
  border-bottom: 2px solid #f6f6f6;
  font-size: 15px;
  font-weight: 600;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  color: #121212;
}
// .replyModel {
//   padding: 12px 20px;
//   border-bottom: 2px solid #f6f6f6;
// }
// .replyInfo {
//   display: flex;
// }
// .replyInfo > div:first-child {
//   width: 25px;
//   height: 25px;
//   margin-right: 10px;
// }
// .replyInfo > h2 {
//   font-weight: 500;
//   font-size: 15px;
//   height: 25px;
//   line-height: 25px;
// }
// .replyInfo > span {
//   display: block;
//   margin-left: 555px;
//   height: 25px;
//   line-height: 25px;
//   font-size: 14px;
//   color: #8590a6;
// }
// .replyContent {
//   margin: 6px 0;
//   padding-left: 33px;
//   font-size: 15px;
//   color: #121212;
// }
.replyGood {
  padding-left: 33px;
}
.replyGood > span {
  font-size: 14px;
  color: #8590a6;
}
.replyGood > span:nth-child(2) {
  margin: 0 20px;
}
</style>
