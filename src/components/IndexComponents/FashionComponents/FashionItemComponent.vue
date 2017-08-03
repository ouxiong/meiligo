<template>
  <div class="index-fashion-item">
    <a href="">
    	<img :src="fashicon.image"/>
    </a>
		<div class="swiper-container fashion-item-box">
			<div class="swiper-wrapper fashion-item-box-uls">
				<div class="swiper-slide fashion-item-lis" v-for="list in fashicon.goodsList">
					<router-link to="/detail">
						<div class="goods_img">
							<img :src="list.image" alt="list.title">
						</div>
						<div class="goods_info">
							<p class="goods_item_title" v-text="list.title"></p>
							<p class="goods_item_price" v-text="'￥'+list.price">      </p>
						</div>
					</router-link>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
	
	import  {mapState,mapGetters,mapActions} from "vuex"
	//引入子组件
	
	
	
export default {
  name: 'index-fashion-item',
  props:["fashicon"],
  swiper:null,
  data () {
    return {
      
    }
  },
  computed:{
  	
  },
  methods:{
  	
  },
  mounted(){
  	
  },
  components:{
  	
  },
  watch:{
  	
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.index-fashion-item{
		img{
			width: 100%;
		}
		.fashion-item-box{
			.fashion-item-box-uls{
				box-sizing: border-box;
		    background-color: #fff;
		    padding: .2rem 0 0 .2rem; 
		    font-size: 0;
		    white-space: nowrap;
		    margin-bottom: 0.3rem;
		    vertical-align: top;
		    
		    .fashion-item-lis{
		    	display: inline-block;
			    width: 2rem;
			    margin-right: .18rem;
			    .goods_item{
			    	width:100%;
			    }
			    .goods_img{
			    	width: 2rem;
			    	height: 2rem;
				    position: relative;
				    background-size: 1rem;
				    img{
				    	display: block;
				    	width:100%;
				    	height:100%;
				    }
			    }
			    .goods_info{
			    	padding: 0.1rem 0;
			    	.goods_item_title{
	    		    font-size: 0.24rem;
					    color: #3f2a20;
					    white-space: nowrap;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    line-height: 0.42rem;
			    	}
			    	.goods_item_price{
			    		font-size: 0.24rem;
    					color: #f14a6b;
			    	}
			    }
		    }
			}
		}
	}
</style>
