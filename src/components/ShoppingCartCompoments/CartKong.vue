<template>
	<div class="meili">
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="static/img/1.png"/></a>
			<p>购物车</p>
			<span>首页</span>
		</div>
		<div class="box">
			<p>你的购物车还空着呢</p>
			<p>美物这么多，快去看看吧~</p>
			<div class="small">
				<router-link  class="aItem" to="/index">去逛逛</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'meili'
	}
</script>

<style scoped lang="scss">
	.meili{
		width: 100%;
		height: 667px;
		background: #F5F5F5;
		.header{
			width: 100%;
			height: 1rem;
			background:#fff;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			color: #232323;
			font-size: 20px;
			img{
				width: 0.3rem;
				margin-left: 10px;
				
			}
			span{
				z-index: 5;
				font-size: .35rem;
				float: right;
				padding-right: .3rem;
				height: .88rem;
				line-height: .88rem;
				color: #666;
			}
			p{
				color: #666;
    			text-decoration: none;
				font-size: .35rem;
			}
		}
		.box{
			width: 100%;
			height: 304px;
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 14px;
			-color: #999;
			margin-top: 70px;
			.small{
				width: 25%;
				height: 35px;
				background: #f66;
				
				border-radius:3px ;
				color: #fff;
				line-height: 35px;
				text-align: center;
				margin-top: 20px;
				.aItem{
					color: #fff;
				}
			}
		}
	}
</style>