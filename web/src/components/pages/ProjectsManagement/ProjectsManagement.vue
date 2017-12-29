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
				<v-chip v-for="item in users" @click="edit(item)">
					<v-avatar>
						<img :src="item.image" alt="item.userName">
					</v-avatar>
					{{item.userName}}
				</v-chip>
		</v-flex>
		<v-flex xs12>
			<h4 class="subheading">Recent reports</h4>
		</v-flex>
		</v-layout>
		
		<v-flex xs12>
			<template>
				<v-data-table
						v-bind:headers="headers"
						:items="reports"
						hide-actions
						class="elevation-1"
					>
					<template slot="items" slot-scope="props">
						<td class="text-xs-center">{{ props.item.date | moment("dddd, MMMM Do YYYY") }}</td>
						<td class="text-xs-center">{{ props.item.importantInfo }}</td>
						<td class="text-xs-center">{{ filterTasks(props.item.tasks, 'COMPLETED') }}</td>
						<td class="text-xs-center">{{ filterTasks(props.item.tasks, 'IN_PROGRESS') }}</td>
						<td class="text-xs-center">{{ filterTasks(props.item.tasks, 'PLANNED') }}</td>
						<td class="text-xs-center">
							<v-btn icon @click="reportDetails(props.item)">
								<v-icon>info</v-icon>
							</v-btn>
						</td>
					</template>
				</v-data-table>
			</template>
		</v-flex>

	</div>
</template>
<script>
	
	import USERS_PROJECT from '../../../graphql/usersProject'
	import PROJECT_REPORTS from '../../../graphql/projectReports'
	
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
			},
			reports (){
				return this.$store.state.reports
			},
			report (){
				return this.$store.state.report
			},
			editUser (){
				return this.$store.state.editUser
			}
		},
		data () {
			return {
				proyectList :[],
				selectProject :{},
				headers: [
          {
            text: 'Date',
            align: 'center',
            value: 'date'
          },
          { text: 'Important info', value: 'importantInfo',align:'center' },
          { text: 'Done task', value: 'tasks',align:'center' },
          { text: 'In progress task', value: 'tasks',align:'center' },
          { text: 'Planned task', value: 'tasks',align:'center' },
          { text: 'Actions', value: 'actions', align:'center' },
        ]
			}
		},
		methods: {
			filterTasks(task,type){
				var x = 0;
				for (var i = 0; i < task.length; i++){
					if(task[i].status == type){
						x++
					}
				}
				return x
			},
			reportDetails(info){
				this.$store.commit('report',info)
				this.$router.push('/report')
			},
			edit(user){
				this.$store.commit('editUser', user)
				this.$router.push('/edit_profile')
			}
		},
		created (){
			var userList = {
				users :this.project.users,
				_id :this.project._id,
			}
			this.$apollo.query({
				query:USERS_PROJECT(userList)
			}).then((data) => {
				this.$store.commit('userList',data.data.userMany)
			}).catch((error)=>{
				console.log(error)
			})
			
			this.$apollo.query({
				query:PROJECT_REPORTS(userList)
			}).then((data) => {
				this.$store.commit('reports',data.data.ReportMany)
			}).catch((error)=>{
				console.log(error)
			})
		}
	}
</script>