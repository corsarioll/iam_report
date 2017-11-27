<template>
	<div>
		<v-flex xs12>
			<h4>Project Users</h4>
			<v-btn color="primary" fab small dark @click="dialog = true">
				<v-icon>add</v-icon>
			</v-btn>
		</v-flex>
		<v-layout row wrap>
				<v-flex xs12>
				</v-flex>
				<v-flex xs6 v-for="item in users" class="card-item">
					<v-card color="darken-2" >
						<v-card-title primary-title>
							<div class="headline">{{item.firstName}} {{item.LastName}}</div>
						</v-card-title>
						<v-card-text>
						</v-card-text>

						<v-card-actions class="white">
							<v-spacer></v-spacer>

							<v-btn icon>
								<v-icon>info_outline</v-icon>
							</v-btn>

							<v-btn icon v-if="selectProject._id == item._id">
								<v-icon color="green darken-2">done</v-icon>
							</v-btn>

							<v-btn icon>
								<v-icon>assignment</v-icon>
							</v-btn>

						</v-card-actions>
					</v-card>

				</v-flex>
			</v-layout>
	</div>
</template>
<script>
	
	import USERS_GET from '../../../graphql/usersGet';
	
	export default {
		computed:{
			users (){
				return this.$store.state.users
			},
			project (){
				return this.$store.state.project
			}
		},
		data () {
			return {
				proyectList :[],
				selectProject :{},
				dialog:false,
				userList:[]
      }
		},
		methods: {
			changeproyect (item){
				this.selectProject = item;
				this.$store.commit('changeProject',item)
			}
		},
		created () {
			this.$apollo.query({
				query:USERS_GET()
			}).then((data) => {
				this.$store.commit('userList',data.data.userMany)
			}).catch((error) => {
				
			})
		}
	}
</script>
<style>
	.card-item{
		margin-bottom: 10px;
		cursor: pointer;
	}
</style>