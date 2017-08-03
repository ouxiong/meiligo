
/* 图文详情 */
<template>
  
    <div class="panel-item" id="PanelGraphic">
        <!-- 商品详情-图文详情 -->
        <div class="detail-graphic">  
            <!-- 图文列表 --> 
            <div class="graphic-list"> 
                <div class="desc clearfix"> 
                    <p class="start">
                        <i></i>
                    </p> 
                    <p class="text" v-text="goodsData?goodsData.skuInfo.title:''"></p> 
                    <p class="end"><i></i></p> 
                </div>  
                <div class="pics">  
                    <dl class="pic-box">  
                        <dt class="pic-title">穿着效果</dt>   
                        <dd class="pic-list">  
                            <img class="fadeIn" v-for="item in goodsData?goodsData.detailInfo.detailImage[0].list:[]" :src="item">  
                              
                        </dd> 
                    </dl>  
                </div> 
            </div> 
        </div>
    </div>
    
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapState(['goodsData'])
    },
}
</script>

<style scoped lang="scss">
	
	
</style>
