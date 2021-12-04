<template>
  <div class="teachermodel">
    <img :src="avatar" />
    <div class="info">
      <div class="name">
        <h5>{{name}}</h5>
        <p>{{career}}</p>
      </div>
      <div class="introduce">
        <h5>简&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;介：</h5>
        <p>{{intro}}</p>
      </div>
      <div class="chara">
        <h5>特&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点：</h5>
        <div>技术大牛</div>
        <div>视频粉丝遍布全国</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Teachermodel",
  props:{
    name:{
      default:'',
      type:String
    },
    intro:{
      default:'',
      type:String
    },
    career:{
      default:'',
      type:String
    },
    avatar:{
      default:'',
      type:String
    }
  },
};
</script>

<style lang="less" scoped>
.teachermodel {
  display: flex;
  width: 76%;
  margin: 0 auto;
  margin-bottom: 30px;
  padding: 30px;
  background-color: white;
}
img {
  height: 240px;
}
.info {
  padding-left: 50px;
}
.name,
.introduce,
.chara {
  display: flex;
}
.name {
  margin-top: 5px;
  margin-bottom: 15px;
}
.name > h5 {
  width: 60px;
  font-size: 20px;
}
.name > p {
  font-size: 16px;
  font-weight: 700;
  margin-left: 33px;
  margin-top: 3px;
}

.introduce {
  height: 140px;
}
.introduce > h5 {
  font-size: 18px;
}
.introduce > p {
  font-size: 16px;
  line-height: 28px;
  margin-left: 8px;
  overflow: hidden;
  display: -webkit-box !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}

.chara {
  margin-top: 15px;
}
.chara > h5 {
  font-size: 18px;
}
.chara > div {
  font-size: 16px;
  margin-top: -1px;
  margin-right: 16px;
  border-radius: 20px;
  padding: 3px 20px;
  color: white;
  background-color: #157664;
}
.chara > div:last-child {
  margin-right: 0px;
}
.chara > div:nth-child(2) {
  margin-left: 10px;
}
</style>
