<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
document.getElementsByTagName("html")[0].style.fontSize=window.innerWidth/7.5+"px";
export default {
  name: 'app'
}
</script>

<style lang="scss">
	@import "./styles/_base.scss";
	@import "./styles/_common.scss";
	@import "./styles/_reset.scss";
	
</style>
