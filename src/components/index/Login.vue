<template>
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      width="30%"
    >
      <div class="select">
        <h3 :class="click1" @click="selected1">账号登录</h3>
        <h3 :class="click2" @click="selected2">验证码登录</h3>
      </div>
      <div class="info">
        <!-- 密码登录 -->
        <div v-if="xz" id="info1">
          <div class="zzInput1">
            <el-form :model="edit" :rules="rules">
              <el-form-item prop="phone1">
                <el-input
                  v-model="edit.phone1"
                  placeholder="请输入账号"
                  maxlength="11"
                  clearable
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
          <el-input
            placeholder="请输入密码"
            v-model="pwd"
            show-password
            maxlength="20"
            clearable
          ></el-input>
        </div>
        <!-- 验证码登录 -->
        <div v-else id="info2">
          <div class="phoneInput2">
            <div>+86</div>
            <div class="zzInput2">
              <el-form :model="edit" :rules="rules">
                <el-form-item prop="phone2">
                  <el-input
                    v-model="edit.phone2"
                    placeholder="请输入手机号"
                    maxlength="11"
                    clearable
                  ></el-input>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="yanzhenInput2">
            <div>验证码</div>
            <el-input
              placeholder="请输入验证码"
              v-model="phonexinxi1"
              maxlength="8"
              clearable
            ></el-input>
            <div id="yzk1" v-if="yzk1" @click="yzan1">获取验证码</div>
            <div id="yzk2" v-else>{{ this.s1 }}S后重新获取</div>
          </div>
        </div>
      </div>
      <div class="login1">
        <div @click="loginClick">登 录</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import bus from "./eventBus.js";
import lo from "./login.js";

