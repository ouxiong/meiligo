<template>
  <div class="index-prevalent-content" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="100">
    <div class="content-box" v-for="item in preContent">
    	<a class="iwf" href="" >
    		<div class="content-box-top">
    			<div class="content-box-tags">
    				<img class="img-tag" :src="item.leftbottom_taglist[0]" >
    			</div>
    			<img :src="item.show.img" alt=""/>
    		</div>
    		<p class="title"  v-text="item.title"> </p>
    		<div class="goods_info">
    			<span class="price_info" v-text="item.price"></span>
    			<span class="fav_num"><em class="no_collect_icon"></em>{{item.cfav}}</span>
    		</div>
    	</a>
    </div>
  </div>
</template>

<script>
	import Vue from "vue"
	
	import  {mapState,mapGetters,mapActions} from "vuex"
	
	import jsonp from "jsonp"
	
	import { InfiniteScroll } from 'mint-ui';

	Vue.use(InfiniteScroll);
	//引入子组件
export default {
  name: 'index-prevalent-content',
  data () {
    return {
      preContent:[],
      index:1
    }
  },
  computed:{
  	...mapState(["sort"])
  },
  methods:{
  	getPreferenceContent(){
			let that = this;
			jsonp("http://list.meilishuo.com/search?frame="+this.index+"&page="+this.index+"&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=cae3bc16-7395-4df9-b9af-aa6cdf6599ef&sort="+this.sort, null, function (err, res) {
				  if (res) {
				  	res.data.list.forEach((item,i)=>{
				  		that.preContent.push(item)
				  	})
				  }
				});
		},
		loadMore() {
		  this.loading = true;
		  this.index++;
		  this.getPreferenceContent()
		}
  },
  mounted(){
//	this.getPreferenceContent()
  },
  components:{
  	
  },
  watch:{
  	sort(){
  		this.preContent=[];
  		this.getPreferenceContent()
  	}
  }
}
</script>
<!--http://list.meilishuo.com/search?frame=2&page=2&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=cae3bc16-7395-4df9-b9af-aa6cdf6599ef&sort=pop&trace=0&cpc_offset=0&_=1501594307435&callback=jsonp6-->
<!--http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=cae3bc16-7395-4df9-b9af-aa6cdf6599ef&sort=pop&_=1501594300829&callback=jsonp3-->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=cae3bc16-7395-4df9-b9af-aa6cdf6599ef&sort=new&_=1501643053818&callback=jsonp6-->
<style scoped lang="scss">
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
						    background: url("../../../image/xingxing.png") no-repeat;
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
</style>
