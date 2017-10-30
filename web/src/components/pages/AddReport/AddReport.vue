<template>
	<div>
		<v-layout row wrap>
			<v-flex xs12>
				<h4>Add your report</h4>
			</v-flex>
		</v-layout>
		
		<v-form v-model="addTask.validations.valid" ref="form" lazy-validation>
			<h5>Add task to report</h5>
			<v-layout row wrap>
				<v-flex xs3>
					<v-text-field
												label="Reference"
												v-model="addTask.value.reference"
												:rules="addTask.validations.referencelRules"
												required
					></v-text-field>
				</v-flex>
				<v-flex xs4>
					<v-text-field
												label="Description"
												v-model="addTask.value.description"
												:rules="addTask.validations.descriptionRules"
												required
					></v-text-field>
				</v-flex>
				<v-flex xs2>
					<v-select
												label="Task State"
												v-model="addTask.value.status"
												:items="addTask.options"
												:rules="[v => !!v || 'Item is required']"
												required
					></v-select>
				</v-flex>
				<v-flex xs3>
					 <v-btn fab dark small color="primary" @click="submit" :disabled="!addTask.validations.valid">
							<v-icon dark>add</v-icon>
						</v-btn>
					<v-btn @click="clear" fab dark small color="primary">
							<v-icon dark>clear</v-icon>
					</v-btn>
				</v-flex>
			
			</v-layout>

			</v-form>
		
		<v-toolbar color="blue" dark>
			<v-toolbar-title>Completed Tasks:</v-toolbar-title>
		</v-toolbar>
			
		<v-data-table
				v-bind:headers="headers"
				:items="tasks.completed"
				hide-actions
				class="elevation-1"
			>
			<template slot="items" scope="props">
				<td>{{ props.item.reference }}</td>
				<td class="text-xs-left">{{ props.item.description }}</td>
				<td class="text-xs-right"><v-icon v-on:click="remove(props.item,tasks.completed)">close</v-icon></td>
			</template>
		</v-data-table>
		
		<v-toolbar color="blue" dark>
			<v-toolbar-title>Tasks in-progress</v-toolbar-title>
		</v-toolbar>
			
		<v-data-table
				v-bind:headers="headers"
				:items="tasks.progress"
				hide-actions
				class="elevation-1"
			>
			<template slot="items" scope="props">
				<td>{{ props.item.reference }}</td>
				<td class="text-xs-left">{{ props.item.description }}</td>
				<td class="text-xs-right"><v-icon v-on:click="remove(props.item,tasks.progress)">close</v-icon></td>
			</template>
		</v-data-table>

		<v-toolbar color="blue" dark>
			<v-toolbar-title>Planned tasks </v-toolbar-title>
		</v-toolbar>
			
		<v-data-table
				v-bind:headers="headers"
				:items="tasks.planned"
				hide-actions
				class="elevation-1"
			>
			<template slot="items" scope="props">
				<td>{{ props.item.reference }}</td>
				<td class="text-xs-left">{{ props.item.description }}</td>
				<td class="text-xs-right"><v-icon v-on:click="remove(props.item,tasks.planned)">close</v-icon></td>
			</template>
		</v-data-table>

		<v-dialog v-model="dialog" persistent max-width="700px" scrollable>
      <v-btn color="primary" dark slot="activator" :disabled="tasks.completed.length < 1">Generate report</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Add Report</span>
        </v-card-title>
        <v-card-text>
					<h6>Complete</h6>
					<v-list two-line>
						<template v-for="(item, index) in tasks.completed">
							<v-list-tile
								ripple
								:key="item.title"
							>
								<v-list-tile-content>
									<v-list-tile-title>{{ item.reference }}</v-list-tile-title>
									<v-list-tile-sub-title class="grey--text text--darken-4">{{ item.description }}</v-list-tile-sub-title>
								</v-list-tile-content>
								<v-list-tile-action>
									<v-list-tile-action-text></v-list-tile-action-text>
								</v-list-tile-action>
							</v-list-tile>
							<v-divider v-if="index + 1 < items.length" :key="item.reference"></v-divider>
						</template>
					</v-list>
					<h6>In progress</h6>
					
					<v-list two-line>
						<template v-for="(item, index) in tasks.progress">
							<v-list-tile
								ripple
								:key="item.title"
							>
								<v-list-tile-content>
									<v-list-tile-title>{{ item.reference }}</v-list-tile-title>
									<v-list-tile-sub-title class="grey--text text--darken-4">{{ item.description }}</v-list-tile-sub-title>
								</v-list-tile-content>
								<v-list-tile-action>
									<v-list-tile-action-text></v-list-tile-action-text>
								</v-list-tile-action>
							</v-list-tile>
							<v-divider v-if="index + 1 < items.length" :key="item.reference"></v-divider>
						</template>
					</v-list>
					
					<h6>Planned</h6>
					<v-list two-line>
						<template v-for="(item, index) in tasks.planned">
							<v-list-tile
								ripple
								:key="item.title"
							>
								<v-list-tile-content>
									<v-list-tile-title>{{ item.reference }}</v-list-tile-title>
									<v-list-tile-sub-title class="grey--text text--darken-4">{{ item.description }}</v-list-tile-sub-title>
								</v-list-tile-content>
								<v-list-tile-action>
									<v-list-tile-action-text></v-list-tile-action-text>
								</v-list-tile-action>
							</v-list-tile>
							<v-divider v-if="index + 1 < items.length" :key="item.reference"></v-divider>
						</template>
					</v-list>
					
					
          <v-container grid-list-md>
            <v-layout wrap>
							
              <v-flex xs12>
								<v-text-field
									name="input-7-1"
									label="important information"
									multi-line
								></v-text-field>
							</v-flex>
							
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog = false" v-on:click="saveReport()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

	</div>
