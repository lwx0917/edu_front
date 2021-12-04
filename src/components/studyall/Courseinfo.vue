<template>
  <div class="courseinfo">
    <img :src="cover" />
    <div class="info">
      <h3>{{ title }}</h3>
      <div>
        <span>共{{ info.lessonNum }}节</span>
        <span>|</span>
        <span>学习人数:{{ info.viewCount }}</span>
      </div>
      <div>
        <span>{{ info.teacherName }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Courseinfo",
  data() {
    return {
      info: {},
    };
  },
  props: ["cover", "courseId", "title"],
  created() {
    this.$fetch(`/server/course/getCourseById/${this.courseId}`).then(
      (response) => {
        if (response.success) {
          //成功返回数据
          this.info = response.data.course;
        } else {
          //返回数据失败
        }
      }
    );
  },
};
</script>

<style lang="less" scoped>
.courseinfo {
  padding: 24px;
  cursor: pointer;
  *zoom: 1;
}
.courseinfo:before,
.courseinfo:after {
  content: "";
  display: table;
}
.courseinfo:after {
  clear: both;
}
.courseinfo:hover {
  background-color: #fafafa;
}
img {
  float: left;
  width: 200px;
  height: 120px;
}
.info {
  float: left;
  width: 505px;
  margin-left: 20px;
  margin-top: 15px;
}
h3 {
  font-size: 18px;
  overflow: hidden;
  display: -webkit-box !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.info > div:nth-child(2) {
  margin: 10px 0;
  font-size: 13px;
  color: #999;
}
.info > div:nth-child(2) > span:nth-child(2) {
  margin: 0 15px;
}
.info > div:nth-child(3) {
  font-size: 15px;
}
</style>
