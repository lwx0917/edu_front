<template>
  <div class="step">
    <ul class="fixNav">
      <li v-for="data in datas" :key="data.id" @click="navClick(data.stage)">
        阶段{{ data.stage }}
      </li>
    </ul>
    <Stepcontent
      v-for="data in datas"
      :key="data.id"
      :id="data.id"
      :title="data.title"
      :stage="data.stage"
      :description="data.description"
      :lists="data.lists"
      :lessonNum="data.lists.length"
    ></Stepcontent>
  </div>
</template>

<script>
import Stepcontent from "@/components/studyall/Stepcontent.vue";

export default {
  name: "Step",
  components: {
    Stepcontent,
  },
  props: ["datas"],
  data() {
    return {
      child: [],
      content: [],
      ulTag: "",
      flag: true,
    };
  },
  methods: {
    clear(id) {
      for (let i = 0; i < this.child.length; i++) {
        this.child[i].style.color = "#717a84";
        this.child[i].style.backgroundColor = "#f3f5f6";
      }
      this.child[id].style.color = "white";
      this.child[id].style.backgroundColor = "#9448eb";
    },
    navClick(id) {
      id = id - 1;
      this.clear(id);
      this.content[id].scrollIntoView();
    },
    scrollHandle() {
      if (this.flag) {
        setTimeout(() => {
          var stepTop;
          try {
            stepTop = document
              .getElementsByClassName("step")[0]
              .getBoundingClientRect().top;
          } catch (e) {
            return;
          }
          if (stepTop <= -40) {
            if (this.ulTag.style.position != "fixed") {
              this.ulTag.style.position = "fixed";
              this.ulTag.style.top = "5%";
              this.ulTag.style.transform = "translateY(-50%)%";
            }
          } else {
            if (this.ulTag.style.position != "") {
              this.ulTag.style.position = "";
            }
          }
          for (let i = this.content.length - 1; i >= 0; i--) {
            var tmp;
            try {
              tmp = this.content[i].getBoundingClientRect().top;
            } catch (e) {
              return;
            }
            // let tmp = this.content[i].getBoundingClientRect().top;
            if (tmp <= 100) {
              this.clear(i);
              break;
            }
          }
          this.flag = true;
        }, 300);
      }
      this.flag = false;
    },
  },
  mounted() {
    this.ulTag = document.getElementsByClassName("fixNav")[0];
    this.child = document.getElementsByTagName("li");
    this.content = document.getElementsByClassName("stepcontent");
    window.addEventListener("scroll", this.scrollHandle, true);
  },
};
</script>

<style lang="less" scoped>
.back {
  color: white;
  background-color: #9448eb;
}
.step .stepcontent:last-child {
  margin-bottom: 10px;
}
.step {
  overflow: hidden;
  margin: 0 auto;
  width: 919px;
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 50px;
  padding-bottom: 34px;
  background-color: white;
}
.fixNav {
  float: left;
}
.fixNav li {
  width: 84px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 4px;
  margin-bottom: 20px;
  color: #717a84;
  background-color: #f3f5f6;
  cursor: pointer;
}
.fixNav > li:first-child {
  color: white;
  background-color: #9448eb;
}
.fixNav > li:hover {
  color: white;
  background-color: #9448eb;
}
</style>
