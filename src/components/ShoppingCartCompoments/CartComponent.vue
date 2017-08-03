<template>
  <div class="order root-box">
   <cart-kong></cart-kong>
    <nav-tab></nav-tab>
  </div>
</template>

<script>
import CartKong from './CartKong'
import Carts from './Carts'
export default {
  name: 'order',
  data () {
    return {
      
    }
  },
    components:{
      CartKong,
      Carts
      
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
