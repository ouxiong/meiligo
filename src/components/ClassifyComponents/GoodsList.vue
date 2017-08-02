<template>
  <div>
      <goods-list-header></goods-list-header>
      <goods-list-content></goods-list-content>
  </div>
  
</template>

<script>
import GoodsListContent from './GoodsList/GoodsListContent'
import GoodsListHeader from './GoodsList/GoodsListHeader'

export default {
  data(){
      return{

      }
  },
  components:{
      GoodsListContent,
      GoodsListHeader

  }
}
</script>

<style scoped lang="scss">
	
	
</style>
