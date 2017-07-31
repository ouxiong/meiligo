<template>
  <div>
      <div class="city-header">	
			<div class="city-back"> 
				<div class="city-key"></div>
			</div>
			<h1 class="cityheader-title">
				<div class="city-tab" >
					<span class="header-city" @click="changeInside" :class="{active:isinside}"  >国内</span>
					<span class="header-city" @click="changeOutside" :class="{active:isoutside}" >海外</span>
				</div>			
			</h1>
		</div>  
        <div class="header-keyword">
			<input v-model="value" @focus="handleInputFocus" @blur="handleInputBlur" class="city-keyword" :class="{textCenter:textalign}"  :placeholder="placeholder">		
		</div>
		<ul class="key-city-ul" v-if="listShow" >
				<li  class="key-city-list border-bottom" v-for="(item,index) in cityList" >		
					{{item.name}}
				</li>
		</ul>
		
  </div>
</template>

<script>

export default {
  props:['cityInfo'],
  data () {
    return {
        isinside : true,
        isoutside : false,
		listShow : false,
		value : null,
		textalign : true,
		placeholder : '请输入城市名或者拼音'
      
    }
  },
  methods:{
      changeInside:function(){
        this.isinside = true;
        this.isoutside = false;
		document.body.scrollTop=0;
		// 调用indexcity里面的changeside并传值
		this.$emit("changeside",true);
      },
      changeOutside:function(){
        this.isinside = false;
        this.isoutside = true;
		document.body.scrollTop=0;
		this.$emit("changeside",false);
    
	  },
	  handleInputFocus:function(){
		  this.textalign = false;
		  this.placeholder = ''
	  },
	  handleInputBlur:function(){
		  this.textalign = true;
		  this.placeholder = '请输入城市名或者拼音'
	  }
  },
  watch:{
	  value:function(){
		  if(this.value){
			// 修改list让他显示
			this.listShow = true;
			var msg = this.cityInfo;
			var words = this.value.toString().toLowerCase();
			words.split("").map((word, num) => {
				msg = msg.filter((value, index) => {
					var strLetter = value.pinyin.charAt(num).toLowerCase();
					var strName = value.name.charAt(num);
					return (word == strLetter) || (word == strName);
				})
			})
			this.cityList = msg;
			if(msg == ''){
				this.cityList = [{name:'查询不到，请检查检索词'}]
				
			}
			// 调用indexcity里面的isshow
			
			this.$emit("isShow", false);
			}else {
				this.listShow = false;
				this.$emit("isShow", true);
			}
	
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../../styles/_base.scss';
    .city-header{
	    display: flex;
	    position: fixed;
	    top: 0;
	    left: 0;
	    height: .88rem;
	    width: 100%;
	    background: #ff5777;
	    color: #fff;
	    z-index: 100;
	}
	.city-back{
		width:.88rem; 
		height: .88rem;
	}
	.city-key{
		width: .24rem;
		height: .24rem;
		border-left: .04rem solid #fff;
		border-bottom: .04rem solid #fff;
		margin: .3rem;
		transform: rotateZ(45deg);
	}
	.textCenter{
		text-align: center;
	}
	.cityheader-title{
	    box-sizing: border-box;
	    flex: 1;
	    position: relative;
	    text-align: center;
	}
	
	.header-city{
	    display: inline-block;
	    width: 2rem;
	    height: .60rem;
	    line-height: .6rem;
	    margin-top: .15rem;
	    background: #ff5777;
	    font-size: .28rem;
	    border: .02rem solid #fff;
    }
    .city-tab{
	    display: inline-block;
	    margin-left: -.42rem;
	    font-size: 0;
    }
    .active{
        background: #fff;
        color: #ff5777;
    }
	.header-city:first-of-type {
	    border-radius: .06rem 0 0 .06rem;
	    border-right: none;
	}  
	.header-city:last-of-type {
	    border-radius: 0 .06rem .06rem 0;
	 	border-left: none;
    }
    /*keyword  */
    .header-keyword {
	    margin-top: .88rem;
	    padding: 0 .2rem .1rem .2rem;
	    background: #ff5777;
	    font-size: .26rem;
	    color: #9e9e9e;
	}
	.city-keyword {
	    display: block;
	    width: 100%;
	    height: 0.6rem;
	    line-height: .3rem;
	    padding: .16rem 0 .16rem .1rem;
	    background: #fff;
	    border: 0;
	    -webkit-border-radius: .06rem;
	    -moz-border-radius: .06rem;
        border-radius: .06rem;
        
	}
	/* 搜索 */
	.key-city-ul{
		width:100%;
		min-height:100%;
		background: #212121;
	}
	.key-city-list{
	    line-height: .76rem;
	    padding-left: .2rem;
	    font-size: .28rem;
	    color: #212121;
	    background: #fff;
	}
	.border-bottom{

		@include one-pixel(#ccc);

	}
</style>