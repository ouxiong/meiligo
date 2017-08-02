<template>
  <div class="index-prevalent-tab" :class="fixedShow?'index-prevalent-tab-top':'index-prevalent-tab'">
    <div class="nav-wrap clearfix">
      <a class="nav-item fl" href="javascript:void(0);" @click="setActive('fashion','pop')" :class="active=='fashion'?'active':''">
        <span>流行</span>
      </a>
      <a class="nav-item fl" href="javascript:void(0);" @click="setActive('new','new')" :class="active=='new'?'active':''">
        <span>新款</span>
      </a>
      <a class="nav-item fl" href="javascript:void(0);" @click="setActive('sift','sell')" :class="active=='sift'?'active':''">
        <span>精选</span>
      </a>
    </div>
  </div>
</template>

<script>
	
	import  {mapState,mapGetters,mapActions} from "vuex"
	//引入子组件
	
export default {
  name: 'index-prevalent-tab',
  data () {
    return {
      fixedShow:false,
      active:"fashion"
    }
  },
  computed:{
  	
  },
  methods:{
  	setActive(active,sort){
  		this.active=active
  		this.$store.commit("ChangeSort",sort)
  	}
  },
  mounted(){
  	var that = this;
  	document.addEventListener("scroll",function(){
  		if(document.body.scrollTop>=2710){
  			that.fixedShow=true;
  		}else{
  			that.fixedShow=false;
  		}
  	})
  },
  components:{
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.index-prevalent-tab{
		width:100%;
		position: relative;
	}
	.index-prevalent-tab-top{
		width:100%;
		position: fixed;
		top:0;
		z-index: 9999;
	}
	.nav-wrap{
			background-color: #fff;
	    height: 0.8rem;
	    line-height: 0.8rem;
	    overflow: hidden;
	    font-size: 0.3rem;
	    width: 100%;
	    border-bottom: 1px solid #eee;
	    display: flex;
			a{
				flex-grow: 1;
				
				-webkit-tap-highlight-color:rgba(0,0,0,0);
				span{
					border-bottom: 2px solid #FFf;
					height: 0.6rem;
			    line-height: 0.6rem;
			    padding: 0 0.06rem 0.1rem 0.06rem;
				}
			}
			.nav-item{
		    display: inline-block;
    		text-align: center;
    		
			}
			a.active{
		    color: #FF3366;
		    span{
		    	border-color:#FF3366;
    		}
			}
		}
</style>
