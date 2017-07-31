<template>
	<footer class="nav-tab">
		<router-link to="/index">
			<span class="iconfont icon-shouye"></span>
			<span>首页</span>
		</router-link>
		<router-link to="/classify">
			<span class="iconfont icon-fenlei"></span>
			<span>分类</span>
		</router-link>
		<router-link to="/cat">
			<span class="iconfont icon-gouwuche"></span>
			<span>购物车</span>
		</router-link>
		<router-link to="/mine">
			<span class="iconfont icon-wo"></span>
			<span>我的</span>
		</router-link>
	</footer>
</template>

<script>
	import Vue from "vue"
	
	const NavTab = Vue.extend({
		name:"navtab"
	})
	
	Vue.component("nav-tab",NavTab)
	
	export default NavTab
</script>

<style scoped lang="scss">
	
	.nav-tab{
		position: absolute;
		bottom:0;
		left:0;
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