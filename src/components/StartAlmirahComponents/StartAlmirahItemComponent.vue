<template>
  <div class="start-almirah-item">
  	<div class="item-minbox">
  		<router-link to="/detail" class="anchor-wrapper">
  			<div class="img-wrap">
  				<img :src="start_item.image" alt="">
  			</div>
  			<div class="goods_info">
  				<div class="fav_num">
  					<span class="act-slogan"> </span>
  					<span class="act-now-price" v-text="'￥'+start_item.price"></span>
  				</div>
  			</div>
  			<div class="title" v-text="start_item.title"></div>
  			
  		</router-link>
  	</div>
  </div>
</template>

<script>
	import jsonp from "jsonp"
	
	//引入组件
	
export default {
  name: 'start-almirah-item',
  props:["start_item"],
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
	.start-almirah-item{
		width: 46.7%;
		.item-minbox{
			position: relative;
			width:100%;
	    margin: 0 0 2% 2.19%;
	    padding-bottom: 1%;
	    background: #fff;
	    height: 5.66rem;
	    overflow: hidden;
	    .anchor-wrapper{
	    	display: block;
	    	.img-wrap{
	    		position: relative;
			    display: block;
			    height: 0;
			    width: 94.3%;
			    margin: 0.12rem auto 0.14rem;
			    overflow: hidden;
			    padding-bottom: 122.8%;
			    >img{
			    	width:100%
			    }
	    	}
	    	.goods_info{
			    margin-top: 0.01rem;
			    padding-left: 0;
			    overflow: hidden;
			    height: 0.46rem;
			    display: block;
			    .fav_num{
			    	background-image: none;
				    color: #444;
				    margin: 0 auto;
				    font-size: 0.445rem;
				    height: 0.46rem;
				    line-height: 0.46rem;
				    width: 100%;
				    padding: 0 5.14%;
				    overflow: hidden;
				    .act-slogan{
					    margin-top: 0.04rem;
					    border: 1px solid #fff;
					    font-size: 0.2rem;
					    border-radius: 0.08rem;
					    line-height: 0.33rem;
					    height: 0.34rem;
					    display: inline-block;
					    padding: 0 0.07rem;
			        color: #fff;
					    background-color: #ff3377;
				    }
				    .act-now-price{
		    	    color: #555555;
					    font-size: 0.36rem;
					    margin-left: 0.12rem;
				    }
			    }
	    	}
	    	.title{
	    		display: block;
			    width: 100%;
			    font-size: 0.28rem;
			    white-space: nowrap;
			    text-overflow: ellipsis;
			    padding: .1rem 5.14%;
			    overflow: hidden;
			    color:#555;
	    	}
	    }
		}
	}
</style>
