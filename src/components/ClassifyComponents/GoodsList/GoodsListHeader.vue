<template>
  <div>
      <div class="header">
          <a class="item" href="###">
            <span>流行</span>
          </a>
          <a class="item" href="###">
            <span>热销</span>
          </a>
          <a class="item" @click="isShow" >
            <span>价格</span>
            <div class="show-arrow-wrap " :class="[(this.isPriceShow)?'flip-on':'flip-off']">
                <div class="show-arrow"></div>
            </div>
          </a>
        
      </div>
      <div class="priceBox" v-if="isPriceShow">
          <div class="price-level">
            <div class="price-item">0-30</div> 
            <div class="price-item">30-60</div>
            <div class="price-item">60以上</div> 
            
          </div>
          
          <div class="price-area clearfix">
              <input type="number" class="low-area fl">
              <span class="fl"></span>
              <input type="number" class="high-area fl">
              <a class="cancel-area fl">清空</a>
              <a class="confirm-area fl">确认</a>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  data(){
      return{
        isPriceShow:false

      }
  },
  methods:{
    isShow(){
      this.isPriceShow= (!this.isPriceShow)
    }
  }
}
</script>

<style lang="scss">
	
  .header{
    width: 100%;
    height: 0.85rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    position:fixed;
    z-index: 999;
    left: 0;
    top: 0;
    .item{
      flex: 1;
      line-height: 0.85rem;
      text-align: center;
      font-size: 0.3rem;
      .show-arrow-wrap{
            
        right: 0.18rem;
        position: absolute;
        top: 0.15rem;
        display: inline-block;
        height: 0.5rem;
        line-height: 0.5rem;
        transition: all 0.5s ease;
        -webkit-transition: all 0.5s ease;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d;
        .show-arrow{
          display: inline-block;
          width: 0.2rem;
          height: 0.2rem;
          margin: 0.08rem 0.1rem 0.08rem 0.1rem;
          border-left: 1px solid #c3c3c3;
          border-bottom: 1px solid #c3c3c3;
          transform: rotate(-45deg);
          -webkit-transform: rotate(-45deg);
        }
    
      }
    }
  }

  .priceBox{
    width: 100%;
    height: 2.2rem;
    background: #fff;
    position: fixed;
    left: 0;
    top: 42px;
    z-index: 999;
    .price-level{
      width: 100%;
      padding: 1% 0 4% 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .price-item{
        width: 30%;
        text-align: center;
        font-size: 0.28rem;
        height: 0.6rem;
        line-height: 0.6rem;
        background-color: #f3f3f3;
        margin: 2% 0 0 2%;
      }
      
      
    }
    .price-area{
      padding: 0 2%;
      height: 1rem;
      font-size: 0.28rem;
      span{
        display: inline-block;
        width: 0.2rem;
        height: 0;
        border-top: 1px solid #cbcbcb;
        margin: 0.5rem 0 0 0.2rem;
      }
      .low-area,.high-area{
        width: 1.6rem;
        height: 0.6rem;
        line-height: 0.6rem;
        margin: 0.2rem 0 0 0.2rem;
        border-radius: 2px;
        border: 1px solid #e5e5e5;
        overflow: hidden;
        padding-left: 0.1rem;
        padding-right: 0.1rem;
        font-size: .28rem;
        outline:none;
      }
      .f{
        display: inline-block;
        width: 0.2rem;
        height: 0;
        border-top: 1px solid #cbcbcb;
        margin: 0.5rem 0 0 0.2rem;
      }
      .cancel-area{
        display:inline-block;
        height: 0.6rem;
        line-height: 0.6rem;
        margin-top: 0.2rem;
        text-align: center;
        width: 1.26rem;
        margin-left: 0.1rem;
        color: #ff5b76;
        border: 1px solid #ff5b76;
        border-radius: 2px;
      }
      .confirm-area{
          display:inline-block;
          height: 0.6rem;
          line-height: 0.6rem;
          margin-top: 0.2rem;
          text-align: center;
          width: 1.26rem;
          margin-left: 0.1rem;
          background-color: #ff5b76;
          color: white;
          border-radius: 2px;
      }
      
    }
  }

  .flip-on{
    transform: rotate(180deg);
  }
</style>
