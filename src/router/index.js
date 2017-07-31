import Vue from 'vue'
import Router from 'vue-router'
import IndexComponent from '@/components/IndexComponents/IndexComponent'
import ClassifyComponent from '@/components/ClassifyComponents/ClassifyComponent'
import CartComponent from '@/components/ShoppingCartCompoments/CartComponent'
import MineComponent from '@/components/MineComponents/MineComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:"./index"},
    {path: '*',redirect: "./index"},
    {path: '/index',name: 'index',component: IndexComponent},
    {path: '/classify',name: 'classify',component: ClassifyComponent},
    {path: '/cat',name: 'cat',component: CartComponent},
    {path: '/mine',name: 'mine',component: MineComponent},
    
  ]
})
