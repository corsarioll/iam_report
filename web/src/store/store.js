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
			active:Boolean,
			googleId:"",
			image:"",
			userName:""
		},
		editUser:{
			_id : "",
			firstName : "",
			LastName : "",
			email : "",
			password : "",
			projects : [],
			role : "",
			active:Boolean,
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
		loginModal:true,
		products: [
				{name: 'Banana Skin', price: 20},
				{name: 'Shiny Star', price: 40},
				{name: 'Green Shells', price: 60},
				{name: 'Red Shells', price: 80}
		]
	},
	getters: {
		saleProducts: (state) => {
				var saleProducts = state.products.map( product => {
						return {
								name:  '**' + product.name + '**',
								price: product.price / 2,
						};
				});
				return saleProducts;
		}
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
		}	,	
		editUser (state, data) {
			state.editUser = data
		}	
	}
})