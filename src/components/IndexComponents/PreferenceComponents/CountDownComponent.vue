<template>
  <div class="index-countDown">
    <div class="top-timeline">
			<div class="top-content">
				<hr>
				<div class="content-wrap">限时特惠距活动结束仅剩</div>
			</div>
			<div class="time-content">
				<span class="hh1 detail-wrap">0</span>
				<span class="hh2 detail-wrap">9</span>
				<span class="label-wrap">时</span>
				<span class="mm1 detail-wrap">4</span>
				<span class="mm2 detail-wrap">9</span>
				<span class="label-wrap">分</span>
				<span class="ss1 detail-wrap">2</span>
				<span class="ss2 detail-wrap">4</span>
				<span class="label-wrap">秒</span>
				<span class="ms1 detail-wrap">1</span>
				<span class="ms2 detail-wrap">1</span>
			</div>
		</div>
  </div>
</template>

<script>
	
	import  {mapState,mapGetters,mapActions} from "vuex"
	//引入子组件
	
	
export default {
  name: 'index-countDown',
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
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.index-countDown{
		.top-timeline{
			background-color: #FFFFFF;
			.top-content{
		    height: 0.4rem;
		    width: 3.5rem;
		    margin: 0 auto;
		    position: relative;
		    margin-bottom: .06rem;
		    hr{
    	    position: absolute;
			    width: 100%;
			    top: 49%;
			    margin: 0;
			    border: none;
			    border-top: 1px solid #000;
		    }
		    .content-wrap{
    	    font-size: 0.25rem;
			    color: #000;
			    height: 0.4rem;
			    line-height: 0.4rem;
			    text-align: center;
			    width: 90%;
			    background-color: #FFFFFF;
			    position: absolute;
			    left: 5%;
		    }
			}
			.time-content{
		    height: 0.6rem;
		    line-height: 0.6rem;
		    text-align: center;
		    color: #000;
		    font-size: 0.26rem;
		    .detail-wrap{
		    	display: inline-block;
		    	width:0.3rem;
		    	height:0.4rem;
		    	line-height: 0.4rem;
		    	background: #000;
		    	color:#fff;
		    }
			}
		}
	}
</style>
