


import Vue from "vue"
import Vuex from "vuex"
import actions from "./actions"
Vue.use(Vuex)


const state = {
	isShow:false
}

const mutations = {
	AmendIsShow(){
		state.isShow = !state.isShow
	}
}


const store = new Vuex.Store({
	state,
	mutations,
	actions
})


export default store
