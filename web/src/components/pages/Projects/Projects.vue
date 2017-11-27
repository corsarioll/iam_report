<template>
	<div>
		<h4>Proyects</h4>
		<v-layout row wrap>
				<v-flex xs6 v-for="item in proyectList" class="card-item">
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
							
							<v-btn icon v-if="selectProject._id == item._id">
								<v-icon color="green darken-2">done</v-icon>
							</v-btn>
							
							
							<v-btn flat v-if="selectProject._id != item._id" v-on:click="changeproyect(item)" >select</v-btn>
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
				selectProject :{} 
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
					this.$store.commit('changeProject',this.selectProject)
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