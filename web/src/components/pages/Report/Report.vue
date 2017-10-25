<template>
	<div>
		<h4>Report of the 05-22-2017</h4>
		<v-toolbar color="blue" dark>
			<v-toolbar-title>Tasks in-progress</v-toolbar-title>
		</v-toolbar>
		<v-data-table
				v-bind:headers="headers"
				:items="items"
				hide-actions
				class="elevation-1"
			>
			<template slot="items" scope="props">
				<td>{{ props.item.name }}</td>
				<td class="text-xs-left">{{ props.item.description }}</td>
				<td class="text-xs-left">{{ props.item.startDate }}</td>
				<td class="text-xs-left">{{ props.item.endDate }}</td>
				<td class="text-xs-left">{{ props.item.assigned }}</td>
			</template>
		</v-data-table>

		<v-toolbar color="blue" dark>
			<v-toolbar-title>Tasks in-progress</v-toolbar-title>
		</v-toolbar>


		<v-data-table
				v-bind:headers="headers"
				:items="items"
				hide-actions
				class="elevation-1"
			>
			<template slot="items" scope="props">
				<td>{{ props.item.name }}</td>
				<td class="text-xs-left">{{ props.item.description }}</td>
				<td class="text-xs-left">{{ props.item.startDate }}</td>
				<td class="text-xs-left">{{ props.item.endDate }}</td>
				<td class="text-xs-left">{{ props.item.assigned }}</td>
			</template>
		</v-data-table>
		
		<v-toolbar color="blue" dark>
			<v-toolbar-title>Planned tasks</v-toolbar-title>
		</v-toolbar>
			
		<v-data-table
				v-bind:headers="headers"
				:items="items"
				hide-actions
				class="elevation-1"
			>
			<template slot="items" scope="props">
				<td>{{ props.item.name }}</td>
				<td class="text-xs-left">{{ props.item.description }}</td>
				<td class="text-xs-left">{{ props.item.startDate }}</td>
				<td class="text-xs-left">{{ props.item.endDate }}</td>
				<td class="text-xs-left">{{ props.item.assigned }}</td>
			</template>
		</v-data-table>

	</div>
</template>
<script>
  export default {
    data () {
      return {
        headers: [
          { text: 'Reference', align: 'left',sortable: false,value: 'name'},
          { text: 'Description', value: 'description',align: 'left' },
          { text: 'Start Date', value: 'startDate' ,align:'left' },
          { text: 'End Date', value: 'endDate' ,align:'left' },
          { text: 'assigned', value: 'assigned', align:'left' },
        ],
        items: [	
          {
            value: false,
            name: 'BYT 228',
            description: 'thats a long description of the task'	,
						startDate:"05-22-2017",
						endDate:"05-22-2017",
						assigned:'done'
          },
					{
            value: false,
            name: 'BYT 228',
            description: 'thats a long description of the task'	,
						startDate:"06-22-2017",
						endDate:"07-22-2017",
						assigned:'close'
          },
        ]
      }
    }
  }
</script>
<style lang="scss">
</style>