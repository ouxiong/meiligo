<template>
  <div class="full-set">
  	<div class="full-set-box" v-for="(fullset,$index) in FullSet">
	    <div class="full-set-minbox">
	    	<router-link to="/detail" class="item full-set-box-left">
	    		<div class="full-set-left">
	    			<img :src="fullset.goodsList[0].image" alt="" />
	    		</div>
	    		<span class="price">套装价:￥{{fullset.goodsList[0].price}}</span>
	    	</router-link>
	    	<div class="full-set-box-right">
		    	<router-link to="/detail" class="right-top">
		    		<div class="full-set-top">
		    			<img :src="fullset.goodsList[1].image"/>
		    		</div>
		    		<span class="price">套装价:￥{{fullset.goodsList[1].price}}</span>
		    	</router-link>
		    	<router-link to="/detail" class="right-bottom">
		    		<div class="full-set-bottom">
		    			<img :src="fullset.goodsList[2].image"/>
		    		</div>
		    		<span class="price">套装价:￥{{fullset.goodsList[2].price}}</span>
		    	</router-link>
	    	</div>
	    </div>
	    <fill></fill>
	    <fill></fill>
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
	
	import Fill from "../FillComponent"
export default {
  name: 'start-almirah-content',
  data () {
    return {
      FullSet:[],
      index:1
    }
  },
  computed:{
  	
  },
  methods:{
  	getFullSet(){
			let that = this;
			jsonp("http://m.meilishuo.com/dapei/aj/detailInfo?offset=0&frame=0&trace=0&limit=4&endId=0&page=1", null, function (err, res) {
				  if (res) {
				  	console.log(res.data)
				  	res.data.forEach((item,i)=>{
				  		that.FullSet.push(item)
				  	})
				  }
				});
		},
		loadMore() {
		  this.loading = true;
		  this.index++;
		  this.getFullSet()
		}
  },
  mounted(){
		this.getFullSet()
  },
  components:{
  	Fill
  },
  watch:{
  	
  }
}
</script>

<style scoped lang="scss">
	.full-set{
		padding: .2rem .2rem 0;
    color: #333;
    position: relative;
		.full-set-box{
			position: relative;
			.full-set-minbox{
		    background-color: #fff;
    		overflow: hidden;
    		width: 100%;
    		height: 7.1rem;
    		display: flex;
    		justify-content: space-between;
    		.price{
				    position: absolute;
				    bottom: 0;
				    right: 0;
				    background-color: rgba(0,0,0,.5);
				    color: #fff;
				    padding: .06rem .08rem;
				    font-size: .24rem;
    			}
    		.full-set-box-left{
    			display: block;
    			width: 4.72rem;
    			height: 7.1rem;
    			background-size: cover;
    			overflow: hidden;
    			position: relative;
    			background: url("https://s10.mogucdn.com/mlcdn/c45406/170609_3jaij6bl7lcje0462fl424g5glad1_80x80.png") no-repeat center center;
    			.full-set-left{
    				width:100%;
    				height:100%;
    				>img{
    					width:100%;
    					height:100%
    				}
    			}
    			
    		}
    		.full-set-box-right{
    			width:auto;
    			width: 2.34rem;
    			
    			.right-top{
    				display: block;
    				width:100%;
    				height: 3.53rem;
    				background-size: cover;
				    overflow: hidden;
				    position: relative;
				    background: url("https://s10.mogucdn.com/mlcdn/c45406/170609_3jaij6bl7lcje0462fl424g5glad1_80x80.png") no-repeat center center;
    				.full-set-top{
    					height:100%;
    					width:100%;
	    				>img{
	    					width:100%;
	    					height:100%
	    				}
    				}
    			}
    				.right-bottom{
    					display: block;
    					width: 100%;
    					height: 3.53rem;
    					background-size: cover;
				    	overflow: hidden;
				    	position: relative;
		    	    background: url("https://s10.mogucdn.com/mlcdn/c45406/170609_3jaij6bl7lcje0462fl424g5glad1_80x80.png") no-repeat center center;
				    	.full-set-bottom{
				    		width:100%;
				    		height:100%;
		    				>img{
		    					width:100%;
		    					height:100%
		    				}
				    	} 
    				}
    		}
			}
		}
	}
</style>
