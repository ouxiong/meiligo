// 顶部轮播


<template>
  <div >
    <div class="swiper-container detail-banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in 5">
                  <img class="swiper-img" src="http://s3.mogucdn.com/mlcdn/55cf19/170504_242646c27114ffkf1i1gc3472gi41_640x960.jpg_640x960.v1cOK.81.jpg">
            </div>
            
        </div>
         <!--  <div class="swiper-page ">
              <span id="SwiperPageNum">{{imgIndex}}</span>
              <span>/</span>
              5
          </div> -->
          <div class="swiper-pagination swiper-page"></div>
    </div>
   
  </div>
</template>

<script>

export default {
  swiper:null,
  data(){
    return{
        imgIndex:1
    }
  },
  mounted(){
    //   this.$options.swiper = new Swiper(".detail-banner",{
    //     slidesPerView: 'auto',
    //     paginationClickable: true,
    //     spaceBetween: 30,
    //     updateOnImagesReady:true,
    //     onSlideChangeStart: function(swiper){
    //       // console.log(swiper.activeIndex+1) 
    //       this.imgIndex=swiper.activeIndex+1;
    //     }.bind(this),
       
    //     onImagesReady: function(swiper){
    //         // console.log(swiper.activeIndex+1)
    //         this.imgIndex=swiper.activeIndex+1;
    //     }.bind(this),
    //     onTouchEnd: function(swiper){
    //         if(this.imgIndex==4){
    //           // alert(111)
    //           this.imgIndex=5;
    //         }
    //     }.bind(this)

        
    // })
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
         slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 30,
    });
  },
  updated(){
  	
  },
  
}
</script>

<style scoped lang="scss">
 .swiper-container {
        width: 100%;
        height: 100%;
        position: relative;
        .swiper-wrapper{
          width: 100%;
        }
        
    }
    .swiper-slide {
      width: 5.4rem;
      height: 8.7rem;
      padding: 0 1px;
        .swiper-img{
          width: 5.8rem;
          height: 8.7rem;
        }
    }
    .swiper-page{
      
      z-index: 2;
      height: .4rem;
      line-height: .4rem;
      padding: 0 .2rem;
      color: #fff;
      font-size: .48rem;
      -webkit-border-radius: .2rem;
      -moz-border-radius: .2rem;
      border-radius: .2rem;
      background: rgba(0,0,0,.3);
      font-size: 12px;
      width: 1rem;
      position: absolute;
      right: .6rem!important;
      bottom: .4rem!important;

    }
    

   
	
</style>
