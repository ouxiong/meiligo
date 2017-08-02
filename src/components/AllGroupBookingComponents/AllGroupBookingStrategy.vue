<template>
  <div class="strategy">
  		<div class="strategy_header">
		    <span class="strategy_header_left"></span>
		    <h3 class="strategy_header_h">美丽GO拼团规则</h3>
		    <span class="strategy_header_right" ></span>
		  </div>
		  <div class="strategy_content">
		  	<p>
		  		<b>1、拼团有效期</b>
		  	</p>
		  	<p>
		  		<font color="#7f7f7f">拼团有效期是自开团时刻起的24小时内，如果距离活动结束时间小于24小时，则以活动结束时间为准。</font>
		  	</p>
		  	<p>
		  		<b>2、拼团成功</b>
		  	</p>
		  	<p>
		  		<font color="#7f7f7f">拼团有效期内，支付的用户达到参团人数，则拼团成功，商家开始进入发货流程。</font>
		  	</p>
		  	<p>
		  		<b>3、拼团失败</b>
		  	</p>
		  	<p>
		  		<font color="#7f7f7f">拼团有效期后，未达成相应参团人数的团，则该团失败。</font>
		  	</p>
		  	<p>
		  		<font color="#7f7f7f">高峰期间，同时支付的人过多，团人数有限制，美丽说以接收第三方支付信息时间先后为准，超出该团人数限制的部分用户则会拼团失败。</font>
		  	</p>
		  	<p>
		  		<font color="#7f7f7f">拼团失败的订单，系统会在1-7个工作日内处理退款，系统处理后1-10个工作日内原路退回至原支付账户中。</font>
		  	</p>
		  	<p>
		  		<b>4.&nbsp;等待成团中如何退款？</b>
		  	</p>
		  	<p>
		  		<font color="#7f7f7f">拼团有效期后，未达成相应参团人数的要求，则该团失败，系统会自动退款。</font>
		  	</p>
		  	<p>
		  		<font color="#7f7f7f">注：拼团下单支付成功后可以自行操作取消订单，退款将在1-10个工作日内原路返回，请您到时注意查收。</font>
		  	</p>
		  	<p>
		  		<b>5.&nbsp;商品承诺的发货时间</b>
		  	</p>
		  	<p>
		  		<font color="#7f7f7f">拼团会有拼团有效期，在拼团有效期内成团后商家进入发货阶段，因此参加拼团活动的商品承诺的发货时间，将以拼团成功时间为准开始计算。</font>
		  	</p>
		  </div>
	</div>
</template>

<script>
	
	import axios from "axios"
	
	import jsonp from "jsonp"
	
	//引入组件
	
	
export default {
  name: 'strategy',
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
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.strategy{
		.strategy_header{
			height:1rem;
	    text-align: center;
	    padding:0 .6rem;
	    margin-top: 0.1rem;
	    margin-bottom: 0rem;
	    background-color: #ffffff;
	    display:flex;
	    align-items: center;
	    justify-content: space-around;
	    span{
	    	display: inline-block;
		    background-repeat: no-repeat;
		    background-size: cover;
	    }
	    .strategy_header_left{
	    	width: 1.4rem;
		    height: 0.11rem;
		    vertical-align: middle;
		    background-image: url("https://s10.mogucdn.com/p1/161226/idid_ifrgmytegvrdmmbrmqzdambqmeyde_255x20.png");
	    }
	    .strategy_header_h{
	    	display: inline-block;
		    height: 0.46rem;
		    line-height: 0.46rem;
		    margin: 0 0.1rem;
		    vertical-align: middle;
		    font-size: 0.32rem;
		    color: #333333;
		    font-weight: normal;
	    }
	    .strategy_header_right{
	    	width: 1.4rem;
		    height: 0.11rem;
		    vertical-align: middle;
        transform: scaleX(-1);
		    background-image: url("https://s10.mogucdn.com/p1/161226/idid_ifrgmytegvrdmmbrmqzdambqmeyde_255x20.png");
	    }
	    
		}
		.strategy_content{
			padding: 0.3rem 0.3rem 0.01rem 0.3rem;
	    background: #FFF;
	    line-height: 0.44rem;
	    font-size: 0.28rem;
	    color: #333;
	    >p{
	    	margin-bottom: 0.3rem;
	    }
		}
	}
</style>
