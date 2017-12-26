<template>
	<div>
		<h4 class="display-1" >Your reports</h4>
		<v-flex xs6>
			<v-select
								label="Filter by project"
								v-bind:items="projects"
								v-model="selecProject"
								item-text="name"
								item-value="_id"
			></v-select>
		</v-flex>

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
	</div>
</template>
<script>
	export default {
		computed:{
			project (){
				return this.$store.state.project
			},
			selectUser (){
				return this.$store.state.selectUser
			},
			servicesUrls (){
				return this.$store.state.servicesUrls
			},
			projects (){
				return this.$store.state.projects
			},
			reports (){
				return this.$store.state.reports
			},
			report (){
				return this.$store.state.report
			}
		},
		data () {
			return {
				title:"Home",
				selecProject:[],
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
        ],
        items: [
          {
            date: 6.0,
            importantInfo: 24,
            tasks: 4.0,
          }
        ]
      }
		},
		methods: {
			filter (){
			},
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
			}
		}
	}
</script>