<template>
	<div>
		<h4 class="display-1">Proyects</h4>
		<v-layout row wrap>
				<v-flex xs6 v-for="item in projects" class="card-item">
					<v-card color="darken-2" >
						<v-card-title primary-title>
							<div class="headline">{{item.name}}</div>
						</v-card-title>
						<v-card-text>
						</v-card-text>

						<v-card-actions class="white">
							<v-spacer></v-spacer>
							
							<v-btn icon>
								<v-icon>info_outline</v-icon>
							</v-btn>
							
							<v-btn icon v-if="project._id == item._id">
								<v-icon color="green darken-2">done</v-icon>
							</v-btn>
							
							
							<v-btn flat v-if="project._id != item._id" v-on:click="changeproyect(item)" >select</v-btn>
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
			},
			selectUser (){
				return this.$store.state.selectUser
			},
			projects (){
				return this.$store.state.projects
			}
		},
		data () {
			return {
				proyectList :[],
				selectProject :{} 
			}
		},
		methods: {
			changeproyect (item){
				this.$store.commit('changeProject',item)
			}
		}
	}
</script>
<style>
	.card-item{
		margin-bottom: 10px;
		cursor: pointer;
	}
</style>