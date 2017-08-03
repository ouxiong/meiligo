<template>
  <div class="hot-summer-item">
		<div class="goods_item">
			<div class="decoration"></div>
			<router-link to="/detail" class="iwf">
				<div class="marks">
					<img :src="hot.sellingMarks"/>
				</div>
				<div class="goods_item_img" >
					<img :src="hot.image" alt="">
				</div>
				<div class="goods_item_xiangqing">
					<p class="item_title" v-text="hot.title"></p>
					<div class="item_info">
						<span class="price"><i>¥</i>{{hot.price}}</span>
						<span class="collect_num">
							<i class="icon_star"></i>
							<i>564</i>
						</span>
					</div>
				</div>
			</router-link>
		</div>
  </div>
</template>

<script>
	import jsonp from "jsonp"
	
	//引入组件
	
export default {
  name: 'hot-summer-item',
  props:["hot"],
  data () {
    return {
     
    }
  },
  methods:{
		
  },
  mounted(){
		
		
  },
  updated(){
  	
  },
  watch:{
  	
  },
  components:{
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.goods_item{
		width: 3.16rem;
	    margin: auto;
	    padding-bottom: .5rem;
	    position: relative;
	    .decoration{
	    	width: 3.2rem;
		    height: 3.2rem;
		    border-top: .1rem solid #ff5363;
		    border-left: .1rem solid #ff5363;
		    position: absolute;
		    left: -0.08rem;
		    top: -0.08rem;
	    }
	    .iwf{
	    	.marks{
		    position: absolute;
			    width: .76rem;
			    height: .72rem;
			    right: -0.2rem;
			    top: -0.2rem;
			    background-position: center;
			    background-repeat: no-repeat;
			    background-size: contain;
			    z-index: 999;
			    overflow: hidden;
			    >img{
			    	width:100%;
			    }
	        /*background-image: url("http://s3.mogucdn.com/mlcdn/8017e2/170411_474b556l768glbfel74hf68l50h90_76x72.png");*/
	    	}
	    	.goods_item_img{
	    		
	    			width: 3.16rem;
				    height: 0;
				    position: relative;
	    			background: url('') no-repeat;
				    background-position: center center;
				    box-sizing: border-box;
				    background-size: 1rem;
				    padding-bottom: 130%;
				    z-index: 1;
				    overflow: hidden;
	    		>img{
	    			width:100%;
	    		}
	    	}
	    	.goods_item_xiangqing{
	    		.item_title{
	    			font-size: .3rem;
				    color: #1b1b1b;
				    white-space: nowrap;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    line-height: 1.2;
	    		}
	    		.item_info{
	    			font-size: 0;
					margin-top: .16rem;
					.price{
				    	font-size: .3rem;
					    color: #f82a5a;
					    vertical-align: middle;
					}
					.collect_num{
					    font-size: .24rem;
					    color: #999999;
					    float: right;
					}
	    		}
	    	}
	    }
	}
</style>
