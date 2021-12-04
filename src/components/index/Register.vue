<template>
  <div>
    <el-dialog
      :visible.sync="dialogVisible2"
      :close-on-click-modal="false"
      width="30%"
    >
      <div v-if="if1">
        <div class="title">
          <h3>快速注册</h3>
        </div>
        <div class="info3">
          <div>
            <div class="phoneInput">
              <div>+86</div>
              <div class="zzInput">
                <el-form :model="edit" :rules="rules">
                  <el-form-item prop="phone">
                    <el-input
                      v-model="edit.phone"
                      placeholder="请输入注册手机号"
                      maxlength="11"
                      clearable
                    ></el-input>
                  </el-form-item>
                </el-form>
              </div>
            </div>
            <div class="yanzhenInput">
              <div>验证码</div>
              <el-input
                placeholder="请输入验证码"
                v-model="phonexinxi2"
                maxlength="8"
                clearable
              ></el-input>
              <div id="yzk3" v-if="yzk2" @click="yzan2">获取验证码</div>
              <div id="yzk4" v-else>{{ this.s2 }}S后重新获取</div>
            </div>
          </div>
        </div>
        <div class="register1">
          <div @click="suc">立即注册</div>
        </div>
      </div>
      <div v-else class="sucmol">
        <div class="icons">
          <i class="iconfont icon-chenggong"></i>
        </div>
        <h5>恭喜您注册成功</h5>
        <div @click="study">开始学习</div>
        <!-- <div><span @click="data">完善资料</span></div> -->
      </div>
    </el-dialog>
  </div>
</template>

<script>
import bus from "./eventBus.js";

export default {
  name: "Register",
  data() {
    return {
      dialogVisible2: false,
      if1: true,
      s2: 60,
      phonexinxi2: "",
      yzk2: true,
      edit: {
        phone: "", //注册手机号
      },
      rules: {
        phone: [
          { min: 11, max: 11, message: "请输入11位手机号码", trigger: "blur" },
          {
            pattern:
              /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
            message: "请输入正确的手机号码",
          },
        ],
      },
    };
  },
  methods: {
    jian2() {
      this.s2--;
      if (this.s2 === 0) {
        this.yzk2 = true;
        clearInterval(this.yzset2);
      }
    },
    yzan2() {
      if (document.getElementsByClassName("el-message el-message--error")[0]) {
        return;
      }
      if (this.edit.phone == "") {
        this.$message.error("请输入手机号!");
        return;
      }
      if (document.getElementsByClassName("el-form-item__error")[0]) {
        var zhen = document.getElementsByClassName("el-form-item__error")[0];
        this.$message.error(zhen.innerText);
        return;
      }
      this.$fetch(`/server/user/sendCode/${this.edit.phone}`).then(
        (response) => {
          if (response.success) {
            this.datas = response.data.teachers;
          }
        }
      );
      this.yzk2 = false;
      this.s2 = 5;
      this.yzset2 = setInterval(() => {
        this.jian2();
      }, 1000);
    },
    suc() {
      if (document.getElementsByClassName("el-message el-message--error")[0]) {
        return;
      }
      if (this.edit.phone == "") {
        this.$message.error("请输入手机号!");
        return;
      }
      if (document.getElementsByClassName("el-form-item__error")[0]) {
        var zhen = document.getElementsByClassName("el-form-item__error")[0];
        this.$message.error(zhen.innerText);
        return;
      }
      if (this.phonexinxi2 == "") {
        this.$message.error("请输入验证码!");
        return;
      }
      this.$post(
        `/server/user/register/${this.phonexinxi2}/${this.edit.phone}`
      ).then((response) => {
        // console.log(response);
        if (response.success) {
          this.if1 = false;
        } else {
          this.$message.error("请输入正确信息!");
        }
      });
    },
    study() {
      this.dialogVisible2 = false;
      //登录
      // this.$post(`/server/user/login/${this.edit.phone}/123`).then(
      //   (response) => {
      //     if (response.success) {
      //       localStorage.setItem("id", response.data.id);
      //       localStorage.setItem("userToken", response.data.token);
      //     } else {
      //     }
      //   }
      // );
    },
    // data() {
    //   this.$router.replace("/personal");
    // },
  },
  created() {
    bus.$on("zhuce11", (val) => {
      this.dialogVisible2 = true;
      this.s2 = 60;
      this.edit.phone = "";
      this.phonexinxi2 = "";
      this.yzk2 = true;
      this.if1 = true;
      clearInterval(this.yzset2);
    });
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-dialog {
  border-radius: 11px;
}
/deep/ .el-dialog__headerbtn i {
  margin-top: 5px;
  margin-right: 5px;
  font-size: 25px;
}
.title h3 {
  padding-bottom: 10px;
  font-size: 18px;
  display: inline-block;
  margin-right: 17px;
}
.title {
  margin-left: 38px;
}
.info3 > div > div {
  position: relative;
  margin: 27px -13px;
}
.zzInput .el-input {
  //这个宽度是调节清空按钮
  width: 375px;
}
.phoneInput > div:first-child,
.yanzhenInput div:first-child {
  position: absolute;
  top: 0px;
  left: 50px;
  text-align: center;
  width: 80px;
  height: 39px;
  line-height: 40px;
  z-index: 1;
  cursor: default;
}
/deep/ .zzInput .el-input__inner,
/deep/ .yanzhenInput .el-input__inner {
  margin-left: 50px;
  padding-left: 80px;
  width: 335px;
}
.yanzhenInput .el-input {
  //这个宽度是调节清空按钮
  width: 270px;
}
//错误消息
/deep/ .el-form-item__error {
  margin-top: 3px;
  margin-left: 53px;
}

#yzk3 {
  width: 120px;
  color: #3377ff;
  cursor: pointer;
}
#yzk4 {
  width: 108px;
  padding-left: 12px;
  cursor: not-allowed;
}
#yzk3,
#yzk4 {
  position: absolute;
  top: 0px;
  right: 56px;
  text-align: center;
  height: 39px;
  line-height: 40px;
  z-index: 1;
}

.register1 {
  margin-top: 50px;
  margin-bottom: 40px;
}
.register1 > div {
  margin-top: 29px;
  margin-left: 38px;
  text-align: center;
  line-height: 50px;
  width: 335px;
  height: 50px;
  color: white;
  font-size: 16px;
  border-radius: 50px;
  background-color: #f20d0d;
}
.register1 > div:hover {
  cursor: pointer;
  background-color: #c20a0a;
}

.icons {
  text-align: center;
}
i {
  color: #52c41a;
  font-size: 100px;
}
.sucmol > h5 {
  text-align: center;
  margin-top: -10px;
  font-size: 16px;
}
.sucmol > div:nth-child(3) {
  text-align: center;
  line-height: 40px;
  width: 29%;
  height: 40px;
  border-radius: 40px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 13px;
  cursor: pointer;
  color: white;
  background-color: #f20d0d;
}
.sucmol > div:nth-child(3):hover {
  background-color: #c20a0a;
}
// .sucmol > div:nth-child(4) {
//   text-align: center;
//   margin-top: 20px;
// }
// .sucmol > div:nth-child(4) > span {
//   cursor: pointer;
// }
</style>
