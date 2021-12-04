<template>
  <div class="pingjiamodel">
    <h3>我要评价</h3>
    <div class="edit_container">
      <!--  新增时输入 -->
      <quill-editor
        v-model="map.content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @change="onEditorChange($event)"
      >
      </quill-editor>
    </div>
    <!-- <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="map.content"
    ></el-input> -->
    <div @click="pjClick">立即评价</div>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

export default {
  name: "Pingjiamodel",
  components: {
    quillEditor,
  },
  data() {
    return {
      flag: true,
      map: {
        avatar: "",
        content: ``,
        courseId: this.$route.params.id,
        nickName: "",
        teacherId: "",
        userId: localStorage.getItem("id"),
      },
      editorOption: {
        placeholder: "请输入内容",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], //加粗，斜体，下划线，删除线
            [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
            [{ align: [] }], //对齐方式
            ["image"], //上传图片、上传视频
            // ["blockquote", "code-block"], //引用，代码块
            // [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
            // [{ list: "ordered" }, { list: "bullet" }], //列表
            // [{ script: "sub" }, { script: "super" }], // 上下标
            // [{ indent: "-1" }, { indent: "+1" }], // 缩进
            // [{ direction: "rtl" }], // 文本方向
            // [{ size: ["small", false, "large", "huge"] }], // 字体大小
            // [{ header: [1, 2, 3, 4, 5, 6, false] }], //几级标题
            // [{ font: [] }], //字体
            // ["clean"], //清除字体样式
          ],
        },
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
        this.$message.error("请输入评论内容!");
        return;
      }
      // this.$post(`/server/comment/addComment`, {
      //   map: JSON.stringify(this.map),
      // }).then((response) => {
      //   if (response.success) {
      //     //成功返回数据
      //     this.map.content = "";
      //     this.$message.success("发布评论成功");
      //   } else {
      //     //返回数据失败
      //   }
      // });

      if (this.flag) {
        this.flag = false;
        this.$post(`/server/comment/addComment`, {
          map: JSON.stringify(this.map),
        }).then((response) => {
          if (response.success) {
            //成功返回数据
            this.map.content = "";
            this.$message.success("发布评论成功");
            this.flag = true;
          } else {
            //返回数据失败
            this.flag = true;
          }
        });
      }
    },
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {
      var text = document.getElementsByClassName("ql-editor")[0];
      text.style.borderColor = "red";
      // console.log(text);
    }, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件
    // 转码
    escapeStringHTML(str) {
      str = str.replace(/&lt;/g, "<");
      str = str.replace(/&gt;/g, ">");
      return str;
    },
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
  created() {
    this.$fetch(`/server/user/getUserInfo/${this.map.userId}`).then(
      (response) => {
        this.map.avatar = response.data.user.salt;
        this.map.nickName = response.data.user.nickName;
      }
    );
  },
};
</script>

<style lang="less" scoped>
/deep/ .ql-snow {
  width: 335px;
}
/deep/ .ql-container {
  width: 335px;
  height: 210px;
}
.pingjiamodel {
  float: right;
  width: 335px;
  margin-top: 30px;
  padding-left: 40px;
}
.pingjiamodel > h3 {
  font-size: 20px;
}
.pingjiamodel > div:nth-child(2) {
  margin-top: 20px;
  margin-bottom: 40px;
}
/deep/ .el-textarea__inner {
  height: 200px;
}
.pingjiamodel > div:nth-child(3) {
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  font-weight: 700;
  color: white;
  background-color: #f01414;
  cursor: pointer;
}
.pingjiamodel > div:nth-child(3):hover {
  background-color: #c20a0a;
}
</style>