</template>

<script>
	import REPORT_CREATE from '../../../graphql/reportAdd.gql';
	import REPORT_CREATE2 from '../../../graphql/reportAdd';
  export default {
		data () {
      return {
				dialog: false,
				addTask:{
					value:{
						reference: '',
						description: '',	
						status: null,
					},
					options: [
						'Completed',
						'In progress',
						'Planned'
					],
					validations:{
						valid: true,
						referenceRules: [
							(v) => !!v || 'Description is required',
						],
						descriptionRules: [
							(v) => !!v || 'Reference is required',
						],
					}
				},
				tasks:{
					completed:[],
					progress:[],
					planned:[]
				},
				headers: [
						{ text: 'Reference', align: 'left',sortable: false,value: 'reference'},
						{ text: 'Description', sortable: false,value: 'description',align: 'left' },
						{ text: 'Options', value: 'assigned', align:'right',sortable: false, },
				],
				 
				selected: [2],
        items: [
          { action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          { action: '2 hr', headline: 'Summer BBQ', title: 'me, Scrott, Jennifer', subtitle: "Wish I could come, but I'm out of town this weekend." },
          { action: '6 hr', headline: 'Oui oui', title: 'Sandra Adams', subtitle: "Do you have Paris recommendations? Have you ever been?" },
          { action: '12 hr', headline: 'Birthday gift', title: 'Trevor Hansen', subtitle: "Have any ideas about what we should get Heidi for her birthday?" },
          { action: '18hr', headline: 'Recipe to try', title: 'Britta Holt', subtitle: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos." },
        ]
    	}
		},
		apollo: {
			
		},
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
					var copy = Object.assign({}, this.addTask.value);
					
					switch(this.addTask.value.status) {
						case 'Completed':
							this.tasks.completed.push(copy);
							break;
						case 'In progress':
							this.tasks.progress.push(copy);
							break;
						case 'Planned':
							this.tasks.planned.push(copy);
							break;
						default:
					}
					this.clear ();
        }
      },
      clear () {
        this.$refs.form.reset()
      },
			remove (item,list){
				for (var i = 0; i < list.length; i++) { 
					if(list[i].__ob__.dep.id = item.__ob__.dep.id){
						list.splice(i, 1);
					}
				}
			},
			saveReport() {
				console.log()
				var report ={
					tasks:this.tasks,
					name:"asdas"
				} 
				this.$apollo.mutate({
					mutation: REPORT_CREATE,
					variables: report
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
</style>