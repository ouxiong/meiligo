<template>
  <div class="search-item">
  	<header class="index-header-box">
			<form id="index-header-form" class="" method="post">
				<a href="/" class="home_btn"></a>
				<input class="index-header-search" type="search" placeholder="套装" data-value="套装">
				<div id="index-header-mine" class="index-header-mine" @click="getSearchItemShow">取消</div>
			</form>
		</header>
    <div class="search-item-box">
    	<span class="search-item-icon"></span>
    	<h3 class="search-item-title">热门搜索</h3>
    	<ul class="search-item-list">
    		<li class="show-log-item" v-for="_seach in searchItem">
    			<a href="" class="search-item-btn" v-text="_seach.words" :class="_seach.is_red==1?'red':''"></a>
    		</li>
    	</ul>
    </div>
  </div>
</template>

<script>
	import  {mapState,mapGetters,mapActions} from "vuex"
	
	import jsonp from "jsonp"
	//引入子组件
	import IndexHeader from "../IndexHeaderComponent"
export default {
  name: 'search-item',
  data () {
    return {
      searchItem:[]
    }
  },
  computed:{
  	
  },
  methods:{
  	getSearchItem(){
			let that = this;
			jsonp("http://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730%2C59540%2C42287", null, function (err, res) {
				  if (res) {
				  	that.searchItem=res.data["5868"].list
				  }
				});
		},
		getSearchItemShow(){
  		this.$store.commit("ChangeSearchItemShow")
  	}
  },
  mounted(){
  	this.getSearchItem()
  },
  components:{
  	IndexHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.search-item{
		position: relative;
		z-index: 10000;
		width:100%;
		height:100%;
		background: #fff;
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
				background: url("../../../image/KAILI-logo.png") no-repeat center;
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
		    background: #F4F4F4 url("../../../image/search.png") no-repeat 0.2rem center;
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
    		background-size: .34rem .3rem;
	    }
    }
		.search-item-box{
			color: #666;
	    position: relative;
	    margin-left: 0.3rem;
	    padding-top: 0.3rem;
	    padding-bottom: 0.5rem;
	    .search-item-icon{
	    	position: absolute;
		    left: -0.07rem;
		    display: inline-block;
		    width: 0.22rem;
		    height: 0.3rem;
		    background: url("../../../image/xiaohuoyan.png") no-repeat;
		    background-size: contain;
	    }
	    .search-item-title{
		    font-size: 0.3rem;
		    font-weight: normal;
		    padding-left: 0.3rem;
		    margin-bottom: 0.05rem;
		    
	    }
	    .search-item-list{
		    	.show-log-item{
	    		    float: left;
					    padding: .08rem .22rem;
					    margin-top: 0.25rem;
					    background-color: #F4F4F4;
					    margin-left: 0.2rem;
					    border-radius: 0.4rem;
					    a{
					    	font-size: 0.24rem;
					    }
					    a.red{
					    	color:#f36;
					    }
		    	}
	    }
		}
	}
</style>
