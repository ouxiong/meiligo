<template>
  <div class="index-groupBooking">
  	<fill></fill>
  	<div class="index-groupBooking-box">
  		<h2>
    		<span>超值拼团</span>
    		<router-link to="/allgroupbooking">全部拼团 
    			<img src="https://s10.mogucdn.com/mlcdn/c45406/170706_7d6f70iaill2c55je7h09225ida77_21x33.png">
    		</router-link>
  		</h2>
  		<group-booking-item :group="group" v-for="(group,$index) in groupBooking" key="$index"></group-booking-item>
  		<!--<div class="index-groupBooking-main" v-for="group in groupBooking">
  			<a class="groupBooking-minbox" href="#">
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
  			</a>
  		</div>-->
  		
  	</div>
  	<router-link to="/allgroupbooking" class="more">全部超值拼团</router-link>
  	<fill></fill>
  </div>
</template>

<script>
	
	import axios from "axios"
	
	import jsonp from "jsonp"
	
	//引入组件
	import Fill from "../FillComponent"
	
	import GroupBookingItem from "./IndexGroupBookingItemComponent"
export default {
  name: 'index-groupBooking',
  swiper:null,
  data () {
    return {
     groupBooking:[]
    }
  },
  methods:{
		getgroupBooking(){
			let that = this;
			jsonp("http://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730%2C59540%2C42287", null, function (err, res) {
				  if (res) {
//				  that.groupBooking=res.data["59540"].list     拼团的全部数据
				  	res.data["59540"].list.forEach((item,i)=>{
				  		if(i<5){
				  			that.groupBooking.push(item)
				  		}
				  	})
				  }
				});
		}
  },
  mounted(){
		this.getgroupBooking()
  },
  updated(){
  	
  },
  watch:{
  	
  },
  components:{
  	Fill,
  	GroupBookingItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.index-groupBooking{
		width:100%;
		.index-groupBooking-box{
			padding-left: 0.2rem;
    	background-color: #fff;
			>h2{
		    background-color: #fff;
		    color: #333;
		    font-size: 0.28rem;
		    padding: .3rem .2rem 0;
		    font-weight: normal;
		    display: flex;
		    justify-content: space-between;
		    >a{
		    	color:#999;
		    	>img{
    		    width: 0.1rem;
		    	}
		    }
			}
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
		.more{
			display: block;
	    width: 4.6rem;
	    height: 0.6rem;
	    line-height: 0.61rem;
	    background-color: #f69;
	    color: #fff;
	    text-align: center;
	    margin-left: auto;
	    margin-right: auto;
	    margin-top: 0.3rem;
	    font-size: 0.28rem;
	    border-radius: 0.6rem;
		}
	}
</style>
