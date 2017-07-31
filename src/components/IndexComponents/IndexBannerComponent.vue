<template>
  <div class="index-banner">
    <div class="swiper-container index-banner-box">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="bann in banner">
					<img :src="bann.image" alt="" />
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
  </div>
</template>

<script>
	
	import axios from "axios"
	
	import jsonp from "jsonp"
export default {
  name: 'index-banner',
  props:["position","showPosition"],
  swiper:null,
  data () {
    return {
     banner:[]
    }
  },
  methods:{
	getBanner(){
	let that = this;
//			axios.get('http://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730%2C59540%2C42287',{
//				datatType: 'jsonp'
//			})
//		.then(function(response){
//		console.log(response.data)
//				this.banner=response.data
//			}.bind(this))
				jsonp("http://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730%2C59540%2C42287", null, function (err, res) {
				  if (res) {
				  console.log(res.data["43542"].list)
				  that.banner=res.data["43542"].list
				  }
				});
		}
  },
  mounted(){
		this.getBanner()
//		this.$options.swiper = new Swiper(".index-banner-box",{
//				loop: true,
//      autoplay: 3000,
//      direction : 'horizontal',
//      autoHeight: true,
//      pagination : '.swiper-pagination',
//      paginationClickable :true,
//      loopAdditionalSlides:0
//	})
  },
  updated(){
  	this.$options.swiper = new Swiper(".index-banner-box",{
				loop: true,
        autoplay: 3000,
        direction : 'horizontal',
        autoHeight: true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        loopAdditionalSlides:0
  	})
  },
  watch:{
  	banner(){
  		var that = this;
  		setTimeout(()=>{
  			that.$options.swiper.update()
  		},0)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.index-banner{
		.index-banner-box{
			.swiper-slide{
				img{
					width:100%;
				}
			}
		}
	}
</style>
