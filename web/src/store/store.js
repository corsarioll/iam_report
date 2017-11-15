import Vue from 'vue';
import Vuex from  'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
	state:{
		project:{
			"_id" :"5a0c482a081c7a0319702cca",
			"name" : "jeisson",
			"reports" : [],
			"tasks" : [],
			"users" : [ 
					{
							"firstName" : "jeissonlazo",
							"LastName" : "lazo",
							"email" : "jeisson@hotmail.com",
							"_id" : "5a05b91af1d59179aa096fd5",
							"projects" : [],
							"role" : "ADMIN"
					}, 
					{
							"firstName" : "digaings",
							"LastName" : "vichal",
							"email" : "vichal@hotmail.com",
							"_id" : "5a05b954f1d59179aa096fd6",
							"projects" : [],
							"role" : "ADMIN"
					}
			]
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