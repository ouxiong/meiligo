<template>
  <div class="hot-summer">
  	<header>
  		<div class="hot-summer-head">
  			<img src="https://s10.mogucdn.com/mlcdn/c45406/170620_5298ai79i5742a3h2c4c1fk047f55_750x250.jpg_750x999.v1c7E.70.webp"/>
  		</div>
  	</header>
  	<section>
  		<div class="hot-summer-main">
  			<div class="main-box">
  				<div class="right_ico"></div>
  				<div class="main-box-content clearfix">
  					<div class="main_box_left">
  						<hot-summer-item :hot="hot" v-for="(hot,$index) in hotSummerLeft" key="$index"></hot-summer-item>
  					</div>
  					<div class="main_box_right">
  						<hot-summer-item :hot="hot" v-for="(hot,$index) in hotSummerRight" key="$index"></hot-summer-item>
  					</div>
  				</div>
  			</div>
  		</div>
  	</section>
  	<hot-summer-content></hot-summer-content>
  </div>
</template>

<script>
	import jsonp from "jsonp"
	
	//引入组件
	import HotSummerItem from "./HotSummerItemComponent"
	
	import HotSummerContent from "./HotSummerContent"
export default {
  name: 'hot-summer',
  data () {
    return {
     hotSummerLeft:[],
     hotSummerRight:[]
    }
  },
  methods:{
		getHotSummer(){
			let that = this;
			jsonp("https://simba-api.meilishuo.com/mlselection/top/v1/sellingRecomm/h5?_=1501687511214", null, function (err, res) {
				  if (res) {
					  res.data.forEach((item,i)=>{
					  	if(i%2==0){
					  		that.hotSummerLeft.push(item)
					  	}else{
					  		that.hotSummerRight.push(item)
					  	}
					  })
				  }
				});
		}
  },
  mounted(){
		this.getHotSummer();
		
		
  },
  updated(){
  	
  },
  watch:{
  	
  },
  components:{
  	HotSummerItem,
  	HotSummerContent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.hot-summer{
		header{
			.hot-summer-head{
				width:100%;
				margin: 0 auto;
    		position: relative;
    		>img{
			    display: block;
    			width: 100%;
    		}
			}
		}
		section{
			.hot-summer-main{
				width:100%;
				margin: 0 auto;
    		position: relative;
    		.main-box{
    			padding: .24rem .2rem;
			    position: relative;
			    background: #fbbfc4;
			    .right_ico{
	    	    position: absolute;
				    width: 2.6rem;
				    height: 1rem;
				    right: .2rem;
				    top: .4rem;
				    background: url("../../image/top-seling.png") center no-repeat;
				    background-size: contain;
				    z-index: 99;
			    }
			    .main-box-content{
			    	background: #fff;
			    	.main_box_left{
	    		    width: 50%;
					    float: left;
					    background: #fff;
					    padding-top: .5rem;
    					padding-left: 0.08rem;
			    	}
			    	.main_box_right{
	    		    width: 50%;
					    float: left;
					    background: #fff;
					    padding-top: 1.36rem;
			    	}
			    }
    		}
			}
		}
	}
</style>
