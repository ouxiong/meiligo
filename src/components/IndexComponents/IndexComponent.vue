<template>
  <div class="outmai root-box">
    <index-header></index-header>
    <index-banner></index-banner>
    <index-wrap></index-wrap>
    <transition enter-active-class="animated fadeInDownBig" leave-active-class="animated fadeOutRight">
    	<index-position v-if="isShow"></index-position>
    </transition>
    
    <nav-tab></nav-tab>
  </div>
</template>

<script>
	
	import  {mapState,mapGetters,mapActions} from "vuex"
	
	import NavTab from "../NavTab"
	import IndexHeader from "./IndexHeaderComponent"
	import IndexBanner from "./IndexBannerComponent"
	import IndexWrap from "./IndexWrapComponent"
	import IndexPosition from "./IndexPositionComponent"
	
export default {
  name: 'outmai',
  data () {
    return {
      
    }
  },
  computed:{
  	...mapState(["isShow"])
  },
  methods:{
  	
  },
  mounted(){
  	
  },
  components:{
  	IndexHeader,
  	IndexPosition,
  	IndexBanner,
  	IndexWrap
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
