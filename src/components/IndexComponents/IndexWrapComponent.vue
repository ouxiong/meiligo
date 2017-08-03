<template>
  <div class="index-wrap">
  	<div class="swiper-container index-wrap-box">
			<div class="swiper-wrapper index-wrap-box-uls">
				<div class="swiper-slide index-wrap-box-lis" v-for="(_wrap,$index) in wrap">
					<router-link :to="toRouter[$index]" class="link">
		  			<div>
		  				<img class="J_dynamic_img" alt="" :src="_wrap.image">
		  			</div>
		  			<p class="img-title" v-text="_wrap.title"></p>
		  		</router-link>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
	
	import axios from "axios"
	
	import jsonp from "jsonp"
export default {
  name: 'index-wrap',
  swiper:null,
  data () {
    return {
     wrap:[],
     toRouter:["allgroupbooking","hotsummer","startalmirah","fullset","shangxin"]
    }
  },
  methods:{
		getWrap(){
			let that = this;
			jsonp("http://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730%2C59540%2C42287", null, function (err, res) {
				  if (res) {
				  that.wrap=res.data["13730"].list
				  }
				});
		}
  },
  mounted(){
		this.getWrap()
  },
  updated(){
  	this.$options.swiper = new Swiper(".index-wrap-box",{
        freeMode:true,
	  		slidesPerView:"auto",
	  		freeModeSticky:true
  	})
  },
  watch:{
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.index-wrap{
	    padding-bottom: 0.2rem;
    	background: #eeeeee;
    	.index-wrap-box{
    		/*overflow: scroll;*/
    		padding: .2rem;
		    padding-left: 0.1rem;
		    padding-right: 0.1rem;
		    background-color: #fff;
		    .index-wrap-box-uls{
		    	/*overflow: hidden;*/
			    white-space: nowrap;
			    .index-wrap-box-lis{
			    	width:1.6rem;
			    	display: inline-block;
				    margin-right: 0.2rem;
				    background: url("http://d01.res.meilishuo.net/pic/_o/52/5b/8402746de5243749bc11ff6dfefb_120_120.c5.png") no-repeat 50% 45%;
				    background-size: 80%;
				    .link{
				    	text-align: center;
				    	-webkit-tap-highlight-color:rgba(0,0,0,0);
				    	>div{
				    		height:1.6rem;
				    		overflow: hidden;
				    		img{
				    			width:100%;
				    		}
				    	}
				    	.img-title{
		    		    text-align: center;
						    font-size: 0.28rem;
						    white-space: nowrap;
						    overflow: hidden;
						    text-overflow: ellipsis;
						    padding-top: 0.12rem;
						    line-height: 0.45rem;
				    	}
				    }
			    }
		    }
    	}
	}
</style>
