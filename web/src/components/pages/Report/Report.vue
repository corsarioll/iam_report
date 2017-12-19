<template>
	<div>
		<h4 class="display-1">The {{selectUser.userName}} report on {{report.date | moment("D MMM YYYY") }}</h4>
				
		<v-toolbar color="blue" dark>
			<v-toolbar-title>Completed Tasks:</v-toolbar-title>
		</v-toolbar>
			
		<v-data-table
									v-bind:headers="headers"
									:items="report.tasks"
									hide-actions
									class="elevation-1"
									v-bind:search="'COMPLETED'"
			>
			<template slot="items" scope="props" >
				<td class="text-xs-center">{{ props.item.reference }}</td>
				<td class="text-xs-center">{{ props.item.description }}</td>
				<td class="text-xs-center">Completed</td>
			</template>
		</v-data-table>
		
		<v-toolbar color="blue" dark>
			<v-toolbar-title>Tasks in-progress</v-toolbar-title>
		</v-toolbar>
			
		<v-data-table
									v-bind:headers="headers"
									:items="report.tasks"
									hide-actions
									class="elevation-1"
									search="IN_PROGRESS"
			>
			<template slot="items" scope="props" >
				<td class="text-xs-center">{{ props.item.reference }}</td>
				<td class="text-xs-center">{{ props.item.description }}</td>
				<td class="text-xs-center">In progress</td>
			</template>
		</v-data-table>

		<v-toolbar color="blue" dark>
			<v-toolbar-title>Planned tasks </v-toolbar-title>
		</v-toolbar>
			
		<v-data-table
									v-bind:headers="headers"
									:items="report.tasks"
									hide-actions
									class="elevation-1"
									search="PLANNED"
			>
			<template slot="items" scope="props" >
				<td class="text-xs-center">{{ props.item.reference }}</td>
				<td class="text-xs-center">{{ props.item.description }}</td>
				<td class="text-xs-center">Planned</td>
			</template>
		</v-data-table>
		
	</div>
</template>
<script>
	import PROJECT_REPORTS from '../../../graphql/projectReports';
  export default {
		computed:{
			project (){
				return this.$store.state.project
			},
			report (){
				return this.$store.state.report
			},
			selectUser (){
				return this.$store.state.selectUser
			}
		},
    data () {
      return {
        headers: [
						{ text: 'Reference', align: 'center',sortable: false,value: 'reference'},
						{ text: 'Description', sortable: false,value: 'description',align: 'center' },
						{ text: 'Status', sortable: false,value: 'status',align: 'center' },
				]
      }
    }
  }
</script>
<style lang="scss">
</style>