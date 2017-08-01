<template>
  <div class="outmai root-box">
    <index-header></index-header>
    <index-banner></index-banner>
    <index-wrap></index-wrap>
    <index-group-booking></index-group-booking>
    <index-preference></index-preference>
    <fashion></fashion>
    <prevalent></prevalent>
    <transition enter-active-class="animated fadeInDownBig" leave-active-class="animated fadeOutRight">
    	<index-position v-if="isShow"></index-position>
    </transition>
    <div class="perch"></div>
    <nav-tab></nav-tab>
  </div>
</template>

<script>
	
	import  {mapState,mapGetters,mapActions} from "vuex"
	//引入子组件
	import NavTab from "../NavTab"
	
	import IndexHeader from "./IndexHeaderComponent"
	
	import IndexBanner from "./IndexBannerComponent"
	
	import IndexWrap from "./IndexWrapComponent"
	
	import IndexPosition from "./IndexPositionComponent"
	
	import IndexGroupBooking from "./IndexGroupBookingComponent"
	
	import IndexPreference from "./PreferenceComponents/IndexPreferenceComponent"
	
	import Fashion from "./FashionComponents/FashionComponent"
	
	import Prevalent from "./PrevalentComponents/PrevalentComponent"
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
  	IndexWrap,
  	IndexGroupBooking,
  	IndexPreference,
  	Fashion,
  	Prevalent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
