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
		},
		selecUser:{
			_id : "",
			firstName : "",
			LastName : "",
			email : "",
			password : "",
			projects : [],
			role : "",
		}
	},
	mutations:{
		changeProject (state, newProject) {
    	state.project = newProject
		},
		selectUser (state, newUser) {
    	state.selecUser = newUser
		},
	}
})