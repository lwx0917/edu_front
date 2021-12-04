<template>
  <div class="footer">
    <div>
        <span></span>
    </div>
    <p>Copyright © 2021 Xinke. All Rights Reserved.</p>
    <div>
        <span>新课网 版权所有</span>|
        <a href="javascript:;">新课网服务协议</a>|
        <a href="javascript:;">隐私政策</a>|
        <a href="javascript:;">站点地图</a>|
        <a href="javascript:;">侵权投诉</a>|
        <a href="javascript:;">联系客服</a>|
        <a href="javascript:;">帮助</a>|
        <a href="javascript:;">涨知识</a>
    </div>
  </div>
</template>

<script>
export default {
  name:'Footer'
}
</script>

<style lang="less" scoped>
    .footer{
        height: 190px;
        margin-top: 80px;
        color: #777;
        border-top: 1px solid transparent;
        background-color: #444546;
        cursor: default;
    }
    .footer>div,
    .footer>p{
        text-align: center;
    }
    .footer>div:nth-child(1){
        margin-top: 37px;
    }
    .footer>div:nth-child(1) span{
        font-family: 'icomoon';
        font-size: 30px;
    }

    .footer>p{
        margin-top: 5px;
        margin-bottom: 15px;
    }
    
    .footer>div:nth-child(3) span{
        margin-right: 6px;
        color: #777;
    }
    .footer>div:nth-child(3) a{
        margin-left: 2px;
        margin-right: 6px;
        color: #777;
    }
</style>
