/* 商品信息 */

<template>
  <div class="primary-info">
        
        <div class="info-title break" v-text="goodsData?goodsData.detailInfo.desc:''"></div>
        <div class="info-price flex "> 
            <span class="flex">   
                <span class="now"v-text="goodsData?goodsData.itemInfo.price:''"></span>  
                <span class="market" v-text="goodsData?goodsData.itemInfo.oldPrice:''"></span>    
                <span class="discount" style="background-color: #FF6699" v-text="goodsData?goodsData.itemInfo.discountDesc:''"></span>
            </span>
        </div>
        <div class="info-other info-other-notopbor" >  
            <span class="item" v-for="item in goodsData?goodsData.columns:[]" v-text="item"></span>  
        </div>
        <div class="services-container">
            <div class="info-services"> 
                <div class="flex service-list">  
                    <span class="service-item" v-for="item in goodsData?goodsData.shopInfo.services:[]"> 
                        <img class="service-icon" :src="item.icon"> 
                        <span class="service-name" v-text="item.name"></span> 
                    </span>  
                    
                </div> 
                <img class="service-arrow"  @click="isModelShow" src="https://s10.mogucdn.com/mlcdn/c45406/170711_701e7hcfi1j9fe76hgd560bj28d87_14x22.png" alt="">
            </div>
            <div class="model-services" :class="[this.modelShow?'show':'']"> 
                <div class="model-services-title">服务说明</div> 
                <div class="model-services-content"> 
                    <ul class="service-list">  
                        <li class="service-item" v-for="item in goodsData?goodsData.shopInfo.services:[]"> 
                            <div> 
                                <img class="service-icon" :src="item.icon"> 
                                <span class="service-name" v-text="item.name"></span> 
                            </div>  
                        </li>  
                        
                    </ul> 
                </div> 
                <div class="model-services-footer" @click="isModelShow" >完成</div>
            </div>
        </div>
        
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            modelShow:false
        }
    },
    methods:{
        isModelShow:function(){
           this.modelShow=(!this.modelShow)
        //    console.log(this.modelShow)
        }
    },
    computed:{
        ...mapState(['goodsData'])
    },
    mounted(){
    }
    
}
</script>

<style scoped lang="scss">
.info-title{
    line-height: .4rem;
    margin-top: .38rem;
    color: #424242;
    font-size: .32rem;
    padding: 0 .2rem;
}

.info-price{
    height: .88rem;
    margin-top: .48rem;
    padding: 0 .2rem;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -moz-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    .flex{
        display: flex;
        .now{
            line-height: .44rem;
            color: #f69;
            font-size: .44rem;
        }
        .market{
            line-height: .28rem;
            margin: .14rem 0 0 .15rem;
            color: #999;
            font-size: .28rem;
            text-decoration: line-through;
        }
        .discount{
            height: .32rem;
            line-height: .32rem;
            margin: 0 0 0 .15rem;
            padding: 0 .12rem;
            color: #fff;
            font-size: .22rem;
            background: #ec312d;
            -webkit-border-radius: .2rem;
            -moz-border-radius: .2rem;
            border-radius: .2rem;
        }
    }
    
}
.primary-info{
    // background: #fff;   
    overflow: hidden; 
    .info-other-notopbor{
    padding-top: 0;
    border-top-width: 0;
    }
    .info-other{
        margin: .4rem .2rem .2rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -moz-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        .item{
            display: block;
            line-height: .26rem;
            color: #999;
            font-size: .26rem;
        }

    }

}
.services-container{
    min-height: 1.24rem;
    .info-services{
        margin: 0 .2rem;
        border-top: 1px solid #eee;
        padding: .34rem 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .service-list{
            flex-wrap: wrap;
            width: 13rem;
            height: .44rem;
            overflow: hidden;
            font-size: .28rem;
            .service-item{
                margin-right: .2rem;
                word-break: keep-all;
                white-space: nowrap;
                line-height: 0.44rem;
                .service-icon{
                    width: .28rem;
                    vertical-align: middle;
                    height: .28rem;
                }
                .service-name{
                    color: #666;
                    vertical-align: middle;
                    font-size: .28rem;
                }
            }
        }
    }
}
.show{
    bottom:6.1rem!important;
}
.model-services{
    width: 7.5rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    z-index: 1000;
    color: #333;
    -webkit-transition: all .3s;
    transition: all .3s;
    -webkit-transform: translate(0,100%);
    transform: translate(0,100%);
    display: block;
    .model-services-title {
        font-size: .32rem;
        text-align: center;
        height: 0.88rem;
        line-height: 0.88rem;
        border-bottom: 1px solid #f2f5f8;
    }
    .model-services-content {
        padding: .4rem; 
        .service-item {
            margin-bottom: 0.6rem;
            font-size: 14px;
                 .service-icon {
                        width: .24rem;
                }


        }
    }
    .model-services-footer {
        color: #fff;
        background: #f69;
        height: .9rem;
        line-height: .9rem;
        font-size: .32rem;
        text-align: center;
    }
}

	
</style>
