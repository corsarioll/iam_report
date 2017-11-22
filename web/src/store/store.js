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
		},
		alertSuccess:{
			snackbar: false,
			color: 'success',
			mode: '',
			timeout: 6000,
			text: 'Added record'
		},
		alertError:{
			snackbar: false,
			color: 'error',
			mode: '',
			timeout: 6000,
			text: 'There was an error adding the record'
		},
		
	},
	mutations:{
		changeProject (state, newProject) {
    	state.project = newProject
		},
		selectUser (state, newUser) {
    	state.selecUser = newUser
		},
		alertSuccess (state, alert) {
    	//state.snackbar = alert
			state.alertSuccess.snackbar = true
		},
		alertError (state, alert) {
    	//state.snackbar = alert
			state.alertError.snackbar = true
		},
		
	}
})