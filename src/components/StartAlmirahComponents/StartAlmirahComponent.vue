<template>
  <div class="start-almirah">
  	<header>
  		<div class="start-almirah-head">
  			<img src="https://s10.mogucdn.com/mlcdn/c45406/170725_05hb2c5jf43k9h50kckklf60bf5bl_750x250.jpg_750x999.v1c7E.70.webp"/>
  		</div>
  	</header>
  	<div class="start-almirah-title">
	    <div class="title-top"></div>
	    <div class="title">
	      <div class="title-box">
	      	<p>
	      		想要穿得漂亮是每个女孩子的追求，怎么才能轻轻松松就拥有
	      		<span class="title-box-s1">吸睛能力</span>
	      		？论时尚嗅觉的敏感度，一众走在
	      		<span class="title-box-s2">潮流前沿的明星</span>
	      		可以说是了如指掌，跟上
	      		<span class="title-box-s3">她们的步伐</span>
	      		绝对不会出错哦！
	      	</p>
	      </div>
	    </div>
	    <div class="title-bottom"></div>
	  </div>
	  <section>
	  	<div class="start-almirah-section">
	  		<start-almirah-item :start_item="start" v-for="(start,$index) in StartAlmirah" key="$index"></start-almirah-item>
	  	</div>
	  </section>
	  <fill></fill>
	  <start-almirah-content></start-almirah-content>
  </div>
</template>

<script>
	import jsonp from "jsonp"
	
	//引入组件
	import StartAlmirahItem from "./StartAlmirahItemComponent"
	
	import StartAlmirahContent from "./StartAlmirahContent"
	
	import Fill from "./../FillComponent"
export default {
  name: 'start-almirah',
  data () {
    return {
     StartAlmirah:[]
    }
  },
  methods:{
		getStartAlmirah(){
			let that = this;
			jsonp("http://mce.mogucdn.com/jsonp/multiget/3?pids=51331", null, function (err, res) {
				  if (res) {
				  that.StartAlmirah=res.data["51331"].list
				  }
				});
		}
  },
  mounted(){
		this.getStartAlmirah()
		
		
  },
  updated(){
  	
  },
  watch:{
  	
  },
  components:{
  	StartAlmirahItem,
  	Fill,
  	StartAlmirahContent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.start-almirah{
		background: #FFFFFF;
		header{
			.start-almirah-head{
				width:100%;
				margin: 0 auto;
    		position: relative;
    		>img{
			    display: block;
    			width: 100%;
    		}
			}
		}
		.start-almirah-title{
	    width: 7.5rem;
    	position: relative;
    	.title-top{
    		position: absolute;
		    width: 0.47rem;
		    height: 0.36rem;
		    background-repeat: no-repeat;
		    background-size: contain;
        top: .3rem;
    		left: .13rem;
		    background-image: url("https://s10.mogucdn.com/p1/161212/idid_ifqwgnrume3tmyldmmzdambqgyyde_72x55.png");
    	}
    	.title-bottom{
    		position: absolute;
		    width: 0.47rem;
		    height: 0.36rem;
		    background-repeat: no-repeat;
		    background-size: contain;
        bottom: .2rem;
    		right: .13rem;
		    background-image: url("https://s10.mogucdn.com/p1/161212/idid_ifqwgnrume3tmyldmmzdambqgyyde_72x55.png");
    		transform: scaleX(-1);
    	}
    	.title{
    		padding: .2rem 0.33rem .1rem 0.33rem;
				.title-box{
					margin: 0.4rem 0 0.1rem 0;
			    line-height: 0.45rem;
			    font-size: 0.28rem;
			    color: #333333;
			    >p{
			    	margin-bottom: 0.3rem;
			    }
				}    		
    	}
		}
		section{
			.start-almirah-section{
				width:100%;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
			}
		}
	}
</style>
