<template>
	<div class="carts">
		<div class="header">
			<a href=""><img src="static/img/1.png"/></a>
			<p>购物车</p>
			<span>删除</span>
		</div>
		<div class="div">
			店铺：美丽优选<p class="p">合计：<span>￥50.00</span></p>
		</div>
		<ul>
			<li>
				<div class="img"><img/></div>
				<div class="center">
					<p class="p1">娃娃领喇叭</p>
					<p class="p2">颜色：白色 尺码：均码</p>
					<div class="btn">
						<button>-</button>
						<span class="sp1">1</span>
						<button>+</button>
					</div>
				</div>
				<div class="right">
					<p class="p3">￥50.00</p>
					<buton>x</buton>
				</div>
			</li>
		</ul>
		<div class="dibu">
			<ol>
				<li class="li">全选</li>
				<li>
					<p class="p5">合计：<span>￥50.00</span></p>
					<p class="p6">不含运费、优惠扣减</p>
				</li>
				<li>
					<div class="jiesuan">
						去结算(1)
					</div>
				</li>
			</ol>
		</div>
	</div>
</template>

<script>
	export default{
		name:'carts'
	}
</script>

<style scoped lang="scss">
	.carts{
		width: 100%;
		height: 667px;
		background: #F5F5F5;
		
		.header{
			width: 100%;
			height: 60px;
			background:#fff;
			border-bottom: 1px solid #f7f7f7;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			color: #232323;
			font-size: 20px;
			img{
				width: 25px;
				height: 25px;
			}
		}
		.div{
			width: 100%;
			height: 60px;
			background: #FFFFFF;
			border-bottom: 1px solid #f7f7f7;
			display: flex;
			font-size: 16px;
			justify-content: space-around;
			align-items: center;
		}
		ul {
			width: 100%;
			height: 100px;
			
			li{
				width: 100%;
				height: 100px;
				display: flex;
				justify-content: space-around;
				background: #FFFFFF;
				border-bottom: 1px solid #f7f7f7;
				align-items: center;
				.img{
					width: 80px;
					height: 80px;
					border: 1px solid #ccc;
				}
				.p1{
					font-size: 16px;
				}
				.p2{
					color: #999;
				}
				.p3{
					color: palevioletred;
				}
			}
		}
		.dibu{
			width: 100%;
			height: 60px;
			position: fixed;
			bottom: 60px;
			left: 0;
			border: 1px solid #DCDCDC;
			ol{
				display: flex;
				justify-content: space-around;
				align-items: center;
				li{
					width: 100%;
				}
				.li{
					font-size: 14px;
				}
				.p5{
					font-size: 14px;
					margin-top: 15px;
					span{
						color: palevioletred;
					}
				}
				.p6{
					color: #999;
				}
				.jiesuan{
					width:100px;
					height: 38px;
					line-height: 38px;
					text-align: center;
					color: #fff;
					background: indianred;
					border-radius: 3px;
					margin-top: 5px;
				}
			}
		}
	}
</style>