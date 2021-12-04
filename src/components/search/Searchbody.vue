<template>
  <div class="searchbodyfather">
    <Searchbody1></Searchbody1>
    <Searchbody2></Searchbody2>
  </div>
</template>

<script>
import Searchbody1 from '@/components/search/Searchbody1.vue'
import Searchbody2 from '@/components/search/Searchbody2.vue'

export default {
  name:'Searchbody',
  components:{
    Searchbody1,
    Searchbody2
  }
}
</script>

<style lang="less" scoped>
  .searchbodyfather{
    padding-top: 30px;
    background-color: #f3f5f6;
  }
  .searchbodyfather{
    padding-bottom: 70px;
    *zoom: 1;
  }
  .searchbodyfather:before,
  .searchbodyfather:after{
    content:"";
    display: table;
  }
  .searchbodyfather:after{
    clear: both;
  }
</style>
