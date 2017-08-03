<template>
  <div class="groupBooking-item">
  		<div class="index-groupBooking-main">
  			<router-link to="/detail" class="groupBooking-minbox">
  				<div class="minbox-left">
  					<div class="minbox-left-img">
  						<img :src="group.image" :alt="group.itemAdvantageDesc">
  					</div>
  				</div>
  				<div class="minbox-right">
  					<h3 v-text="group.title"></h3>
  					<div class="minbox-right-flex">
	  					<div class="minbox-right-box">
	  						<p class="minbox-right-price">
		  						<span v-text="'￥'+group.discountPrice"></span>
		  						<del v-text="'￥'+group.price"></del>
		  					</p>
	  						<p> {{group.ptUserCount}}人团  <b> · </b>已团{{group.pintuanItemSale}}件  </p>
	  					</div>
	  					<div class="go-groupBooking">去开团</div>
  					</div>
  				</div>
  			</router-link>
  		</div>
  		
  </div>
</template>

<script>
	
	import axios from "axios"
	
	import jsonp from "jsonp"
	
	//引入组件
	import Fill from "../FillComponent"
export default {
  name: 'index-groupBooking',
  props:["group"],
  data () {
    return {
     groupBooking:[]
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
  	Fill
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.groupBooking-item{
			.index-groupBooking-main{
				.groupBooking-minbox{
					display: block;
			    width: 100%;
			    overflow: hidden;
			    padding: .3rem 0;
			    border-bottom: 0.5px solid #F2F5F8;
			    display: flex;
			    justify-content: space-between;
			    .minbox-left{
				    width: 2rem;
				    height: 2rem;
				    overflow: hidden;
				    margin-right: 0.2rem;
				    .minbox-left-img{
				    	width:100%;
				    	height:100%;
				    	overflow: hidden;
				    	>img{
				    		width:100%;
				    	}
				    }
			    }
			    .minbox-right{
	    	    font-size: 0.24rem;
				    color: #666;
				    height: 2rem;
				    margin-right: 0.2rem;
				    overflow: hidden;
				    >h3{
				    	width:4.9rem;
				    	font-size: 0.28rem;
					    color: #000;
					    line-height: 0.38rem;
					    margin-bottom: 0.3rem;
					    font-weight: normal;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    display: -webkit-box;
					    -webkit-line-clamp: 2;
					    -webkit-box-orient: vertical;
				    }
				    .minbox-right-flex{
				    	display: flex;
				    	justify-content: space-between;
				    	.minbox-right-box{
				    		.minbox-right-price{
		    			    height: 0.42rem;
    							margin-bottom: 0.2rem;
    							>span{
								    font-size: 0.4rem;
								    color: #ff6699;
								    margin-right: 0.14rem;
    							}
    							>del{
								    text-decoration: line-through;
								    font-size: 0.2rem;
    							}
				    		}
				    	}
				    	.go-groupBooking{
			    		    width: 1.8rem;
							    height: 0.6rem;
							    line-height: 0.61rem;
							    text-align: center;
							    background-color: #ff6699;
							    color: #fff;
							    font-size: 0.28rem;
							    border-radius: 0.4rem;
							    float: right;
							    margin-top: 0.34rem;
				    	}
				    }
			    }
				}
			}
		}
</style>
