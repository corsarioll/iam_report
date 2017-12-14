<template>
	<div>
		<v-layout row wrap>
			<v-flex xs12>
				<h4>Add User to the Platform</h4>
			</v-flex>
		</v-layout>
		
		<v-layout row wrap>
			<v-flex xs12>
				<v-form v-model="addUser.validations.valid" ref="form" lazy-validation>
					<v-layout row wrap>
						<v-flex xs4>
							<v-text-field
														label="Email"
														v-model="addUser.value.email"
														:rules="addUser.validations.emailRules"
														required
							></v-text-field>
						</v-flex>
						<v-flex xs4>
							<v-text-field
														label="First Name"
														v-model="addUser.value.firstName"
														:rules="addUser.validations.firstNameRules"
														type="email"
														required
							></v-text-field>
						</v-flex>
						<v-flex xs4>
							<v-text-field
														label="Last Name"
														v-model="addUser.value.LastName"
														:rules="addUser.validations.LastNameRules"
														required
							></v-text-field>
						</v-flex>

						<v-flex xs4>
							<v-select
														label="Role"
														v-model="addUser.value.roleId"
														:items="roles"
														:rules="[v => !!v || 'Role is required']"
														item-text="roleName"
														item-value="roleId"
														required
							></v-select>
						</v-flex>
						<v-flex xs12>
							 <v-btn color="primary" @click="submit" :disabled="!addUser.validations.valid">Add User</v-btn>
							<v-btn @click="clear" color="primary">clear</v-btn>
						</v-flex>

					</v-layout>

					</v-form>
			</v-flex>
		</v-layout>
		
	</div>
</template>
<script>
	import ROLES_GET from '../../../graphql/rolesGet';
	import USER_ADD from '../../../graphql/userAdd';
	export default {
				
		computed:{
			roles (){
				return this.$store.state.roles
			},
			alertSuccess (){
				return this.$store.state.alertSuccess
			},
			alertError (){
				return this.$store.state.alertError
			},
			servicesUrl (){
				return this.$store.state.servicesUrl
			}
		},
			
		data () {
				return {
					addUser:{
						value:{
							email:"",
							firstName:"",
							LastName:"",
							role:"",
							roleId:0,
						},
						validations:{
							valid: false,
							emailRules: [
								v => {
									return !!v || 'E-mail is required'
								},
								v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
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
				var user ={
					email:this.addUser.value.email,
					firstName:this.addUser.value.firstName,
					LastName:this.addUser.value.LastName,
					role:this.addUser.value.role,
					roleId:this.addUser.value.roleId,
				} 

				for (var i = 0; i < this.roles.length; i ++){
					if(this.roles[i].roleId == this.addUser.value.roleId){
						user.role = this.roles[i].roleName
					}
				}
				
				this.$apollo.mutate({
					mutation: USER_ADD(user),
					variables: user
				}).then((data) => {
					this.$store.commit('alertSuccess',false)
					this.sendInvitation()
					this.clear()
				}).catch((error) => {
					console.log(error)
					this.$store.commit('alertError',false)
				})
      },
      clear () {
        this.$refs.form.reset()
      },
			sendInvitation (){
				this.$http.post(this.servicesUrl + 'auth/invitation', {
					email:this.addUser.value.email
				}).then(function(data){
				})
			}
    },
		created(){
			this.$apollo.query({
				query:ROLES_GET()
			}).then((data) => {
				this.$store.commit('rolesList',data.data.roleMany)
			}).catch((error) => {
				console.log(error)
			})
		},
	}

</script>
<style lang="scss">
</style>