<template>
	<div>
		<v-layout row wrap>
			<v-flex xs12>
				<h4>Add Proyect</h4>
			</v-flex>
		</v-layout>
		<v-form v-model="addProyect.validations.valid" ref="form" lazy-validation>
			<v-layout row wrap>
				<v-flex xs6>
					<v-text-field
												label="Proyect name"
												v-model="addProyect.value.name"
												:rules="addProyect.validations.nameRules"
												required
					></v-text-field>
				</v-flex>
				
				<v-flex xs12 sm6>
					<v-select
										v-bind:items="userList"
										v-model="addProyect.value.admin"
										label="Proyect admin"
										autocomplete
										item-text="firstName"
										item-value="email"
					></v-select>
				</v-flex>
				
			 <v-flex xs6>
					<v-select
										label="Users"
										v-bind:items="userList"
										v-model="addProyect.value.users"
										multiple
										chips
										hint="What are the user for this proyect"
										item-text="firstName"
										item-value="email"
										persistent-hint
					></v-select>
				</v-flex>
				<v-flex xs12>
					<div class="actions">
						<v-btn color="primary" v-on:click="saveProyect()">Save</v-btn>
					</div>
				</v-flex>
				
			</v-layout>
		</v-form>
	
	</div>

</template>
<script>
	import USERS_GET from '../../../graphql/usersGet';
	import PROJECT_ADD from '../../../graphql/projectAdd';
  export default {
		data () {
      return {
				addProyect:{
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
        userList: [
						{firstName:"dichu",LastName:"pamelo" ,email:'dichu@asd' },
						{firstName:"dichu 1",LastName:"pamelo 1" ,email:'dichu@asd1' },
						{firstName:"dichu 2",LastName:"pamelo 2" ,email:'dichu@asd2' },
						{firstName:"dichu 3",LastName:"pamelo 3" ,email:'dichu@asd3' },
						{firstName:"dichu 4",LastName:"pamelo 4" ,email:'dichu@asd4' },
        ]
			}
		},
		methods: {
			saveProyect() {
					var proyect ={
						name:this.addProyect.value.name
					}
					console.log(proyect)
					console.log(PROJECT_ADD(proyect))
					this.$apollo.mutate({
						mutation: PROJECT_ADD(proyect),
						variables: proyect
					}).then((data) => {
						console.log(data);
					}).catch((error) => {
						console.log(error);
					})
				}
		}
	}
</script>
<style lang="scss">
	
	.actions{
		margin-top: 30px;
	}
</style>