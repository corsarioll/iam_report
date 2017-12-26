<template>
	<div>
		<v-layout row wrap>
			<v-flex xs12>
				<h4 class="display-1">Proyect management</h4>
			</v-flex>
			<v-flex xs12>
				<h4 class="subheading">Proyect Users</h4>
			</v-flex>
			<v-flex xs12>
				<v-chip v-for="item in users">
					<v-avatar>
						<img :src="item.image" alt="item.userName">
					</v-avatar>
					{{item.userName}}
				</v-chip>
		</v-flex>
	</v-layout>
	</div>
</template>
<script>
	
	import USERS_PROJECT from '../../../graphql/usersProject'
	
	export default {
		computed:{
			project (){
				return this.$store.state.project
			},
			selectUser (){
				return this.$store.state.selectUser
			},
			projects (){
				return this.$store.state.projects
			},
			users (){
				return this.$store.state.users
			}
		},
		data () {
			return {
				proyectList :[],
				selectProject :{} 
			}
		},
		methods: {
		},
		created (){
			var userList = {
				users :this.project.users,
			}
			this.$apollo.query({
				query:USERS_PROJECT(userList)
			}).then((data) => {
				console.log(data)
				this.$store.commit('userList',data.data.userMany)
			}).catch((error)=>{
				console.log(error)
			})
		}
	}
</script>