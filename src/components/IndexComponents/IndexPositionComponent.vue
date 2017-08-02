<template>
  <div class="index-mine">
  	<header class="mine-header">
    	<a @click="showRegister" class="mine-header-qianjin" id="mine-header-qianjin">
    		<img src="http://s17.mogucdn.com/p1/160922/idid_ie3wmnbvgftginzsmizdambqgayde_35x52.png"/>
    	</a>			
    	
    	<div class="title">
    		<a href="javascript:;">登录 - 美丽GO</a>
    	</div>
    	<a class="mine-header-register" href="/user/register">注册</a>		
    </header>
    <mine-section></mine-section>
  </div>
</template>

<script>
	//https://mainsite-restapi.ele.me/bgs/poi/search_poi_nearby?keyword=%E4%B8%8A%E6%B5%B7&offset=0&limit=20&longitude=116.407173&latitude=39.90469
import axios from "axios"

import MineSection from "./../MineComponents/MineSectionComponent"

export default {
  name: 'index-position',
  data () {
    return {
      
    }
  },
  methods:{
  	showRegister(){
  		this.$store.commit("AmendIsShow")
  	}
  },
  mounted(){

  },
  updated(){

  },
  watch:{
  	
  },
  components:{
  	MineSection
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/_base.scss';

.index-mine{
	width:100%;
	height:100%;
	background:#fff;
	position:fixed;
	left: 0;
	top:0;
	z-index: 100000;
	.mine-header{
		height: .92rem;
	    width: 100%;
	    background-color: #fff;
	    overflow: hidden;
	    text-align: center;
	    color: #333;
	    line-height: .92rem;
	    border-bottom: 1px solid rgba(51,51,51,.15);
	    display: flex;
	    justify-content: space-between;
	    .mine-header-qianjin{
	    	z-index: 5;
		    text-align: left;
		    vertical-align: middle;
		    width: .8rem;
		    padding-left: .3rem;
		    img{
		    	width: .2rem;
			    margin-top: .28rem;
		    }
	    }
	    .title{
	    	a{
		    	font-size: .35rem;
	    	}
	    }
	    .mine-header-register{
	    	z-index: 5;
		    font-size: .35rem;
		    float: right;
		    padding-right: .3rem;
		    height: .88rem;
	    }
	}
}

</style>
