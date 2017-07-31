// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from "./_vuex/store"

Vue.config.productionTip = false



Vue.use(VueResource)

//引入组件mint-ui
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI);




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
