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
		selectUser:{
			_id : "",
			firstName : "",
			LastName : "",
			email : "",
			password : "",
			projects : [],
			role : "",
			active:false,
			googleId:"",
			image:"",
			userName:""
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
		userReports:{			
			importantInfo:"",
			tasks :{
				reference:"",
				description:"",
				project:"",
				assignedTo:"",
				status:""
			}
		},
		users:[],
		roles:[],
		projects:[],
		reports:[],
		report:{},
		servicesUrl:'http://localhost:4000/',
		loginModal:true
	},
	mutations:{
		changeProject (state, newProject) {
    	state.project = newProject
		},
		selectUser (state, newUser) {
    	state.selectUser = newUser
		},
		alertSuccess (state, alert) {
    	//state.snackbar = alert
			state.alertSuccess.snackbar = true
		},
		alertError (state, alert) {
    	//state.snackbar = alert
			state.alertError.snackbar = true
		},
		userList (state, data) {
			state.users = data
		},
		rolesList (state, data) {
			state.roles= data
		},
		loginModal (state, data) {
			state.loginModal = data
		},
		projects (state, data) {
			state.projects = data
		},
		project (state, data) {
			state.project = data
		},	
		reports (state, data) {
			state.reports = data
		},	
		report (state, data) {
			state.report = data
		}	
	}
})