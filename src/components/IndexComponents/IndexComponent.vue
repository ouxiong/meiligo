<template>
  <div class="outmai root-box">
    <index-header :position="position" :showPosition="showPosition"></index-header>
    <index-banner></index-banner>
    <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
    	<index-position v-if="isShow" :position="position" :showPosition="showPosition"></index-position>
    </transition>
    
    <nav-tab></nav-tab>
  </div>
</template>

<script>
	
	import  {mapState,mapGetters,mapActions} from "vuex"
	
	import NavTab from "../NavTab"
	
	import IndexHeader from "./IndexHeaderComponent"
	
	import IndexBanner from "./IndexBannerComponent"
	
	
	import IndexPosition from "./IndexPositionComponent"
	
export default {
  name: 'outmai',
  data () {
    return {
      isShow:false
    }
  },
  computed:{
  	...mapState(["position"])
  },
  methods:{
  	showPosition(){
  		this.isShow = !this.isShow
  	},
  	...mapActions(["getPosition"])
  },
  mounted(){
  	if(!this.position.latitude){
  		this.getPosition()
  		
  	}
  },
  components:{
  	IndexHeader,
  	IndexPosition,
  	IndexBanner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
