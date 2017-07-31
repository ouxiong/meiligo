<template>
  <div class="outmain-position">
    <header>
    	<p>
    		<span @click="showPosition" class="iconfont icon-qianjin-copy"></span>
    		选择地址
    	</p>
    	<input v-model="keyword" @keyup.enter="search" type="search" placeholder="请输入地址" autofocus="autofocus" class="search-inp">
    </header>
    <section>
    	<div @click="changePosition(item)" class="info-box" v-for="item in address">
    		<p>
    			<span class="AddressCell-3dWFD_0" v-text="item.name"></span><!---->
    			<span class="AddressCell-2NFpU_0"></span>
    		</p>
    		<p class="info-address" v-text="item.address"></p>
    	</div>
    </section>
  </div>
</template>

<script>
	//https://mainsite-restapi.ele.me/bgs/poi/search_poi_nearby?keyword=%E4%B8%8A%E6%B5%B7&offset=0&limit=20&longitude=116.407173&latitude=39.90469
import axios from "axios"



export default {
  name: 'outmain-position',
  props:["position","showPosition"],
  data () {
    return {
      keyword:"",
      address:[]
    }
  },
  methods:{
  	search(){
  		axios.get('https://mainsite-restapi.ele.me/bgs/poi/search_poi_nearby',{
                  params:{
                  	keyword:this.keyword,
                  	offset:0,
                  	limit:20,
                    latitude:this.position.latitude,
                		longitude:this.position.longitude
                  }
               }).then(function(response){
         						this.address=response.data
                }.bind(this))

  	},
  	changePosition(item){
  		this.showPosition();
  		this.$store.commit("getPosition",{
  			latitude:item.latitude,
    		longitude:item.longitude,
    		address:item.name
  		})
  	}
  },
  mounted(){

  },
  updated(){

  },
  watch:{
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/_base.scss';

.outmain-position{
	width:100%;
	height:100%;
	background: #F5F5F5;
	position: absolute;
	left:0;
	top: 0;
	z-index: 9999;
	header{
    width: 100%;
    color: #fff;
    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
    background-image: linear-gradient(90deg,#0af,#0085ff);
    text-align: center;
    font-size: .32rem;
    padding-bottom: .32rem;
    .search-inp{
    	margin-top: .133333rem;
	    width: 90%;
	    height: .733333rem;
	    line-height: .533333rem;
	    border-radius: .733333rem;
	    padding: 0 .48rem;
	    font-size: .346667rem;
	    border:none;
	    outline: none;
    }
    p{
    	padding:15px 0;
    	font-size: 0.47rem;
    	position: relative;
    	span{
    		position: absolute;
    		left: 15px;
    		font-size: 0.7rem;
    		top:10px;
    	}
    }
	}
	section{
		.info-box{
			font-size: .32rem;
	    background-color: #fff;
	    padding: .266667rem .4rem;
	    @include one-pixel;
	    .info-address{
	    	color:#999;
	    }
		}
	}
}


</style>
