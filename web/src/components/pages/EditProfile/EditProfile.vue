<template>
	<div>
		<v-layout row wrap>
			<v-flex xs12>
				<h1 class="display-1">Edit Profile</h1>
			</v-flex>
		</v-layout>
		<v-layout row wrap>
			<v-flex xs12>
				<h1 class="title">User Info</h1>
			</v-flex>
			<v-flex xs12>
				<v-form v-model="updateUser.validations.valid" ref="form" lazy-validation>
					<v-layout row wrap>
						<v-flex xs4>
							<v-text-field
														label="User Name"
														v-model="updateUser.value.userName"
														:rules="updateUser.validations.userName"
														required
							></v-text-field>
						</v-flex>
						<v-flex xs4>
							<v-text-field
														label="Email"
														v-model="updateUser.value.email"
														:rules="updateUser.validations.emailRules"
														required
							></v-text-field>
						</v-flex>
						<v-flex xs4>
							<v-text-field
														label="First Name"
														v-model="updateUser.value.firstName"
														:rules="updateUser.validations.firstNameRules"
														type="email"
														required
							></v-text-field>
						</v-flex>
						<v-flex xs4>
							<v-text-field
														label="Last Name"
														v-model="updateUser.value.LastName"
														:rules="updateUser.validations.LastNameRules"
														required
							></v-text-field>
						</v-flex>

						<v-flex xs4>
							<v-select
														label="Role"
														v-model="updateUser.value.roleId"
														:items="roles"
														:rules="[v => !!v || 'Role is required']"
														item-text="roleName"
														item-value="roleId"
														required
							></v-select>
						</v-flex>
						<v-flex xs12>
							 <v-btn color="primary" @click="submit" :disabled="!updateUser.validations.valid">Save changes</v-btn>
						</v-flex>

					</v-layout>
				</v-form>
			</v-flex>
		</v-layout>
	</div>
</template>

<script>
	import USER_UPDATE from '../../../graphql/userUpdate'
	
  export default {
		computed:{
			project (){
				return this.$store.state.project
			},
			selectUser (){
				return this.$store.state.selectUser
			},
			alertSuccess (){
				return this.$store.state.alertSuccess
			},
			alertError (){
				return this.$store.state.alertError
			},
			editUser (){
				return this.$store.state.editUser
			},
			roles (){
				return this.$store.state.roles
			}
		},
		data () {
      return {
				updateUser:{
					value:{
						userName:"",
						email:"",
						firstName:"",
						LastName:"",
						roleId:0,
						role:""
					},
					validations:{
						valid: false,
						emailRules: [
							v => {
								return !!v || 'E-mail is required'
							},
							v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
						],
						userName: [
							(v) => !!v || 'user name is required',
						],
						firstNameRules: [
							(v) => !!v || 'First name is required',
						],
						LastNameRules: [
							(v) => !!v || 'Last name is required',
						]
					}
				}
				
			}
		},
    methods: {
      submit () {
					
				var data = {
					email:this.updateUser.value.email,
					firstName:this.updateUser.value.firstName,
					userName:this.updateUser.value.userName,
					LastName:this.updateUser.value.LastName,
					role:this.updateUser.value.role,
					roleId:this.updateUser.value.roleId,
					_id:this.editUser._id
				}
					
				for (var i = 0; i < this.roles.length; i ++){
					if(this.roles[i].roleId == this.updateUser.value.roleId){
						data.role = this.roles[i].roleName
					}
				}
				
				var item = ""
				this.$apollo.mutate({
					mutation: USER_UPDATE(data),
					variables: data
				}).then((data) => {
					this.$store.commit('alertSuccess',item)
				}).catch((error) => {
					console.log(error)
					this.$store.commit('alertError',item)
				})
      },
      clear () {
        this.$refs.form.reset()
      }
    },
		created (){
			this.updateUser.value = {
				userName :this.editUser.userName,
				email:this.editUser.email,
				LastName:this.editUser.LastName,
				firstName:this.editUser.firstName,
				roleId:this.editUser.roleId,
			}
		}
  }
</script>

<style lang="scss">
</style>