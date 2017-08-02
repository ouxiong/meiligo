
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
                    <p class="text">时尚中长款喇叭袖防晒衣女沙滩薄款雪纺开叉上衣开衫披肩外套</p> 
                    <p class="end"><i></i></p> 
                </div>  
                <div class="pics">  
                    <dl class="pic-box">  
                        <dt class="pic-title">穿着效果</dt>   
                        <dd class="pic-list">  
                            <img class="fadeIn" v-for="item in 30" src="http://s3.mogucdn.com/mlcdn/55cf19/170504_2ajjbkcaa4gej5hfed65lh85dedg7_800x601.jpg_750x999.jpg">  
                            <img class="fadeIn" src="http://s3.mogucdn.com/p2/170317/77101615_86e9f0elcl86499l16jf26aallg14_1125x380.jpg_750x999.jpg">
                              
                        </dd> 
                    </dl>  
                </div> 
            </div> 
        </div>
    </div>
    
</template>

<script>

export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped lang="scss">
	
	
</style>
