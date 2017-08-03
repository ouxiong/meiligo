<template>
  <div class="start-almirah-content">
  	<div id="navListPromotion" class="nav-wrap">
			<a class="nav-item active">
				<span>明星同款</span>
			</a>
			<a class="nav-item" >
				<span>酷炫街头风</span>
			</a>
		</div>
		<start-almirah-content-item></start-almirah-content-item>
  </div>
</template>

<script>
import jsonp from "jsonp"
	
//引入组件
import StartAlmirahContentItem from "./StartAlmirahContentItem"
export default {
  name: 'start-almirah-content',
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
  	StartAlmirahContentItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.start-almirah-content{
    overflow: hidden;
    font-size: 0.26rem;
    color: #000;
    width:100%;
    .nav-wrap{
    	display: flex;
    	background-color: #F099B0;
	    .nav-item{
		    display: inline-block;
		    text-align: center;
		    height: 0.8rem;
		    line-height: 0.8rem;
		    overflow: hidden;
		    width:50%;
		    color:#000;
		    &.active{
			    color: white;
		    	background-color: #ED4F79;
		    }
	    }
    }
	}
</style>
