<template>
  <div class="hot-summer-content-item">
				<div class="content-main-minbox">
					<div class="item-wrap">
						<router-link to="/detail" class="iwf">
							<div class="iwf-img">  
								<span class="img-mark" ></span>
								<img :src="content.image" alt=""/>
							</div>
							<div class="iwf-title">
								<p class="item-title" v-text="content.title"></p>
								<div class="item-info">
									<span class="price"><i>¥</i>{{content.price}}</span>                              
									<span class="collect-num">
										<i class="collect-star"></i>
										<i v-text="content.collectNum"></i>
									</span>
								</div>
							</div>
						</router-link>
					</div>
				</div>
  </div>
</template>

<script>
	import jsonp from "jsonp"
	
	//引入组件
	
export default {
  name: 'hot-summer-content-item',
  props:["content"],
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
.hot-summer-content-item{
	width:49.3%;
	.content-main-minbox{
		width:100%;
		.item-wrap{
			box-sizing: border-box;
			padding: 0 .06rem;
			.iwf{
		    	display: block;
			    position: relative;
			    width: 100%;
			    background-color: #fff;
			    .iwf-img{
	    	    background: url("../../image/hotsummer—lanjiazai.png") no-repeat;
				    background-position: center center;
				    box-sizing: border-box;
				    background-size: 40%;
				    height:0;
				    padding-bottom: 4.6rem;
				    overflow: hidden;
				    position: relative;
				    >img{
						width: 100%;
				    }
				    .img-mark{
		    	    width: .72rem;
					    height: .84rem;
					    position: absolute;
					    left: .12rem;
					    top: 0;
					    background-size: 100%;
					    background-repeat: no-repeat;
					    background-image: url("http://s11.mogucdn.com/mlcdn/8017e2/170411_67ke8j0fk016k5iicjeke69b0hjgi_73x84.png");
				    }
			    }
			    .iwf-title{
	    	    font-size: .28rem;
					padding: .24rem 0 .4rem 0;
					.item-title{
						color: #000;
					    white-space: nowrap;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    text-align: center;
					    font-size: .28rem;
					    line-height: 0.32rem;
					}
					.item-info{
						margin-top: .16rem;
						display: flex;
						justify-content: space-between;
						.price{
							font-size: .3rem;
						    color: #f82a5a;
						    vertical-align: middle;
						}
						.collect-num{
						    font-size: .24rem;
							color: #999999;
							.collect-star{
								display: inline-block;
							    width: .24rem;
							    height: .24rem;
							    background: url("../../image/xingxing.png") center no-repeat;
							    background-size: 100%;
							    margin-right: .02rem;
							}
						}
					}
			    }
			}
		}
	}
}
</style>
