import Vue from 'vue'
import Router from 'vue-router'
import IndexComponent from '@/components/IndexComponents/IndexComponent'
import ClassifyComponent from '@/components/ClassifyComponents/ClassifyComponent'
import CartComponent from '@/components/ShoppingCartCompoments/CartComponent'
import MineComponent from '@/components/MineComponents/MineComponent'
import city from '../components/IndexComponents/city/IndexCity'
import ClassifyList from '../components/ClassifyComponents/ClassifyList'
import GoodsList from '../components/ClassifyComponents/GoodsList'

import GoodsInfo from '../components/GoodsInfo/GoodsInfo'
import AllGroupBooking from "../components/AllGroupBookingComponents/AllGroupBookingComponent"
import Strategy from "../components/AllGroupBookingComponents/AllGroupBookingStrategy"
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:"./index"},
    {path: '*',redirect: "./index"},
    {path: '/index',name: 'index',component: IndexComponent},
    {path: '/classify',name: 'classify',component: ClassifyComponent},
    {path: '/cat',name: 'cat',component: CartComponent},
    {path: '/mine',name: 'mine',component: MineComponent},
    {path: '/city',name: 'city',component: city},
    {path: '/classifylist/:pid',name: 'ClassifyList',component: ClassifyList},
    {path: '/goodslist',name: 'GoodsList',component: GoodsList},
    {path: '/detail',name: 'GoodsInfo',component: GoodsInfo},
		{path: '/allgroupbooking',name: 'allgroupbooking',component: AllGroupBooking},
		{path: '/strategy',name: 'Strategy',component: Strategy}


  ]
})
