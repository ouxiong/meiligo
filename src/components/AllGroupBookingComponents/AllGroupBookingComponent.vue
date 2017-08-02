<template>
  <div class="all-group-booking">
  		<header class="all-group-booking-header">
  			<a class="all-group-booking-head" href="#" >
  				<div></div>
  			</a>
  		</header>
  		<nav class="all-group-booking-nav">
  			<div class="swiper-container gb-nav-tab">
					<div class="swiper-wrapper">
						<div class="swiper-slide gb-nav-tab-minbox" v-for="(nav,$index) in gbNav" @click="setNum($index,nav.pid)">
							<a href="javascript:0" class="nav_item">{{nav.title}}				
		  					<span :class="num==$index?'line':''"></span>				
		  				</a>
						</div>
					</div>
				</div>
  		</nav>
  		<section class="all-group-booking-content">
  			<group-booking-item :group="gbcontent" v-for="(gbcontent,$index) in gbcontent" key="$index"></group-booking-item>
  		</section>
  		<div class="perch"></div>
  		<group-booking-nav-tab></group-booking-nav-tab>
  </div>
</template>

<script>
	//接口对比
//http://m.meilishuo.com/pintuan/aj/index_wall?offset=0&frame=0&trace=0&limit=20&endId=0&pid=59540&page=1
//http://m.meilishuo.com/pintuan/aj/index_wall?offset=0&frame=0&trace=0&limit=20&endId=0&pid=57899&page=1
	import axios from "axios"
	
	import jsonp from "jsonp"
	
	//引入组件
	import GroupBookingNavTab from "./AllGroupBookingNavTab"
	
	import GroupBookingItem from "../IndexComponents/IndexGroupBookingItemComponent"
export default {
  name: 'all-group-booking',
  swiper:null,
  
  data () {
    return {
     gbNav:[{"title":"热销","pid":"59540"},{"title":"上新","pid":"57899"},{"title":"女装","pid":"57903"},{"title":"潮鞋","pid":"59305"},{"title":"美妆","pid":"59223"},{"title":"9.9封顶","pid":"59917"}],
     num:0,
     gbcontent:[],
     pid:59540
    }
  },
  methods:{
		getGbcontent(){
			let that = this;
			jsonp("http://m.meilishuo.com/pintuan/aj/index_wall?offset=0&frame=0&trace=0&limit=20&endId=0&pid="+this.pid+"&page=1", null, function (err, res) {
				  if (res) {
				  that.gbcontent=res.data.list
				  console.log(res.data.list)
				  }
				});
		},
		setNum(n,pid){
			this.num = n;
			this.pid = pid;
			this.getGbcontent();
		}
  },
  mounted(){
		this.$options.swiper = new Swiper(".gb-nav-tab",{
        freeMode:true,
	  		slidesPerView:"auto",
	  		freeModeSticky:true
  	}),
  	this.getGbcontent()
  },
  updated(){
  	
  },
  watch:{
  	
  },
  components:{
  	GroupBookingNavTab,
  	GroupBookingItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.all-group-booking{
		.all-group-booking-header{
			width:100%;
	    height: 2.5rem;
    	overflow: hidden;
    	.all-group-booking-head{
		    display: block;
    		width: 100%;
	    	height: 2.5rem;
    		overflow: hidden;
		    left: 0px;
		    background: url("https://s10.mogucdn.com/mlcdn/c45406/170609_3jaij6bl7lcje0462fl424g5glad1_80x80.png") no-repeat center center;
    		background-size: 30%;
		    transition-duration: 0ms;
		    transform: translate3d(0px, 0px, 0px);
		    >div{
    	    width: 100%;
			    height: 2.5rem;
			    overflow: hidden;
	        background-image: url("https://s2.mogucdn.com/mlcdn/c45406/170729_6i274ea9abf92b5b4g90fj50g248b_750x300.jpg_640x999.v1c96.70.webp");
    			background-size: cover;
		    }
    	}
		}
		.all-group-booking-nav{
	    z-index: 100;
	    top: 0px;
	    left: 0px;
	    width: 100%;
	    height: .9rem;
    	background-color: #fff;
	    position: -webkit-sticky;
	    position: sticky;
	    top: 0px;
	    font-size: .28rem;
	    color: #666;
	    .gb-nav-tab{
	    	width:100%;
	    	height: .9rem;
    		overflow: hidden;
    		.swiper-wrapper{
    			width:200%;
    		}
    		.gb-nav-tab-minbox{
    			width:auto;
	    		.nav_item{
	    			float: left;
	    			position: relative;
						overflow: hidden;
						color: #000;
				    line-height: .9rem;
	    			padding: 0 .4rem;
	    			-webkit-tap-highlight-color:rgba(0,0,0,0);
	    			.line{
				    		position: absolute;
						    left: 50%;
						    bottom: 0;
						    width: .5rem;
						    height: .04rem;
						    background-color: #333;
						    -webkit-transform: translateX(-50%);
						    transform: translateX(-50%);
	    			}
	    		}
    			
    		}
	    }
		}
		.all-group-booking-content{
			background-color: #fff;
		}
	}
</style>
