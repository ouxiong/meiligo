<template>
  <div >
      <div class="detail-botton">
            <div class="detail-item">
                <div class="item">
                  <i class="iconfont icon-kefu"></i>
                  <span>客服</span>
                </div>
                <div class="item">
                  <i class="iconfont icon-dianpu"></i>
                  <span >店铺</span>
                </div>
                <div class="item">
                  <i class="iconfont icon-shoucang"></i>
                  <span>收藏</span>
                </div>
            </div>
            <div class="detail-buy">
                <div class="buy-item">加入购物车</div>
                <div class="buy-item pink">立即购买</div>
            </div>
      </div>
      <div class="add-cart">
          <div class="modal"></div>
          <add-cart-content></add-cart-content>
          
      </div>
  </div>
</template>

<script>
import AddCartContent from './AddCartContent'

export default {
    data(){
        return{

        }
    },
    components:{
      AddCartContent
    }
}
</script>

<style scoped lang="scss">
	.detail-botton{
    width: 100%;
    height: 1.16rem;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    .detail-item,.detail-buy{
      display: flex;
      flex: 1;
    }
    .detail-item{
      -background: red;
      display: flex;

      .item{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content:space-around;
        align-items: center;
        .iconfont{
          display: block;
          text-align: center;
          width: 1.25rem;
          font-size: 22px;
          color: #999;
        }
        span{
          -padding-top: 2px;
          font-size: 12px;
          color: #999;
        }
      }
    }
    .detail-buy{
      background: #ffe817;
      display: flex;
      .buy-item{
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        font-size: 14px;
      }
      .pink{
        background: #f69;
        color: #fff;
      }
    }
  }

</style>
