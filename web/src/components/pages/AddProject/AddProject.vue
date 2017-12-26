<template>
	<div>
		<v-layout row wrap>
			<v-flex xs12>
				<h4>Add Project</h4>
			</v-flex>
		</v-layout>
		<v-form v-model="addProject.validations.valid" ref="form" lazy-validation>
			<v-layout row wrap>
				<v-flex xs6>
					<v-text-field
												label="Project name"
												v-model="addProject.value.name"
												:rules="addProject.validations.nameRules"
												required
					></v-text-field>
				</v-flex>
				
				<v-flex xs12 sm6>
					<v-select
										v-bind:items="userList"
										v-model="addProject.value.admin"
										label="Project admin"
										autocomplete
										item-text="firstName"
					></v-select>
				</v-flex>
				
			 <v-flex xs6>
					<v-select
										label="Users"
										v-bind:items="userList"
										v-model="addProject.value.users"
										multiple
										chips
										hint="What are the user for this Project"
										item-text="firstName"
										item-value="_id"
					></v-select>
				</v-flex>
				
				<v-flex xs12>
					<div class="actions">
						<v-btn color="primary" v-on:click="saveProject()">Save</v-btn>
					</div>
				</v-flex>
				
			</v-layout>
		</v-form>
		<Alert v-bind:snackdata="snackbar"></Alert>
	</div>
</template>
<script>
	import USERS_GET from '../../../graphql/usersGet';
	import PROJECT_ADD from '../../../graphql/projectAdd';
  export default {
		data () {
      return {
				addProject:{
					rules: [
						() => 'Username or Password is incorrect'
					],
					validations:{
						valid: true,
						nameRules: [
							(v) => !!v || 'Description is required',
						],
						descriptionRules: [
							(v) => !!v || 'Reference is required',
						],
					},
					value:{
							name: '',
        			users: [],
							admin: ''
					}
				},
        userList: [],
				snackbar:{
					snackbar: false,
					color: '',
					mode: '',
					timeout: 6000,
					text: 'Hello, I\'m a snackbar'
				}
			}
		},
		methods: {
			saveProject() {
				var usersTem = [];
					for (var i = 0; i<this.addProject.value.users.length;i++){
						for (var e = 0; e< this.userList.length; e++){
							if(this.addProject.value.users[i] == this.userList[e]._id){
								usersTem.push({
									firstName:this.userList[e].firstName,
									email:this.userList[e].email,
									LastName:this.userList[e].LastName,
									_id:this.userList[e]._id
								})
							}
						}
					}
				var Project ={
					name:this.addProject.value.name,
					users:this.addProject.value.users,
					admin:this.addProject.value.admin._id
				}
				this.$apollo.mutate({
					mutation: PROJECT_ADD(Project),
					variables: Project
				}).then((data) => {
					this.addProject.value = 
					this.snackbar.color='success'
					this.snackbar.snackbar=true
					this.snackbar.text='Added record'
					this.addProject.value = {	
							name: '',
        			users: [],
							admin: {}
					}
				
				}).catch((error) => {
					console.log(error)
					this.snackbar.color = 'error'
					this.snackbar.snackbar =true
					this.snackbar.text ='There was an error adding the record'
				})
			},
			loadUsers() {
				this.$apollo.query({
					query:USERS_GET()
				}).then((data) => {
					this.userList = data.data.userMany
				}).catch((error) => {
				})
			}
		},
		created (){
			this.loadUsers()
		}
	}
</script>
<style lang="scss">
	
	.actions{
		margin-top: 30px;
	}
</style>