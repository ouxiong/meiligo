<template>
    <header class="mine-header">
    	<a href="javascript:history.go(-1)" class="mine-header-qianjin" id="mine-header-qianjin">
    		<img src="http://s17.mogucdn.com/p1/160922/idid_ie3wmnbvgftginzsmizdambqgayde_35x52.png"/>
    	</a>			
    	
    	<div class="title">
    		<a href="javascript:;">登录 - 美丽GO</a>
    	</div>
    	<a class="mine-header-register" href="/user/register">注册</a>		
    </header>
</template>

<script>

export default {
  name: 'mine-header',
  data () {
    return {
      
    }
  },
  methods:{
  	
  }
}
</script>

<style scoped lang="scss">
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
</style>