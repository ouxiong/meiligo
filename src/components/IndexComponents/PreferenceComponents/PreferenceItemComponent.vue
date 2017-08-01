<template>
  <div class="preference-item">
    <div class="swiper-container preference-item-box">
			<div class="swiper-wrapper preference-item-box-uls">
				<div class="swiper-slide preference-item-lis" v-for="pfce in preference">
					<a href="" class="goods_item">
						<div class="goods_img">
							<img :src="pfce.image" :alt="pfce.title"/>
						</div>
						<div class="goods_info">
							<p>{{'￥'+pfce.discountPrice}}<del v-text="pfce.price"></del></p>
							<button>立即抢购</button>
						</div>
					</a>
				</div>
				<div class="swiper-slide goods_chakan_box">
					<a href="javascript:void(0);" class="goods_chakan"></a>
				</div>
			</div>
		</div>
		<fill-gray></fill-gray>
  </div>
</template>

<script>
	
	import  {mapState,mapGetters,mapActions} from "vuex"
	
	import jsonp from "jsonp"
	//引入子组件
	import FillGray from "./../../FillGrayComponent"
	
export default {
  name: 'preference-item',
  swiper:null,
  data () {
    return {
      preference:[]
    }
  },
  computed:{
  	
  },
  methods:{
  	getPreference(){
			let that = this;
			jsonp("http://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730%2C59540%2C42287", null, function (err, res) {
				  if (res) {
				  	that.preference=res.data["42287"].list
				  }
				});
		}
  },
  updated(){
  	this.$options.swiper = new Swiper(".preference-item-box",{
        freeMode:true,
	  		slidesPerView:"auto",
	  		freeModeSticky:true
  	})
  },
  mounted(){
  	this.getPreference()
  },
  components:{
  	FillGray
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.preference-item{
		width:100%;
		position: relative;
		
		.preference-item-box{
			.preference-item-box-uls{
				box-sizing: border-box;
		    background-color: #fff;
		    padding: .2rem 0 0 .2rem;
		    min-height: 4.3rem;
		    font-size: 0;
		    white-space: nowrap;
		    margin-bottom: 0.3rem;
		    vertical-align: top;
		    
		    .preference-item-lis{
		    	display: inline-block;
			    width: 2rem;
			    margin-right: .18rem;
			    .goods_img{
			    	width: 2rem;
				    height: 2.8rem;
				    position: relative;
				    background-size: 1rem;
				    >img{
				    	display: block;
				    	width:100%;
				    }
			    }
			    .goods_info{
			    	padding-top: 0.1rem;
			    	p{
	    		    font-size: .26rem;
					    color: #D0011B;
					    height: .38rem;
					    line-height: .38rem;
					    del{
					    	float: right;
						    display: inline-block;
						    color: #9A9A9A;
						    font-size: .18rem;
					    }
			    	}
			    	button{
	    		    font-size: .24rem;
					    color: #fff;
					    background-color: #D0011B;
					    width: 1.4rem;
					    height: .47rem;
					    line-height: .4rem;
					    text-align: center;
					    border-radius: .5rem;
					    border: none;
					    display: block;
					    margin: .1rem auto 0 auto;
			    	}
			    }
		    }
		    .goods_chakan_box{
		    	width:auto;
		    	margin-right: .18rem;
		    }
			}
		}
	}
	.goods_chakan{
	    display: block;
	    width: 2rem;
	    height: 2.8rem;
			margin-right: .18rem;
		    vertical-align: top;
		    background: url("../../../image/chakan.png") no-repeat;
		    background-size: 100% 100%;
	    }
</style>
