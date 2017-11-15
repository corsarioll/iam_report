<template>
	<div>
		<h4>Proyects</h4>
		<v-layout row wrap>
				<v-flex xs6 v-for="item in proyectList" class="card-item" v-on:click="changeproyect(item)">
					<v-card color="darken-2" >
						<v-card-title primary-title>
							<div class="headline">{{item.name}}</div>
						</v-card-title>
						<v-card-text>
								<div>
									<span class="grey--text">User</span><br>
									<div >
										 <v-chip v-for="user in item.users">
													{{user.firstName}} {{user.LastName}}
											</v-chip>
									</div>
								</div>
						</v-card-text>

						<v-card-actions class="white">
							<v-spacer></v-spacer>
							<v-btn icon v-if="selectProject._id == item._id">
								<v-icon color="green darken-2">done</v-icon>
							</v-btn>
							
							<v-btn flat v-if="selectProject._id != item._id">select</v-btn>
						</v-card-actions>
					</v-card>

				</v-flex>
			</v-layout>
	</div>

</template>
<script>
	
	import PROJECT_GET from '../../../graphql/projectsGet';
	
	export default {
		computed:{
			project (){
				return this.$store.state.project
			}
		},
		data () {
			return {
				proyectList :[],
				selectProject :0 
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
					query:PROJECT_GET()
			}).then((data) => {
					this.proyectList = data.data.projectMany
					this.selectProject = this.proyectList[0];
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