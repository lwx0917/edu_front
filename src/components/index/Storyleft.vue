<template>
  <div class="left-container">
    <template v-for="data in datas">
      <div :key="data.id" style="margin-top: 30px" class="share-left-container">
        <div class="share-left-container-cover">
          <img :src="data.cover" alt="none" />
        </div>
        <div class="share-left-container-desc">
          <div class="share-left-container-desc-info">
            <div class="info-name">{{ data.name }}</div>
            <div
              class="info-position"
              style="font-size: 12px; margin-left: 10px; margin-top: 5px"
            >
              {{ data.position }}
            </div>
          </div>
          <div class="share-left-container-desc-content">
            {{ data.content }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Storyleft",
  props: ["datas"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.share-left-container {
  display: flex;
  flex-direction: row;
  width: 8 0%;
  position: relative;
  left: 50px;
}

.share-left-container-cover img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.share-left-container-desc {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}

.share-left-container-desc-info {
  display: flex;
  flex-direction: row;
}

.share-left-container-desc-content {
  margin-top: 10px;
  background-color: #728ca9;
  border-radius: 20px;
  width: 400px;
  padding: 15px 25px;
}
</style>