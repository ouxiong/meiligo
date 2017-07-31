<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
document.getElementsByTagName("html")[0].style.fontSize=window.innerWidth/7.5+"px";
// document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5+"px";
// console.log(document.documentElement.clientWidth)
export default {
  name: 'app'
}
</script>

<style lang="scss">
	@import "./styles/_base.scss";
	@import "./styles/_common.scss";
	@import "./styles/_reset.scss";
	
</style>
