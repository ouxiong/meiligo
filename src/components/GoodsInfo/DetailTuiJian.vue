
/* 推荐 */
<template>
  <div >
      <div class="panel-item" id="PanelParameter">
      <!-- 商品详情-商品参数 -->
      <div class="detail-parameter"> 
        <!-- 顶部 --> 
        <div class="parameter-top"></div>  
        <!-- 标题 --> 
        <div class="parameter-head plr30"> 
            <span class="title">热卖推荐</span>
        </div>
        <!--图片组件  -->
        <div class="index-prevalent-content"  >
            <div class="content-box" v-for="item in 12">
                <router-link class="iwf"  to="/detail" >
                    <div class="content-box-top">
                        <img src="http://s3.mogucdn.com/mlcdn/55cf19/170623_2f5d05a383k4fblfheg3akc0gbjg2_640x960.jpg_468x468.jpg" alt=""/>
                    </div>
                    <p class="title"> 韩版夏季百搭字母印花学生圆领宽松侧开叉中长款个性短袖T恤女</p>
                    <div class="goods_info">
                        <span class="price_info" >¥49.70</span>
                        <span class="fav_num"><em class="no_collect_icon"></em>600</span>
                    </div>
                </router-link>
            </div>
        </div>
       </div>
    </div>
	<div class="tui-jian-kong"></div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import jsonp from "jsonp"
export default {
    data(){
        return{

        }
	},
	methods:{
		getData(){
            var that = this;
          jsonp('http://api.meilishuo.com/h5/mwp.darwin.get/3/?mw-appkey=100028&mw-t=1501749336830&mw-ttid=NMMain%40mls_h5_1.0&data=%7B%22iidE%22%3A%221kbicaa%22%2C%22pid%22%3A6011%2C%22plat%22%3A%22h5%22%2C%22pageSize%22%3A12%7D&mw-sign=10396455ba8d5cba35af9fcfbaa044a7&_=1501749336832',{callback:'mwpCb2',},function(err, data){
              if(data){
                //   console.log(data)
                  

              }
          })
      },
	 
	},
	mounted(){
		this.getData()
	}
}
</script>

<style scoped lang="scss">
.parameter-top {
    height: .1rem;
    border-top: 1px solid #dedede;
    background: #f2f5f8;
  }
   .plr30 {
    padding-left: .3rem;
    padding-right: .3rem;
  }
   .parameter-head .title {
    display: block;
    line-height: .3rem;
    padding: .4rem 0 .3rem .3rem;
    color: #333;
    font-size: .3rem;
    
}
	.index-prevalent-content{
		display: flex;
		flex-wrap: wrap;
		.content-box{
			width: 187px;
			overflow: hidden;
			.iwf{
				display: block;
		    position: relative;
		    width: 96%;
		    margin: 0 0 7% 2%;
		    background: #fff;
		    .content-box-top{
    	    display: block;
			    height: 0;
			    width: 100%;
			    position: relative;
			    overflow: hidden;
	        padding-bottom: 130%;
        	background-size: 2.6rem auto;
        	background: #f5f5f5 url("http://s21.mogucdn.com/pic/150423/13x90c_ie2gczrygm4wcytcgazdambqgiyde_250x250.png") no-repeat center center;
        	img{
        		width:100%;
        	}
        	.content-box-tags{
		    		position: absolute;
				    bottom: 0;
				    width: 100%;
				    z-index: 2;
				    >img{
				    		float:left;
			    	    width: 0.7rem;
			    	    position: relative;
	    	        animation: fadeIn .4s ease both 0s;
	    	        margin-left: .1rem;
				    }
        	}
		    }
		    .title{
		    	display: block;
			    width: 100%;
			    margin-top: 0.18rem;
			    font-size: 0.22rem;
			    white-space: nowrap;
			    text-overflow: ellipsis;
			    text-align: center;
			    overflow: hidden;
			    height: .34rem;
			    color: #666;
		    }
		    .goods_info{
	    	    text-align: center;
				    height: .24rem;
				    overflow: hidden;
				    font-size: 0;
				    .price_info{
		    	    color: #FF3366;
					    text-align: center;
					    font-size: 0.26rem;
					    margin-right: 0.2rem;
					    line-height: 1;
				    }
				    .fav_num{
				    	color: #999999;
					    font-size: 0.26rem;
					    line-height: 1;
					    .no_collect_icon{
					    	display: inline-block;
						    background: url("../../image/xingxing.png") no-repeat;
						    background-size: contain;
						    width: .23rem;
						    height: .22rem;
						    margin-right: 0.07rem;
						    vertical-align: -0.01rem;
					    }
				    }
		    }
			}
		}
	}

.tui-jian-kong{
	width: 100%;
	height: 1.16rem;
}
</style>

