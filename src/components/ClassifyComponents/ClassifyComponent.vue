<template>
  <div class="finder root-box">
    <index-header v-if="!searchItemShow"></index-header>
    <search-item v-if="searchItemShow"></search-item>
    <div class="classifyTitle" v-if="!searchItemShow">本周流行</div>
    <div class="itemBox" v-if="!searchItemShow">
      <classify-item></classify-item>
    </div>
    <nav-tab v-if="!searchItemShow"></nav-tab>
  </div>
</template>

<script>
	
	
	import  {mapState,mapGetters,mapActions} from "vuex"
	
import IndexHeader from "../IndexComponents/IndexHeaderComponent"
import SearchItem from "../IndexComponents/SearchItemComponents/SearchItemComponent"
import ClassifyItem from "./ClassifyItem"
export default {
  name: 'finder',
  data () {
    return {
      
    }
  },
  computed:{
  	...mapState(["isShow","searchItemShow"])
  },
   components:{
      IndexHeader,
      ClassifyItem,
      SearchItem

   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.classifyTitle{
    width:100%; 
    overflow: hidden;
    padding: .2rem;
    color: #333;
    font-size: 0.32rem;
    font-weight: normal;
    float: left;
    background: #fff;
    border-bottom: 0.02rem solid #eee;
}
</style>
