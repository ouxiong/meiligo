<template>
  <div class="index-preference">
  	<fill-gray></fill-gray>
  	<fill></fill>
    <count-down></count-down>
    <preference-item></preference-item>
  </div>
</template>

<script>
	
	import  {mapState,mapGetters,mapActions} from "vuex"
	//引入子组件
	import CountDown from "./CountDownComponent"
	
	import PreferenceItem from "./PreferenceItemComponent"
	
	import Fill from "./../../FillComponent"
	
	import FillGray from "./../../FillGrayComponent"
	
	
export default {
  name: 'index-preference',
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
  	CountDown,
  	Fill,
  	FillGray,
  	PreferenceItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.index-preference{
		
	}
</style>
