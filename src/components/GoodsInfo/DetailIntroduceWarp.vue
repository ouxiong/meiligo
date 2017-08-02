<template>
  <div class="intrWarp" >
        <div class="tabpanel-top"></div>
        <div class="tabpanel-occupying" > 
            <!-- 标签 --> 
            <!--吸顶的时候加tabpanel-fixed  -->
            <nav class="tabpanel-tabs center tabpanel-fixed "> 
                <li class="tab-item"> 
                    <span>图文详情</span> 
                    <i></i> 
                </li> 
                <li class="tab-item"> 
                    <span>商品参数</span> 
                    <i></i> 
                </li> 
                <li class="tab-item"> 
                    <span>评价(101)</span> 
                    <i></i> 
                </li> 
                <li class="tab-item active"> 
                    <span class="shop-hot">热卖推荐</span> 
                    <i></i> 
                </li> 
            </nav> 
        </div>
        <div class="tabpanel-panels">
            <!-- 图文详情 -->
            <detail-page-img></detail-page-img>
        </div>
        
  </div>
</template>

<script>
import DetailPageImg from './DetailPageImg'

export default {
    data(){
        return{

        }
    },
    components:{
        DetailPageImg,
    }
}
</script>

<style lang="scss">
	.intrWarp{
        .tabpanel-top{
             margin-left: -0.2rem;
            height: .1rem;
            border-top: 1px solid #f2f5f8;
            background: #f2f5f8;
        }
        .tabpanel-occupying {
            margin-top: .2rem;
            height: 0.92rem;
            .tabpanel-tabs {
                border-bottom: 1px solid #eee;
                list-style-type: none;
                background-color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                .tab-item {
                    position: relative;
                    width: 1.875rem;
                    padding: .3rem 0;
                    color: #333;
                    span {
                        display: block;
                        line-height: .3rem;
                        border-right: 1px solid #e5e5e5;
                        color: #333;
                        font-size: .3rem;
                        text-align: center;
                    }
                    i {
                        position: absolute;
                        bottom: -.02rem;
                        left: 50%;
                        display: none;
                        margin-left: -.25rem;
                        width: .5rem;
                        height: .04rem;
                        min-height: 1px;
                        background: #333;
                        font-size: 0;
                    }
                }
            }
            .center {
                -webkit-box-pack: center;
                -moz-box-pack: center;
                -o-box-pack: center;
                -ms-box-pack: center;
                box-pack: center;
            }
            .tabpanel-fixed {
                position: fixed;
                top: 0;
                left: 50%;
                z-index: 8;
                width: 7.5rem;
                margin-left: -3.75rem;
            }

        }
        .tabpanel-panels{
            .panel-item {
                overflow: hidden;
                background-color: #fff;
                .detail-graphic {
                    margin-top: .4rem;
                    .desc {
                        padding: 0 .3rem;
                        .start,.end {
                            width: 1.8rem;
                            height: 1px;
                            background: #a3a3a5;
                            position: relative;
                            float: left;
                            i {
                                display: inline-block;
                                width: .1rem;
                                height: .1rem;
                                background: #000;
                                border-radius: .1rem;
                                position: absolute;
                                top: -.05rem;
                                font-style:normal;
                            }
                        }
                        .text {
                            padding: .3rem 0;
                            color: #727272;
                            font-size: .28rem;
                            line-height: .38rem;
                        }
                        .end{
                            float: right;
                        }
                    }
                    .pics {
                        margin-top: .15rem;
                        .pic-title {
                            margin-top: .15rem;
                            height: .5rem;
                            line-height: .5rem;
                            text-indent: .3rem;
                            color: #303030;
                            font-weight: 400;
                            font-size: .3rem;
                        }
                        .pic-list {
                            min-width: 3.2rem;
                            max-width: 7.5rem;
                            margin: 0 auto;
                            img {
                                width: 100%;
                                display: block;
                                border: none;
                            }
                            .fadeIn {
                                -webkit-animation: fadeIn .8s ease both;
                                animation: fadeIn .8s ease both;
                            }
                        }
                    }
                }
            }
        }
    }
	
</style>
