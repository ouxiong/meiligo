<template>
  <div class="outmai root-box">
    <index-header v-if="!searchItemShow"></index-header>
    <SearchItem v-if="searchItemShow"></SearchItem>
    <index-banner v-if="!searchItemShow"></index-banner>
    <index-wrap v-if="!searchItemShow"></index-wrap>
    <index-group-booking v-if="!searchItemShow"></index-group-booking>
    <index-preference v-if="!searchItemShow"></index-preference>
    <fashion v-if="!searchItemShow"></fashion>
    <prevalent v-if="!searchItemShow"></prevalent>
    <transition enter-active-class="animated fadeInDownBig" leave-active-class="animated fadeOutRight">
    	<index-position v-if="isShow"></index-position>
    </transition>
    <div class="perch" v-if="!searchItemShow"></div>
    <nav-tab v-if="!searchItemShow"></nav-tab>
  </div>
</template>

<script>
	
	import  {mapState,mapGetters,mapActions} from "vuex"
	//引入子组件
	import NavTab from "../NavTab"
	
	import IndexHeader from "./IndexHeaderComponent"
	
	import SearchItem from "./SearchItemComponents/SearchItemComponent"
	
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
      scroll: ''
    }
  },
  computed:{
  	...mapState(["isShow","searchItemShow"])
  },
  methods:{
  	menu() {
        this.scroll = document.body.scrollTop;
        if(this.scroll>2000){
        	this.$store.commit("AmendgoTopShow")
        }else{
        	this.$store.commit("AmendgoTopHide")
        }
      }
  },
  mounted(){
  	window.addEventListener('scroll', this.menu)
  },
  watch:{
  	
  },
  components:{
  	IndexHeader,
  	IndexPosition,
  	IndexBanner,
  	IndexWrap,
  	IndexGroupBooking,
  	IndexPreference,
  	Fashion,
  	Prevalent,
  	SearchItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
