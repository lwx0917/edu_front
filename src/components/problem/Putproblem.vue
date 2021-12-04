<template>
  <div class="putproblem">
    <h3>我要提问</h3>
    <div class="edit_container">
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
    <div @click="twClick">立即提问</div>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

export default {
  name: "Putproblem",
  components: {
    quillEditor,
  },
  data() {
    return {
      flag: true,
      map: {
        content: ``,
        userId: 0,
      },
      avatar: "",
      editorOption: {
        placeholder: "请输入内容",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["image"],
          ],
        },
      },
    };
  },
  methods: {
    twClick() {
      if (this.map.content == "") {
        if (
          document.getElementsByClassName("el-message el-message--error")[0]
        ) {
          return;
        }
        this.$message.error("请输入问题!");
        return;
      }
      if (this.flag) {
        this.flag = false;
        this.$post(`/server/discuss/publish`, this.map).then((response) => {
          if (response.success) {
            //成功返回数据
            this.map.content = "";
            this.$message.success("发布成功");
            this.flag = true;
            setTimeout(() => {
              location.reload();
            }, 700);
          } else {
            //返回数据失败
            this.flag = true;
          }
        });
      }
      // this.$post(`/server/discuss/publish`, this.map).then((response) => {
      //   if (response.success) {
      //     //成功返回数据
      //     this.map.content = "";
      //     this.$message.success("发布成功");
      //   } else {
      //     //返回数据失败
      //   }
      // });
    },
    onEditorReady(editor) {},
    onEditorBlur() {},
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
    this.map.userId = localStorage.getItem("id");
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
.putproblem {
  float: right;
  width: 335px;
  margin-top: 30px;
  padding-left: 40px;
}
.putproblem > h3 {
  font-size: 20px;
}
.putproblem > div:nth-child(2) {
  margin-top: 20px;
  margin-bottom: 40px;
}
/deep/ .el-textarea__inner {
  height: 200px;
}
.putproblem > div:nth-child(3) {
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  font-weight: 700;
  color: white;
  background-color: #f01414;
  cursor: pointer;
}
.putproblem > div:nth-child(3):hover {
  background-color: #c20a0a;
}
</style>
