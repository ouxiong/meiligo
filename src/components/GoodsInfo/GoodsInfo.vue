<template>
  <div id="goods-info" >
    <detail-top-img></detail-top-img>
    <detail-infomation></detail-infomation>
    <detail-shop></detail-shop>
    <detail-introduce-warp></detail-introduce-warp>
    <detail-can-shu></detail-can-shu>
    <detail-ping-jia></detail-ping-jia>
    <detail-tui-jian></detail-tui-jian>
  </div>
</template>

<script>
import DetailTopImg from './DetailTopImg'
import DetailInfomation from './DetailInfomation'
import DetailShop from './DetailShop'
import DetailIntroduceWarp from './DetailIntroduceWarp'
import DetailCanShu from './DetailCanShu'
import DetailPingJia from './DetailPingJia'
import DetailTuiJian from './DetailTuiJian'
export default {
    data(){
        return{

        }
    },
    components:{
        DetailTopImg,
        DetailInfomation,
        DetailShop,
        DetailIntroduceWarp,
        DetailCanShu,
        DetailPingJia,
        DetailTuiJian
    }
}
</script>

<style scoped lang="scss">
    #goods-info{
        background: #fff;
    }
	
</style>
