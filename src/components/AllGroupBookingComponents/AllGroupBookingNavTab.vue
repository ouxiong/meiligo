<template>
	<footer class="nav-tab">
		
		<router-link to="/allgroupbooking">
			<span class="iconfont icon-feiyong"></span>
			<span>超值拼团</span>
		</router-link>
		<router-link to="/mine">
			<span class="iconfont icon-wode"></span>
			<span>我的拼团</span>
		</router-link>
		<router-link to="/strategy">
			<span class="iconfont icon-xiangqing1"></span>
			<span>拼团攻略</span>
		</router-link>
	</footer>
</template>

<script>
	import axios from "axios"
	
	import jsonp from "jsonp"
	
	//引入组件
	
	
export default {
  name: 'nav-tab',
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

<style scoped lang="scss">
	.nav-tab{
		position: fixed;
		bottom:0;
		left:0;
		z-index: 9999;
		width:100%;
		padding: .05rem 0;
	    background-color: #fff;
	    height: 1rem;
	    box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
	    display: flex;
	    a{
	    	flex-grow: 1;
	    	display: flex;
	    	flex-flow: column;
	    	align-items: center;
	    	justify-content: center;
	    	font-size: 0.25rem;
	    	color:#999;
	    	.iconfont{
	    		font-size: 0.45rem;
	    		padding-bottom: 2px;
	    	}
	    	&.router-link-active{
	    		color:#ff3366;
	    	}
	    }
	    
	}
</style>