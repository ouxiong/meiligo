<template>
  <div class="hot-summer-content">
		<div id="content-nav" class="content-nav" :class="fixedShow?'hot-summer-tab-top':''">
			<a @click="setNum($index)" class="nav-item" v-for="(_nav,$index) in HotSummerNav" :class="num==$index?'active':''">
				<span v-text="_nav.cname"></span>
			</a>
		</div>
		<section>
			<div class="content-main" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
				<hot-summer-content-item :content="_content" v-for="(_content,$index) in HotSummerContent" key="$index"></hot-summer-content-item>
			</div>
		</section>
  </div>
</template>

<script>
	
	//接口对比
//https://simba-api.meilishuo.com/mlselection/top/v1/topGoodsList/h5?frame=1&page=1&cid=shangyi&type=rxdp&limit=10&offset=0&_=1501732666434
//https://simba-api.meilishuo.com/mlselection/top/v1/topGoodsList/h5?frame=2&page=2&cid=shangyi&type=rxdp&limit=10&offset=10&trace=0&cpc_offset=&_=1501734923746
//https://simba-api.meilishuo.com/mlselection/top/v1/topGoodsList/h5?frame=1&page=1&cid=qunzi&type=rxdp&limit=10&offset=0&_=1501743328169	
	import jsonp from "jsonp"
	
	//引入组件
	import HotSummerContentItem from "./HotSummerContentItem"
export default {
  name: 'hot-summer-content',
  data () {
    return {
    nav_active:["shangyi","qunzi","kuzi","xiebaopei","nanyou","caizhuang"],
     HotSummerNav:[],
     HotSummerContent:[],
     num:0,
     fixedShow:false,
     page:1,
     offset:0,
     cid:"shangyi"
    }
  },
  methods:{
  	//获取导航栏的数据
		getHotSummerNav(){
			let that = this;
			
			jsonp("https://simba-api.meilishuo.com/mlselection/top/v1/categoryInfo/h5?type=rxdp", null, function (err, res) {
				  if (res) {
					  var len = res.data.rows.length
					  for(var i =1;i<len;i++){
					  	that.HotSummerNav.push(res.data.rows[i])
					  }
				  }
				});
		},
		setNum(num){
			this.num=num;
			this.HotSummerContent=[];
			this.cid = this.nav_active[num];
		},
		//获取导航栏对应的数据
		getHotSummerContent(){
			let that = this;
			console.log(this.cid)
			jsonp("https://simba-api.meilishuo.com/mlselection/top/v1/topGoodsList/h5?cid="+this.cid+"&type=rxdp&limit=10&frage="+this.page+"&page="+this.page+"&offset="+this.offset, null, function (err, res) {
				  if (res) {
				  	console.log(res.data.rows)
					  res.data.rows.forEach((item,i)=>{
					  	that.HotSummerContent.push(item);
					  })
				  }
				});
				this.page++;
				this.offset+=10;
		},
		loadMore() {
		  this.loading = true;
		  this.getHotSummerContent()
		}
  },
  mounted(){
		this.getHotSummerNav();
		var that = this;
  	document.addEventListener("scroll",function(){
  		if(document.body.scrollTop>=1573){
  			that.fixedShow=true;
  		}else{
  			that.fixedShow=false;
  		}
  	})
  },
  updated(){
  	
  },
  watch:{
  	
  },
  components:{
  	HotSummerContentItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.hot-summer-content{
		width:100%;
		.hot-summer-tab-top{
			width:100%;
			position: fixed;
			top:0;
			z-index: 9999;
		}
		.content-nav{
	    overflow: hidden;
	    font-size: 0.32rem;
	    width: 100%;
	    margin: auto;
	    background-color: #fff;
	    position: sticky;
	    display:flex;
	    .nav-item{
	    	display: inline-block;
	    	flex-grow: 1;
		    text-align: center;
		    height: 0.8rem;
		    line-height: 0.8rem;
		    overflow: hidden;
		    color: #666;
		    &:last-child span{
		    	border: none;
		    }
		    &.active{
    	    background-repeat: no-repeat;
			    background-position: 34%;
			    background-size: 1.2rem;
			    color: #fff;
			    background-image: url("https://s10.mogucdn.com/mlcdn/c45406/170419_6b2ac5h07j4gi90d6gg67cj7j919f_120x52.jpg");
		    }
		    span{
		    	width: 100%;
			    display: inline-block;
			    white-space: nowrap;
			    position: relative;
			    line-height: .32rem;
			    border-right: 1px solid #999;
		    }
	    }
		}
		.content-main{
	    margin: 0 .3rem;
    	margin-top: .38rem;
    	position: relative;
    	display: flex;
    	justify-content: space-between;
    	flex-wrap: wrap;
		}
	}
</style>
