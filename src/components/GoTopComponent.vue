<template>
  <div class="go-top">
    <a @click="goTop" v-show="goTopShow" class="to-top-btn"></a>
  </div>
</template>

<script>
	import  {mapState,mapGetters,mapActions} from "vuex"
	//引入子组件
	
	
	
export default {
  name: 'go-top',
  data () {
    return {
      
    }
  },
  computed:{
  	...mapState(["goTopShow"])
  },
  methods:{
  	goTop(){
  		document.body.scrollTop=0
  	}
  },
  mounted(){
  	
  },
  components:{
  	
  },
  watch:{
  	
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.to-top-btn{
	    	position: fixed;
		    right: 0.2rem;
		    bottom: 1.35rem;
		    z-index: 99999;
		    /*display: none;*/
		    width: 0.86rem;
		    height: 0.86rem;
		    background: url(http://s16.mogucdn.com/p1/160527/upload_ie4doyjzmvsdsn3dhazdambqgiyde_86x86.png) no-repeat;
		    background-size: 100% 100%;
	    }
</style>
