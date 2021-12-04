<template>
  <div class="right-container">
    <template v-for="data in datas">
      <div
        :key="data.id"
        style="margin-left: 50px; margin-top: 30px"
        class="share-right-container"
      >
        <div class="share-right-container-desc">
          <div class="share-right-container-cover">
            <img :src="data.cover" alt="none" />
          </div>
          <div
            class="share-right-container-desc-info"
            style="margin-top: 30px; margin-left: 10px"
          >
            <div class="info-name">{{ data.name }}</div>
            <div
              class="info-position"
              style="font-size: 12px; margin-left: 10px; margin-top: 2px"
            >
              {{ data.position }}
            </div>
          </div>
        </div>
        <div class="share-right-container-desc-content">{{ data.content }}</div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Storyright",
  props: ["datas"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.right-container {
  display: flex;
  flex-direction: row;
}
.share-right-container {
  display: flex;
  flex-direction: column;
}

.share-right-container-cover img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.share-right-container-desc {
  display: flex;
  flex-direction: row;
  margin-right: 20px;
}

.share-right-container-desc-info {
  display: flex;
  flex-direction: row;
}

.share-right-container-desc-content {
  margin-top: 10px;
  background-color: #728ca9;
  border-radius: 20px;
  width: 150px;
  padding: 20px 25px;
}
</style>