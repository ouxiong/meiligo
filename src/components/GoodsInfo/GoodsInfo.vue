<template>
  <div id="goods-info" >
    <detail-top-img></detail-top-img>
    <detail-infomation></detail-infomation>
    <detail-shop></detail-shop>
    <detail-introduce-warp></detail-introduce-warp>
    <detail-botton-tab></detail-botton-tab>
  </div>
</template>

<script>
import {mapState} from 'vuex'


import jsonp from "jsonp"
import DetailTopImg from './DetailTopImg'
import DetailInfomation from './DetailInfomation'
import DetailShop from './DetailShop'
import DetailIntroduceWarp from './DetailIntroduceWarp'
import DetailBottonTab from './DetailBottonTab'
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
        DetailBottonTab
        
    },
    
    methods:{
        getGoodData(){
        var that = this;
        this.$http.get("/static/json/goodsInfo0.json").then(result => {
            // console.log(result.body.result)
            that.$store.commit("getGoodsData",result.body.result)
        })
	}

    },
    mounted(){
        //调用
        this.getGoodData()
    }
}
</script>

<style scoped lang="scss">
    #goods-info{
        background: #fff;
    }
	
</style>
