<template>
  <div class="index-prevalent-tab">
    <div class="nav-wrap clearfix">
      <a class="nav-item fl active" href="javascript:void(0);" >
        <span>流行</span>
      </a>
      <a class="nav-item fl" href="javascript:void(0);">
        <span>新款</span>
      </a>
      <a class="nav-item fl" href="javascript:void(0);" >
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
      
    }
  },
  computed:{
  	
  },
  methods:{
  	
  },
  mounted(){
  	
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
			}
			.nav-item{
		    display: inline-block;
    		text-align: center;
    		
			}
			a.active{
		    color: #FF3366;
		    span{
		    	border-bottom: 2px solid #FF3366;
			    height: 0.6rem;
			    line-height: 0.6rem;
			    padding: 0 0.06rem 0.1rem 0.06rem;
    		}
			}
		}
	}
</style>
