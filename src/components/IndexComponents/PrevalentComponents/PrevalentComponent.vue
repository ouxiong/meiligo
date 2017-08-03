/* index 流行 */
<template>
  <div class="index-prevalent">
    <prevalent-tab></prevalent-tab>
    <prevalent-content></prevalent-content>
  </div>
</template>

<script>
	
	import  {mapState,mapGetters,mapActions} from "vuex"
	//引入子组件
	import PrevalentTab from "./PrevalentTabComponent"
	
	import PrevalentContent from "./PrevalentContentComponent"
export default {
  name: 'index-prevalent',
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
  	PrevalentTab,
  	PrevalentContent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
