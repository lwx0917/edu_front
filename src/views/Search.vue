<template>
  <div class="searchfather">
    <Searchhead></Searchhead>
    <Searchbody></Searchbody>
    <Footer></Footer>
  </div>
    
</template>

<script>
import Searchhead from '@/components/search/Searchhead.vue'
import Searchbody from '@/components/search/Searchbody.vue'
import Footer from '@/components/index/Footer.vue'

export default {
  name:'Search',
  components:{
    Searchhead,
    Searchbody,
    Footer
  }
}
</script>

<style lang="less" scoped>
  .searchfather .footer{
    margin-top: 0px;
  }
</style>
