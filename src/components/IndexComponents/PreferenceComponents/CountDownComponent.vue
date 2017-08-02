<template>
  <div class="index-countDown">
    <div class="top-timeline">
			<div class="top-content">
				<hr>
				<div class="content-wrap">限时特惠距活动结束仅剩</div>
			</div>
			<div class="time-content">
				<span class="hh1 detail-wrap" v-text="hh1"></span>
				<span class="hh2 detail-wrap" v-text="hh2"></span>
				<span class="label-wrap">时</span>
				<span class="mm1 detail-wrap" v-text="mm1"></span>
				<span class="mm2 detail-wrap" v-text="mm2"></span>
				<span class="label-wrap">分</span>
				<span class="ss1 detail-wrap" v-text="ss1"></span>
				<span class="ss2 detail-wrap" v-text="ss2"></span>
				<span class="label-wrap">秒</span>
				<span class="ms1 detail-wrap" v-text="ms1"></span>
				<span class="ms2 detail-wrap" v-text="ms2"></span>
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
      endtime:"2017-8-06 00:00:00",
      hh1:null,
      hh2:null,
      mm1:null,
      mm2:null,
      ss1:null,
      ss2:null,
      ms1:null,
      ms2:null,
      hm:99,
      timer:null
    }
  },
  computed:{
  	
  },
  methods:{
  	getCountDown(){
  		var that=this
			var endtime=new Date(this.endtime).getTime()
			this.timer=setInterval(function(){
				var ms = that.hm--;
				if(ms<=0){
					that.hm=99;
				}
				var _time=new Date().getTime()
				var gap = endtime-_time
				_time=(gap)/1000
				var h=parseInt(_time/3600)
				var m=parseInt((_time-h*3600)/60)
				var s=parseInt(_time-h*3600-m*60)
				if(h>=10){
					that.hh1=(h+"").split("")[0];
					that.hh2=(h+"").split("")[1];
				}else{
					that.hh1=0;
					that.hh2=h;
				}
				if(m>=10){
					that.mm1=(m+"").split("")[0];
					that.mm2=(m+"").split("")[1];
				}else{
					that.mm1=0;
					that.mm2=m;
				}
				if(s>=10){
					that.ss1=(s+"").split("")[0];
					that.ss2=(s+"").split("")[1];
				}else{
					that.ss1=0;
					that.ss2=s;
				}
				if(ms>=10){
					that.ms1=(ms+"").split("")[0];
					that.ms2=(ms+"").split("")[1];
				}else{
					that.ms1=0;
					that.ms2=ms;
				}
				if(gap<=0){
					clearInterval(that.timer)
				}
			},10)
  	}
  },
  mounted(){
	this.getCountDown()
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