export default {
  name: "Login",
  data() {
    return {
      dialogVisible: false,
      pwd: "",
      xz: true,
      click1: "h3click",
      click2: "",
      s1: 60,
      phonexinxi1: "",
      yzk1: true,
      edit: {
        phone1: "",
        phone2: "",
      },
      rules: {
        phone1: [
          { min: 11, max: 11, message: "请输入11位手机号码", trigger: "blur" },
          {
            pattern:
              /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
            message: "请输入正确的手机号码",
          },
        ],
        phone2: [
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
    selected1() {
      this.click1 = "h3click";
      this.click2 = "";
      this.xz = true;
      this.edit.phone2 = "";
      this.phonexinxi1 = "";
      this.yzk1 = true;
      clearInterval(this.yzset1);
    },
    selected2() {
      this.click2 = "h3click";
      this.click1 = "";
      this.xz = false;
      this.edit.phone1 = "";
      this.pwd = "";
    },
    jian1() {
      this.s1--;
      if (this.s1 === 0) {
        this.yzk1 = true;
        clearInterval(this.yzset1);
      }
    },
    yzan1() {
      //获取验证码
      if (document.getElementsByClassName("el-message el-message--error")[0]) {
        return;
      }
      if (this.edit.phone2 == "") {
        this.$message.error("请输入手机号!");
        return;
      }
      if (document.getElementsByClassName("el-form-item__error")[0]) {
        var zhen = document.getElementsByClassName("el-form-item__error")[0];
        this.$message.error(zhen.innerText);
        return;
      }
      this.$fetch(`/server/user/sendCode/${this.edit.phone2}`).then(
        (response) => {
          if (response.success) {
            // console.log(response);
          }
        }
      );
      this.yzk1 = false;
      this.s1 = 5;
      this.yzset1 = setInterval(() => {
        this.jian1();
      }, 1000);
    },
    loginClick() {
      if (this.xz) {
        // 账号密码登录
        if (
          document.getElementsByClassName("el-message el-message--error")[0]
        ) {
          return;
        }
        if (this.edit.phone1 == "") {
          this.$message.error("请输入手机号!");
          return;
        }
        if (document.getElementsByClassName("el-form-item__error")[0]) {
          var zhen = document.getElementsByClassName("el-form-item__error")[0];
          this.$message.error(zhen.innerText);
          return;
        }
        if (this.pwd == "") {
          this.$message.error("请输入密码!");
          return;
        }
        //发送请求
        this.$post(`/server/user/login/${this.edit.phone1}/${this.pwd}`).then(
          (response) => {
            if (response.success) {
              this.dialogVisible = false;
              localStorage.setItem("id", response.data.id);
              localStorage.setItem("userToken", response.data.token);
              // this.token = response.data.token;
              this.$fetch(`/server/user/getUserInfo/${response.data.id}`).then(
                (response) => {
                  lo.$emit("loginSuc", response.data.user);
                }
              );
            } else {
              this.$message.error("请输入正确信息!");
            }
          }
        );
      } else {
        // 验证码登录
        if (
          document.getElementsByClassName("el-message el-message--error")[0]
        ) {
          return;
        }
        if (this.edit.phone2 == "") {
          this.$message.error("请输入手机号!");
          return;
        }
        if (document.getElementsByClassName("el-form-item__error")[0]) {
          var zhen = document.getElementsByClassName("el-form-item__error")[0];
          this.$message.error(zhen.innerText);
          return;
        }
        if (this.phonexinxi1 == "") {
          this.$message.error("请输入验证码!");
          return;
        }
        //发送请求
        this.$post(
          `/server/user/loginByCodes/${this.phonexinxi1}/${this.edit.phone2}`
        ).then((response) => {
          if (response.success) {
            this.dialogVisible = false;
            localStorage.setItem("id", response.data.id);
            localStorage.setItem("userToken", response.data.token);
            this.$fetch(`/server/user/getUserInfo/${response.data.id}`).then(
              (response) => {
                lo.$emit("loginSuc", response.data.user);
              }
            );
          } else {
            this.$message.error("请输入正确信息!");
          }
        });
      }
    },
  },
  created() {
    bus.$on("login11", (val) => {
      this.dialogVisible = true;
      this.selected1();
      this.edit.phone1 = "";
      this.pwd = "";
    });
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-dialog {
  border-radius: 13px;
}
/deep/ .el-dialog__headerbtn i {
  margin-top: 5px;
  margin-right: 5px;
  font-size: 25px;
}
.h3click {
  color: red;
  border-bottom: 3px solid red;
}
.select h3 {
  padding-bottom: 8px;
  display: inline-block;
  font-size: 18px;
  margin-right: 17px;
  cursor: pointer;
}
.select {
  margin-left: 38px;
}

.info {
  margin-top: 17px;
  margin-bottom: 45px;
}
#info2 {
  margin-top: 43px;
  margin-bottom: 46px;
}

.zzInput1 .el-input::before {
  position: absolute;
  top: -1px;
  left: 0px;
  font-family: "icomoon";
  font-size: 25px;
  line-height: 40px;
  content: "";
  width: 33px;
  height: 41px;
  padding-left: 7px;
  color: white;
  background-color: #cccccc;
}
#info1 > div:last-child::before {
  position: absolute;
  top: -1px;
  left: 0px;
  font-family: "icomoon";
  font-size: 23px;
  line-height: 40px;
  content: "";
  width: 27px;
  height: 41px;
  padding-left: 13px;
  color: white;
  background-color: #cccccc;
}
/deep/ .el-input__inner {
  margin-left: 50px;
  width: 280px;
}
#info1 div {
  margin: 0px 38px;
  //这个宽度是调节清空按钮
  width: 320px;
}
#info1 div:first-child {
  // margin: 27px 13px;
  margin-top: 27px;
  margin-left: 12.8px;
  margin-bottom: 23px;
}
/deep/ .zzInput1 .el-form-item__error {
  margin-top: -15px;
  margin-left: 68px;
}

#info2 > div {
  position: relative;
  margin: 27px -13px;
}
.zzInput2 .el-input {
  //这个宽度是调节清空按钮
  width: 375px;
}
.yanzhenInput2 {
  margin-top: 40px !important;
}
.phoneInput2 > div:first-child,
.yanzhenInput2 div:first-child {
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
/deep/ .zzInput2 .el-input__inner,
/deep/ .yanzhenInput2 .el-input__inner {
  margin-left: 50px;
  padding-left: 80px;
  width: 335px;
}
.yanzhenInput2 .el-input {
  //这个宽度是调节清空按钮
  width: 270px;
}
//错误消息
/deep/ .zzInput2 .el-form-item__error {
  margin-top: 8px;
  margin-left: 130px;
}

#yzk1 {
  width: 120px;
  color: #3377ff;
  cursor: pointer;
}
#yzk2 {
  width: 108px;
  padding-left: 12px;
  cursor: not-allowed;
}
#yzk1,
#yzk2 {
  position: absolute;
  top: 0px;
  right: 56px;
  text-align: center;
  // width: 120px;
  height: 39px;
  line-height: 40px;
  z-index: 1;
}

.login1 > div {
  margin-top: 29px;
  margin-left: 38px;
  margin-bottom: 40px;
  text-align: center;
  line-height: 50px;
  width: 335px;
  height: 50px;
  color: white;
  font-size: 16px;
  border-radius: 50px;
  background-color: #f20d0d;
}
.login1 > div:hover {
  cursor: pointer;
  background-color: #c20a0a;
}
</style>
