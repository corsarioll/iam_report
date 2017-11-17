import Vue from 'vue';
import Vuex from  'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
	state:{
		project:{
			"_id" :"",
			"name" : "",
			"reports" : [],
			"tasks" : [],
			"users" : []
		}
	},
	mutations:{
		changeProject (state, newProject) {
    	state.project = newProject
		}
	},
	actions: {
		changeProject (state, newProject) {
    	state.project = newProject
		}
	}
})