<template>
  <div class="mine root-box">
    <mine-header></mine-header>
    <mine-main></mine-main>
  </div>
</template>

<script>
import MineHeader from "./MineHeaderComponent"

import MineMain from "./MineSectionComponent"

import NavTab from "../NavTab"
export default {
  name: 'mine',
  data () {
    return {
      
    }
  },
  components:{
  	MineHeader,
  	NavTab,
  	MineMain
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.mine{
		background: #fff;
	}
</style>
