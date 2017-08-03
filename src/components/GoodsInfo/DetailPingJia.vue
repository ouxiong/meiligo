
/* 购买评价 */
<template>
  <div >
    <div class="panel-item" id="PanelRates">
      <!-- 商品详情-评价列表 -->
      <div class="detail-wrap detail-rates" id="DetailRates">  
        <!-- 顶部 --> 
        <div class="rates-top"></div>   
        <!-- 标题 --> 
        <div class="rates-head plr30">  
          <a class="title" href="http://m.meilishuo.com/rateList/index/1kbicaa">
            购买评价 
            <span class="more">更多<i class="arrow"></i></span>
          </a>  
        </div>     
        <!-- 列表 --> 
        <div class="rates-list plr30">  
          <div class="rate-item" v-for="item in goodsData?goodsData.rate.list:[] ">  
            <!-- 用户信息 --> 
            <div class="rate-user"> 
              <span class="user-info"> 
                <img class="avatar" :src="item.user.avatar"> 
                <span class="name" v-text="item.user.uname"></span> 
              </span> 
            </div>   
            <!-- 评价内容 --> 
            <div class="rate-cont" v-text="item.content"></div>   
            <!-- 属性 --> 
            <div class="rate-attr"> 
              <span class="time">2017-06-30</span> 
              <span class="sku">颜色:白底黄花 尺码:均码 </span> 
            </div>  <!-- 图片列表 --> 
            <div class="rate-imgs show-img">  
              <a href="http://m.meilishuo.com/rateList/index/1kbicaa" class="item"> 
                <img src="http://s3.mogucdn.com/mlcdn/c45406/170630_6dh309gi50c6jdih9003c6abgj83g_720x720.jpg_100x100.jpg"> 
              </a>  
              <a href="http://m.meilishuo.com/rateList/index/1kbicaa" class="item"> 
                <img src="http://s3.mogucdn.com/mlcdn/c45406/170630_6gbd9d8h6bkdlbi42d46i3la6h8lg_720x720.jpg_100x100.jpg"> 
              </a>  
            </div>    
          </div>  
        </div>
      </div>
      <!-- 大图 -->
      <div class="big-imgs-wrap" ></div>
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
	.detail-wrap {
    overflow: hidden;
    max-width: 7.5rem;
    margin: 0 auto;
    background: #fff;
    .rates-top {
        height: .1rem;
        background: #f2f5f8;
    }
    .plr30 {
        padding-left: .3rem;
        padding-right: .3rem;
        .title {
        padding: .4rem 0 .3rem;
        color: #333;
        font-size: .3rem;
        display: block;
        line-height: .3rem;
        .more {
            float: right;
            color: #666;
            font-size: .30rem;
            .arrow {
                margin-right: .3rem;
                border-top: 1px solid #999;
                border-left: 1px solid #999;
                width: .17rem;
                height: .17rem;
                background-color: transparent;
                -webkit-transform: rotate(135deg);
                display: inline-block;
                margin-left: .05rem;
                fonf-style:none;
            }
        }
        }
    }
    .rates-list {
        overflow: hidden;
    }
    .rate-item {
        border-top: 1px solid #eee;
        padding-top: .3rem;
        margin-bottom: .3rem;
        .rate-user .user-info {
            display: inline-block;
            line-height: .82rem;
            .avatar {
                width: .82rem;
                height: .82rem;
                vertical-align: middle;
                border: 1px solid #efefef;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
            }
            .name {
                margin-left: .2rem;
                color: #424242;
                font-size: .3rem;
                vertical-align: middle;
            }
        }
        .rate-cont {
            line-height: .34rem;
            margin-top: .1rem;
            color: #727272;
            font-size: .28rem;
        }
        .rate-attr {
            line-height: .24rem;
            margin-top: .15rem;
            .time,.sku {
                color: #999;
                font-size: .24rem;
            }
            .sku {
                margin-left: .15rem;
            }
        }
        .rate-imgs {
            overflow: hidden;
            margin-top: .25rem;
            -font-size: 0;
            .item {
                width: 2rem;
                display: inline-block;
                margin-bottom: .05rem;
                margin-right: .05rem;
            }
        }
    }
  }
	
</style>
