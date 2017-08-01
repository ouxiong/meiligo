<template>
  <div class="finder root-box">
    <index-header></index-header>
    <div class="classifyTitle">本周流行</div>
    <div class="itemBox">
      <classify-item></classify-item>
    </div>
    <nav-tab></nav-tab>
  </div>
</template>

<script>
import IndexHeader from "../IndexComponents/IndexHeaderComponent"
import ClassifyItem from "./ClassifyItem"
export default {
  name: 'finder',
  data () {
    return {
      
    }
  },
   components:{
      IndexHeader,
      ClassifyItem

   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
