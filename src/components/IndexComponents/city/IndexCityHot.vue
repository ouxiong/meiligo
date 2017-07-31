<template>
  <div >
        <div class="cityarea-group">
			<div class="cityarea-title">您的位置</div>
			<div class="cityarea-content city-now border-topbottom">
				<div class="cityitem-light">
					<span  class="cityitem-name cityitem-current">北京</span>
				</div>
			</div>
		</div>

		<div>
			<div class="cityarea-title">热门城市</div>
			<div class="cityarea-content city-now border-topbottom">
				<div  class="cityitem-light"  v-for="(item,index) in hotCity" >
                   
					<span class="cityitem-name">{{item.name}}</span>
				</div>
			</div>
		</div>
  </div>
</template>

<script>

export default {
  name: 'cityHot',
  props:['hotCity'],
  data () {
    return {
      
    }
  },
  mounted(){
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .cityhot {
        width: 100%;
        background: #f5f5f5;
	}
	.cityarea-title {
	    line-height: .54rem;
	    padding-left: .3rem;
	    color: #616161;
	    font-size: .24rem;
	}
	.city-now {
	    padding-top: .04rem;
	    padding-bottom: .24rem;
	}
	.cityarea-content {
	    overflow: hidden;
	    padding-right: .5rem;
	    padding-left: .2rem;
	    background: #fff;
	}
	.cityarea-content::before, .cityarea-content::after {
		border-color: #c9cccd;
	}
	.cityitem-light {    
	    box-sizing: border-box;
	    float: left;
	    width: 33.33%;
	    padding: .2rem .14rem 0 .1rem;
	}
	.cityitem-name {
	    display: block;
	    line-height: 28px;
        text-align: center;
        font-size: 0.28rem;
	    color: #212121;
	    border: .02rem solid #c9cccd;
	    border-radius: .06rem;
	}
	.cityitem-current {
		border-color: #ff5777;
	}
</style>