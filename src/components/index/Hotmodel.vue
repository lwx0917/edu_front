<template>
  <div class="hotmodel">
    <!-- <div>
      <el-image :src="url" :fit="fit" lazy></el-image>
    </div> -->
    <el-skeleton :loading="loading" animated>
      <template slot="template">
        <el-skeleton-item variant="img" style="width: 158px; height: 90px" />
        <div style="margin-left: 50px; width: 890px">
          <el-skeleton-item variant="h2" style="width: 45%" />
          <el-skeleton-item variant="p" style="width: 100%; margin-top: 11px" />
          <el-skeleton-item
            variant="p"
            style="width: 90%; margin-bottom: 10px; margin-top: 7px"
          />
          <div>
            <!-- <div>
              <el-skeleton-item variant="span" style="width: 100px" />
            </div>
            <div style="margin: 0px 30px">
              <el-skeleton-item variant="span" style="width: 100px" />
            </div> -->
            <el-skeleton-item variant="span" style="width: 100px" />
          </div>
        </div>
      </template>
      <template slot="default">
        <el-image :src="cover" :fit="fit"></el-image>
        <div class="content">
          <h2>{{ topic }}</h2>
          <p>
            {{ content1 }}
          </p>
          <div>
            <!-- <div>
              <span class="iconfont icon-dianzan"> 2 赞</span>
            </div>
            <div>
              <span class="iconfont icon-cai"> 2 踩</span>
            </div> -->
            <span>作者 ：{{ name }}</span>
          </div>
        </div>
      </template>
    </el-skeleton>

    <!-- <div>
      <h2>硬核两万字文章带你C++入门</h2>
      <p>
        C++入门文章目录C++入门C++关键字命名空间C++输入&amp;输出缺省参数缺省参数概念缺省参数分类全缺省参数半缺省参数函数重载函数重载概念名字修饰extern"C"引用引用概念引用特性常引用引用的使用场景传参返回值传值、传引用效率比较函数传参传值和传引用的效率比较值和引用作为返回值类型的性能比较引用和指针的区别内联函数概念特性auto关键字(C++11)auto的使用细则auto不能推导的场景基于范围的for循环(C++11)范围for的语法范围for的使用条件指针空值---nullptr(C++1
      </p>
      <div>
        <div>
          <span class="iconfont icon-dianzan"> 2 赞</span>
        </div>
        <div>
          <span class="iconfont icon-cai"> 2 踩</span>
        </div>
        <span>庄伟兴教授</span>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Hotmodel",
  props: {
    cover: {
      default: "",
      type: String,
    },
    topic: {
      default: "",
      type: String,
    },
    content: {
      default: "",
      type: String,
    },
    name: {
      default: "",
      type: String,
    },
  },
  data() {
    return {
      loading: true,
      fit: "fill",
    };
  },
  computed: {
    content1() {
      return this.content.replace(/<.*?\>/g, "");
    },
  },
  methods: {
    // scrollHandle() {
    //   const offset = this.$el.getBoundingClientRect();
    //   const offsetTop = offset.top;
    //   const offsetBottom = offset.bottom;
    //   if (offsetTop <= window.innerHeight && offsetBottom >= 0) {
    //     // 进入可视区域
    //     this.loading = false;
    //   } else {
    //     // 移出可视区域
    //   }
    // },
  },
  created() {
    if (this.cover == "") {
      this.loading = true;
    } else {
      this.loading = false;
    }
  },
  mounted() {
    // window.addEventListener("scroll", this.scrollHandle, true);
  },
};
</script>

<style lang="less" scoped>
.hotmodel {
  width: 1104px;
  height: 86px;
  padding: 24px;
  margin-bottom: 15px;
  cursor: pointer;
}
.hotmodel:hover {
  background-color: #fafafa;
}
.el-image {
  float: left;
  // margin-right: 50px;
}
/deep/ .el-image__inner {
  width: 158px;
  height: 90px;
}

.content {
  float: left;
  width: 900px;
  padding-left: 37px;
}
.content > h2 {
  display: inline-block;
  font-size: 19px;
  margin-top: -8px;
  margin-bottom: 5px;
}
.content > h2:hover {
  text-decoration: underline;
}
.content > div div {
  float: left;
}
.content > div > div:nth-child(2) {
  margin-left: 20px;
  margin-right: 28px;
}
.content > div:nth-child(3) > div:nth-child(1) > span:nth-child(1),
.content > div:nth-child(3) > div:nth-child(2) > span:nth-child(1) {
  margin-right: 5px;
}
.content > p {
  overflow: hidden;
  display: -webkit-box !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 10px;
  text-indent: 2em;
  color: #999;
}

.content > div:nth-child(3) span {
  color: #999;
}
// .content > div:nth-child(3) > div > span:hover {
//   color: #555666;
// }
.content > div:nth-child(3) > span {
  line-height: 24px;
  font-size: 15px;
}
// .content > div:nth-child(3) > span:hover {
//   color: #555666;
// }
</style>
