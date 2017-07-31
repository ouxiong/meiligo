<template>
  <div class="index-header">
    <header class="index-header-box">
			<form id="index-header-form" class="" method="post">
				<a href="/" class="home_btn"></a>
				<input class="index-header-search" type="search" placeholder="套装" data-value="套装">
				<div id="index-header-mine" class="index-header-mine"></div>
			</form>
		</header>
  </div>
</template>

<script>
	
	import axios from "axios"
export default {
  name: 'index-header',
  props:["position","showPosition"],
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
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.index-header{
		.index-header-box{
			height: 0.9rem;
	    background-color: #fff;
	    position: relative;
	    font-size: 0.24rem;
	    z-index: 100;
	    .home_btn{
        float: left;
				width: 0.58rem;
				height: 0.9rem;
				margin: 0 .3rem;
				background: url("../../image/KAILI-logo.png") no-repeat center;
				background-size: contain;
				text-align: center;
				color: #666;
	    }
	    .index-header-search{
	    	float: left;
		    font-size: 0.24rem;
		    color: #333;
		    border: none;
		    padding: .15rem .15rem .15rem .55rem;
		    width: 5.3rem;
		    border-radius: 0.1rem;
		    margin-bottom: 0.16rem;
		    margin-top: 0.16rem;
		    height: 0.56rem;
		    background: #F4F4F4 url("../../image/search.png") no-repeat 0.2rem center;
		    background-size: auto .26rem;
		    -webkit-appearance: none;
		    outline: none;
	    }
	    .index-header-mine{
	    	float: left;
		    margin-top: 0.15rem;
		    width: 0.98rem;
		    height: 0.56rem;
		    line-height: 0.56rem;
		    text-align: center;
        background: url("../../image/mine-logo.png") no-repeat center center;
    		background-size: .34rem .3rem;
	    }
    }
	}
</style>
