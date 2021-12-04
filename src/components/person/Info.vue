<template>
  <div class="info">
    <h3>个人信息</h3>
    <form action="">
      <ul>
        <li>
          <label for="name" class="lab">昵称</label>
          <el-input
            placeholder="请输入昵称"
            v-model="name"
            clearable
            name="name"
            id="name"
            maxlength="15"
          >
          </el-input>
        </li>
        <li>
          <label for="" class="lab">年龄</label>
          <el-input
            placeholder="请输入职位"
            v-model="age"
            clearable
            name="career"
            type="number"
            min="0"
            max="200"
          >
          </el-input>
        </li>
        <li>
          <label for="" class="lab">学校</label>
          <el-input
            placeholder="请输入城市"
            v-model="city"
            clearable
            name="city"
            maxlength="50"
          >
          </el-input>
        </li>
        <li>
          <label for="" class="lab">性别</label>
          <el-input
            placeholder="请输入性别"
            v-model="sex"
            clearable
            name="sex"
            maxlength="1"
          >
          </el-input>
        </li>
        <li>
          <label for="" class="lab">个性签名</label>
          <el-input
            placeholder="请输入个性签名"
            v-model="sign"
            clearable
            name="sign"
            maxlength="50"
          >
          </el-input>
        </li>
      </ul>
      <!-- <input type="submit" name="" id="" value="提交" /> -->
    </form>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      name: "",
      age: "",
      city: "",
      sex: "",
      sign: "",
      id: localStorage.getItem("id"),
    };
  },
  created() {
    this.$fetch(`/server/user/getUserInfo/${this.id}`).then((response) => {
      // console.log(response);
      this.name = response.data.user.nickName;
      this.age = response.data.user.age;
      this.city = response.data.user.city;
      this.sex = response.data.user.sex == 0 ? "男" : "女";
      this.sign = response.data.user.sign;
    });
  },
};
</script>

<style lang="less" scoped>
.info {
  flex: 5;
  padding-left: 3%;
}
.info > h3 {
  font-size: 16px;
  padding-bottom: 1.5%;
  border-bottom: 1px solid #d9dde1;
}
ul {
  padding-left: 3%;
  padding-top: 3%;
}
.lab {
  text-align: center;
  padding: 1.5% 0;
  width: 11.5%;
  font-weight: 700;
  color: #07111b;
  background-color: #f3f5f7;
  cursor: pointer;
}
li {
  display: flex;
  margin-bottom: 1.5%;
}
ul > li:last-child {
  margin-bottom: 3.5%;
}
.el-input {
  margin-left: 1.5%;
  width: 80%;
}
/deep/ .el-input > span {
  margin-top: 5px;
}
/deep/ .el-input__inner {
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  border-radius: 0px;
  height: 100%;
}
form > input {
  position: absolute;
  padding: 0.8% 2.5%;
  // margin-left: 700px;
  right: 300px;
  // padding: 1.2% 3.5%;
  font-size: 14px;
  border: 0;
  color: white;
  background-color: #e2231a;
  cursor: pointer;
}
form > input:hover {
  background-color: #c81623;
}
</style>