<template>
  <div class="left">
    <el-dialog
      title="更换头像"
      :visible.sync="dialogVisible1"
      :close-on-click-modal="false"
      width="30%"
    >
      <!-- 照片框 -->
      <div class="imgModel">
        <img :src="info.salt" />
      </div>
      <div class="upload1">
        <el-upload
          class="upload-demo"
          action="http://27l5178v19.wicp.vip:45938/oss/file/uploadAvatar"
          auto-upload
          :on-success="success"
          :limit="1"
        >
          <el-button size="small" type="primary">上传头像</el-button>
        </el-upload>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="updateAvatar">确 定</el-button>
        <el-button @click="dialogVisible1 = false">取 消</el-button>
      </span>
    </el-dialog>
    <div class="info">
      <img :src="info.salt" />
      <!-- <div class="changeImg" @click="dialogVisible1 = true" @mouseleave="hide">
        <a href="javascript:;">更换头像</a>
      </div> -->
      <div class="changeImg" @click="dialogVisible1 = true">
        <a href="javascript:;">更换头像</a>
      </div>
      <h2>{{ info.nickName }}</h2>
    </div>
    <h2>账户管理</h2>
    <div class="link">
      <router-link
        to="/personal/banding"
        @click.native="zhclick"
        :class="zhback"
        >账号绑定<i class="el-icon-arrow-right"></i
      ></router-link>
      <router-link to="/personal/info" @click.native="xxclick" :class="xxback"
        >个人信息<i class="el-icon-arrow-right"></i
      ></router-link>
      <router-link
        to="/personal/history"
        @click.native="lsclick"
        :class="lsback"
        >历史记录<i class="el-icon-arrow-right"></i
      ></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Left",
  data() {
    return {
      id: localStorage.getItem("id"),
      salt: "",
      zhback: "back",
      xxback: "",
      lsback: "",
      info: {},
      dialogVisible1: false,
    };
  },
  methods: {
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}?`);
    },
    clearback() {
      this.zhback = "";
      this.xxback = "";
      this.lsback = "";
    },
    zhclick() {
      this.clearback();
      this.zhback = "back";
    },
    xxclick() {
      this.clearback();
      this.xxback = "back";
    },
    lsclick() {
      this.clearback();
      this.lsback = "back";
    },
    // display() {
    //   let word = document.getElementsByClassName("changeImg")[0];
    //   word.style.display = "block";
    // },
    // hide() {
    //   let word = document.getElementsByClassName("changeImg")[0];
    //   word.style.display = "none";
    // },
    success(res, file) {
      // console.log(res);
      this.salt = res.data.url;
    },
    updateAvatar() {
      this.$post(
        `http://27l5178v19.wicp.vip:45938/server/user/reviseSalt/${this.id}`,
        { salt: this.salt }
      ).then((response) => {
        if (response.code == 20000) {
          this.$message({
            type: "success",
            message: "修改成功",
          });
        } else {
          this.$message({
            type: "error",
            message: "修改失败",
          });
        }
      });
      this.dialogVisible1 = false;
      this.url = "";
      // 页面刷新 自己写!!!
      this.$router.go(0);
    },
  },
  created() {
    if (this.$route.path === "/personal/banding") {
      this.zhclick();
    }
    if (this.$route.path === "/personal/info") {
      this.xxclick();
    }
    if (this.$route.path === "/personal/history") {
      this.lsclick();
    }
    this.$fetch(`/server/user/getUserInfo/${this.id}`).then((response) => {
      // console.log(response);
      this.info = response.data.user;
    });
  },
};
</script>

<style lang="less" scoped>
.back {
  color: white;
  background-color: #f01414;
}
.left {
  width: 19%;
  height: 430px;
  padding-bottom: 1%;
  background-color: #f8fafc;
}
/deep/ .el-dialog {
  border-radius: 12px;
}
/deep/ .el-dialog__header {
  padding-top: 30px;
  padding-left: 39px;
  font-weight: 700;
}
/deep/ .el-dialog__headerbtn i {
  margin-top: 7px;
  margin-right: 5px;
  font-size: 25px;
}
/deep/ .el-dialog__body {
  padding-top: 20px;
}
/deep/ .el-dialog__footer {
  text-align: center;
  margin-top: -10px;
  padding-bottom: 35px;
}
.imgModel {
  text-align: center;
  margin-bottom: 20px;
}
.imgModel > img {
  width: 192px;
  height: 192px;
  border-radius: 100px;
  border: 4px solid #d9dde1;
}
.upload1 {
  text-align: center;
}
.upload2 {
  color: #0077c8;
}
.info {
  position: relative;
  overflow: hidden;
  border-top: 1px solid transparent;
}
.changeImg {
  position: absolute;
  bottom: 20px;
  left: 87px;
  font-size: 12px;
}
.changeImg > a {
  color: blue;
}
// .changeImg {
//   position: absolute;
//   display: none;
//   text-align: center;
//   line-height: 92px;
//   width: 42%;
//   height: 92px;
//   bottom: 15.5px;
//   left: 65.5px;
//   border-radius: 50%;
//   background-color: rgba(0, 0, 0, 0.5);
//   cursor: pointer;
// }
// .changeImg > a {
//   font-size: 12px;
//   color: white;
// }
.info > img {
  display: block;
  width: 42%;
  height: 92px;
  margin: 0 auto;
  margin-top: 20%;
  margin-bottom: 5%;
  border-radius: 50%;
  border: 4px solid #d9dde1;
}
.info > h2 {
  margin-top: 15px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
}
.left > h2 {
  font-size: 16px;
  margin: 0 10%;
  margin-top: 15%;
  margin-bottom: 10%;
  padding-bottom: 10px;
  border-bottom: 1px solid #d9dde1;
}
.link > a {
  position: relative;
  display: block;
  padding-left: 20%;
  height: 48;
  line-height: 48px;
  cursor: pointer;
}
a > i {
  margin-left: 45%;
}
// a:hover {
// color: red;
// background-color: #f3f5f7;
// color: white;
// background-color: #f01414;
// }
</style>