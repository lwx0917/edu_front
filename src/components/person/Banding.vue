<template>
  <div class="banding">
    <!-- 更换手机号 -->
    <el-dialog
      :title="title1"
      :visible.sync="dialogVisible1"
      :close-on-click-modal="false"
      width="35%"
    >
      <div class="band1" v-if="bandIf">
        <h6>解绑后，您将无法再使用该手机号对此账号进行登陆及找回密码等操作</h6>
        <div class="phoInfo">
          <h5>当前绑定手机号：</h5>
          <span>{{ info.phone | changePwd }}</span>
        </div>
        <el-form :model="edit" :rules="rules" class="demo-dynamic">
          <el-form-item prop="phone1" label="请输入当前绑定手机号：">
            <el-input
              v-model="edit.phone1"
              placeholder="请输入手机号"
              maxlength="11"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item>
            <!-- <div class="next" @click="submitForm('dynamicValidateForm')"> -->
            <div class="next" @click="nextClick">下一步</div>
          </el-form-item>
        </el-form>
      </div>
      <div class="band2" v-else>
        <el-form :model="edit" :rules="rules" class="demo-dynamic">
          <el-form-item prop="phone2" label="手机号码：">
            <el-input
              v-model="edit.phone2"
              placeholder="请输入新手机号"
              maxlength="11"
              clearable
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="note">
          <label for="" class="lab">短信验证码：</label>
          <div class="dxInput">
            <el-input
              placeholder="请输入验证码"
              v-model="dxyzm"
              maxlength="8"
              clearable
            ></el-input>
            <div id="yzk1" v-if="yzk1" @click="yzan1">获取验证码</div>
            <div id="yzk2" v-else>{{ this.s1 }}S后重新获取</div>
          </div>
        </div>
        <div class="qd" @click="updatePhone">确定</div>
      </div>
    </el-dialog>
    <!-- 更换密码 -->
    <el-dialog
      :title="title2"
      :visible.sync="dialogVisible2"
      :close-on-click-modal="false"
      width="30%"
    >
      <div class="change1" v-if="changeIf">
        <div class="oldPasswd">
          <label for="" class="oldLab">请输入旧密码：</label>
          <el-input
            placeholder="请输入旧密码"
            v-model="oldPasswd"
            show-password
            maxlength="20"
            clearable
          ></el-input>
        </div>
        <div class="next2" @click="next2Click">下一步</div>
      </div>
      <div class="change2" v-else>
        <div class="newPasswd1">
          <label for="" class="newLab1">请输入新密码：</label>
          <el-input
            placeholder="请输入新密码"
            v-model="newPasswd1"
            show-password
            maxlength="20"
            clearable
          ></el-input>
        </div>
        <div class="newPasswd2">
          <label for="" class="newLab2">确认新密码：</label>
          <el-input
            placeholder="确认新密码"
            v-model="newPasswd2"
            show-password
            maxlength="20"
            clearable
          ></el-input>
        </div>
        <div class="qd2" @click="pwdChange">确定</div>
      </div>
    </el-dialog>

    <h3>账号绑定</h3>
    <div class="phone">
      <span class="iconfont icon-shouji1"></span>
      <div class="phoneMid">
        <div class="phoneNumber">
          <h3>手机</h3>
          <span>{{ info.phone | changePwd }}</span>
        </div>
        <p>可用手机号加密码登录慕课网，可通过手机号找回密码</p>
      </div>
      <el-button type="text" @click="change">更换</el-button>
    </div>
    <div class="passwd">
      <span class="iconfont icon-anquan"></span>
      <div class="passwdTip">
        <h3>密码</h3>
        <p>用于保护账号信息和登录安全</p>
      </div>
      <el-button type="text" @click="reset">重设</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banding",
  data() {
    return {
      id: localStorage.getItem("id"),
      info: {},
      infoPwd: "",
      infoPhone: "",
      dxyzm: "",
      yzk1: true,
      s1: 60,
      dialogVisible1: false,
      dialogVisible2: false,
      title1: "验证当前绑定手机号",
      title2: "验证当前密码",
      bandIf: true,
      changeIf: true,
      oldPasswd: "",
      newPasswd1: "",
      newPasswd2: "",
      edit: {
        phone1: "",
        phone2: "",
      },
      rules: {
        phone1: [
          // { required: true, message: "请输入联系方式", trigger: "blur" },
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
  filters: {
    changePwd(str) {
      var str1 = "";
      try {
        str1 = str.toString();
      } catch (e) {}
      return `${str1.substring(0, 3)}******${str1.substring(str1.length - 2)}`;
    },
  },
  methods: {
    nextClick() {
      if (document.getElementsByClassName("el-message el-message--error")[0]) {
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
      if (this.edit.phone1 !== this.infoPhone) {
        this.$message.error("请输入正确的手机号!");
        return;
      }
      this.bandIf = false;
      this.title1 = "绑定新手机号";
    },
    next2Click() {
      if (document.getElementsByClassName("el-message el-message--error")[0]) {
        return;
      }
      if (this.oldPasswd == "") {
        this.$message.error("请输入密码!");
        return;
      }
      if (this.oldPasswd != this.infoPwd) {
        this.$message.error("请输入正确密码!");
        return;
      }
      this.changeIf = false;
      this.title2 = "输入新密码";
    },
    jian1() {
      this.s1--;
      if (this.s1 === 0) {
        this.yzk1 = true;
        clearInterval(this.yzset1);
      }
    },
    yzan1() {
      this.$fetch(`/server/user/confirmPhoneUnique/${this.edit.phone2}`).then(
        (response) => {
          // console.log(response);
          if (response.success) {
            this.yzk1 = false;
            this.s1 = 12;
            this.yzset1 = setInterval(() => {
              this.jian1();
            }, 1000);
            this.$fetch(`/server/user/sendCode/${this.edit.phone2}`).then(
              (response) => {
                // console.log(response);
              }
            );
          } else {
            this.$message.error("该手机号已被注册!");
            return;
          }
        }
      );
      // this.yzk1 = false;
      // this.s1 = 12;
      // this.yzset1 = setInterval(() => {
      //   this.jian1();
      // }, 1000);
    },
    change() {
      this.bandIf = true;
      this.dxyzm = "";
      this.edit.phone1 = "";
      this.edit.phone2 = "";
      this.s1 = 60;
      clearInterval(this.yzset1);
      this.yzk1 = true;
      this.dialogVisible1 = true;
      this.title1 = "验证当前绑定手机号";
    },
    reset() {
      this.changeIf = true;
      this.dialogVisible2 = true;
      this.title2 = "验证当前密码";
      this.oldPasswd = "";
      this.newPasswd1 = "";
      this.newPasswd2 = "";
    },
    updatePhone() {
      this.$post(
        `/server/user/revisePhone/${this.id}/${this.edit.phone2}/${this.dxyzm}`
      ).then((response) => {
        if (response.code == 20000) {
          localStorage.removeItem("id");
          localStorage.removeItem("userToken");
          this.$router.replace("/index");
        }
      });
    },
    pwdChange() {
      if (this.newPasswd1 == null) {
        this.$message.error("请输入新密码!");
        return;
      }
      if (this.newPasswd2 == null) {
        this.$message.error("请确认新密码!");
        return;
      }
      if (this.newPasswd1 != this.newPasswd2) {
        this.$message.error("两次密码不一致!");
        return;
      }
      this.$post(
        `/server/user/revisePassword/${this.id}/${this.newPasswd2}`
      ).then((response) => {
        if (response.success) {
          localStorage.removeItem("id");
          localStorage.removeItem("userToken");
          this.$router.replace("/index");
        }
      });
    },
  },
  created() {
    this.$fetch(`/server/user/getUserInfo/${this.id}`).then((response) => {
      this.info = response.data.user;
      this.infoPwd = response.data.user.password;
      this.infoPhone = response.data.user.phone;
    });
  },
};
</script>

<style lang="less" scoped>
//验证
/deep/ .el-dialog {
  border-radius: 15px;
}
/deep/ .el-dialog__header {
  padding-left: 40px;
  padding-top: 31px;
}
/deep/ .el-dialog__headerbtn .el-dialog__close {
  margin-top: 8px;
  margin-right: 8px;
  font-size: 20px;
}
/deep/ .el-dialog__title {
  font-size: 16px;
  font-weight: 700;
}
/deep/ .el-dialog__body {
  padding-left: 40px;
  margin-top: -5px;
}
.band1 > h6 {
  font-size: 14px;
  font-weight: 400;
  color: #1c1f21;
}
.phoInfo,
.el-form-item {
  display: flex;
}
.phoInfo {
  margin-left: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.phoInfo > h5 {
  margin-right: 15px;
  font-size: 14px;
  font-weight: 700;
  color: #1c1f21;
}
/deep/ .el-form-item {
  margin-left: 10px;
}
/deep/ .el-form-item__label {
  font-weight: 700;
  color: #1c1f21;
}
/deep/ .band1 .el-input__inner {
  padding: 7px 16px;
  width: 230px;
  height: 36px;
}
.next {
  margin-top: 10px;
  margin-bottom: -10px;
  margin-left: 160px;
  text-align: center;
  width: 90px;
  border-radius: 40px;
  color: white;
  background-color: #1481b8;
  cursor: pointer;
}
.next:hover {
  background-color: #0f618a;
}
//绑定新手机号
.band2 .el-form-item {
  margin-left: 45px;
}
/deep/ .band2 .el-input__inner {
  width: 270px;
}
.note {
  display: flex;
  margin-left: 32px;
  margin-top: 35px;
  margin-bottom: 20px;
}
.note > .lab {
  margin-right: 11px;
  font-weight: 700;
  color: #1c1f21;
}
.dxInput {
  position: relative;
}
/deep/ .dxInput .el-input {
  margin-top: -6px;
  width: 155px;
}
#yzk1 {
  color: #1481b8;
  cursor: pointer;
}
#yzk2 {
  padding-left: 12px;
  cursor: not-allowed;
}
#yzk1,
#yzk2 {
  position: absolute;
  padding-top: 8px;
  padding-bottom: 7px;
  padding-left: 0px;
  top: -6px;
  right: -115px;
  text-align: center;
  width: 120px;
}
#yzk1:hover {
  color: red;
}
.qd {
  margin-top: 35px;
  margin-bottom: 10px;
  margin-left: 180px;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 40px;
  color: white;
  background-color: #1481b8;
  cursor: pointer;
}
.qd:hover {
  background-color: #0f618a;
}
//更换密码
.change1 {
  margin-top: 5px;
}
.oldPasswd {
  display: flex;
}
.oldLab {
  font-size: 16px;
  margin-top: 7px;
  margin-right: 11px;
  font-weight: 700;
  color: #1c1f21;
}
/deep/ .oldPasswd .el-input {
  width: 240px;
}
.next2 {
  margin-top: 31px;
  margin-bottom: 3px;
  margin-left: 143px;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 40px;
  color: white;
  background-color: #1481b8;
  cursor: pointer;
}
.next2:hover {
  background-color: #0f618a;
}
.newPasswd1,
.newPasswd2 {
  display: flex;
}
.newLab1,
.newLab2 {
  font-size: 16px;
  margin-top: 7px;
  margin-right: 11px;
  font-weight: 700;
  color: #1c1f21;
}
.newPasswd1 {
  margin-bottom: 20px;
}
/deep/.newPasswd2 .el-input {
  margin-left: 15px;
}
/deep/ .change2 .el-input {
  width: 240px;
}
.qd2 {
  margin-top: 31px;
  margin-bottom: 3px;
  margin-left: 143px;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 40px;
  color: white;
  background-color: #1481b8;
  cursor: pointer;
}
.qd2:hover {
  background-color: #0f618a;
}

.banding {
  flex: 5;
  padding-left: 3%;
}
.banding > h3 {
  font-size: 16px;
  padding-top: 1%;
  padding-bottom: 1.5%;
  border-bottom: 1px solid #d9dde1;
}
.phone,
.passwd {
  display: flex;
  height: 15%;
  padding: 2% 0;
  border-bottom: 1px solid #d9dde1;
}

.phone,
.passwd {
  display: flex;
  justify-content: space-between;
}
.phone > span,
.passwd > span {
  font-size: 35px;
  margin-left: 2%;
  margin-right: 3%;
  align-self: center;
  color: #d9dde1;
}
.phoneMid {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-self: center;
}
.phoneMid > p,
.passwdTip > p {
  color: #93999f;
}
.phoneMid > p {
  margin-top: 0.7%;
}
.phoneNumber {
  display: flex;
}
.phoneNumber > h3 {
  margin-right: 1%;
  font-size: 16px;
  align-self: center;
}
.phoneNumber > span {
  align-self: center;
  color: #f01414;
}

.passwdTip {
  flex: 1;
}
.passwdTip > h3 {
  margin-top: 0.5%;
  margin-bottom: 0.7%;
}
/deep/ .el-button {
  align-self: center;
  height: 36px;
  padding: 7px 16px;
  border-radius: 18px;
  border: 1px solid #9199a1;
  color: #545c63;
}
/deep/ .el-button:hover {
  border: 1px solid #1c1f21;
  color: #1c1f21;
}
</style>