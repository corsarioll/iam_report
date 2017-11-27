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
							<v-text-field
														label="Provisional Password"
														v-model="addUser.value.password"
														:rules="addUser.validations.passwordRules"
														required
							></v-text-field>
						</v-flex>
						<v-flex xs4>
							<v-select
														label="Role"
														v-model="addUser.value.role"
														:items="addUser.options"
														:rules="[v => !!v || 'Role is required']"
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

	export default {
			data () {
				return {
					addUser:{
						value:{
							email:"",
						},
						validations:{
							valid: true,
							emailRules: [
								(v) => !!v || 'Email is required',
							],
							firstNameRules: [
								(v) => !!v || 'First name is required',
							],
							LastNameRules: [
								(v) => !!v || 'Last name is required',
							],
							passwordRules: [
								(v) => !!v || 'Password is required',
							],
						}
					}
				}
		},
		methods: {
      submit () {
      },
      clear () {
        this.$refs.form.reset()
      },
    }
	}

</script>
<style lang="scss">
</style>