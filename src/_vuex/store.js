


import Vue from "vue"
import Vuex from "vuex"
import actions from "./actions"
Vue.use(Vuex)


const state = {
	isShow:false,
	goTopShow:false,
	searchItemShow:false,
	sort:'pop',
	goodsData:null
}

const mutations = {
	AmendIsShow(){
		state.isShow = !state.isShow
	},
	AmendgoTopShow(){
		state.goTopShow = true;
	},
	AmendgoTopHide(){
		state.goTopShow = false;
	},
	ChangeSearchItemShow(){
		state.searchItemShow = !state.searchItemShow
	},
	ChangeSort(state,sort){
		state.sort = sort;
	},
	// 获取商品信息
	getGoodsData(state,data){
		state.goodsData = data;
	}
}


const store = new Vuex.Store({
	state,
	mutations,
	actions
})


export default store
