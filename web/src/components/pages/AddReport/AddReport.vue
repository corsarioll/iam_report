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
									:items="tasks"
									hide-actions
									class="elevation-1"
									v-bind:search="'COMPLETED'"
			>
			<template slot="items" scope="props" >
				<td>{{ props.item.reference }}</td>
				<td class="text-xs-left">{{ props.item.description }}</td>
				<td class="text-xs-left">Completed</td>
				<td class="text-xs-right"><v-icon v-on:click="remove(props.item,tasks.completed)">close</v-icon></td>
			</template>
		</v-data-table>
		
		<v-toolbar color="blue" dark>
			<v-toolbar-title>Tasks in-progress</v-toolbar-title>
		</v-toolbar>
			
		<v-data-table
									v-bind:headers="headers"
									:items="tasks"
									hide-actions
									class="elevation-1"
									search="IN_PROGRESS"
			>
			<template slot="items" scope="props" >
				<td>{{ props.item.reference }}</td>
				<td class="text-xs-left">{{ props.item.description }}</td>
				<td class="text-xs-left">In progress</td>
				<td class="text-xs-right"><v-icon v-on:click="remove(props.item,tasks.progress)">close</v-icon></td>
			</template>
		</v-data-table>

		<v-toolbar color="blue" dark>
			<v-toolbar-title>Planned tasks </v-toolbar-title>
		</v-toolbar>
			
		<v-data-table
									v-bind:headers="headers"
									:items="tasks"
									hide-actions
									class="elevation-1"
									search="PLANNED"
			>
			<template slot="items" scope="props" >
				<td>{{ props.item.reference }}</td>
				<td class="text-xs-left">{{ props.item.description }}</td>
				<td class="text-xs-left">Planned</td>
				<td class="text-xs-right"><v-icon v-on:click="remove(props.item,tasks.progress)">close</v-icon></td>
			</template>
		</v-data-table>

 <v-dialog v-model="dialog" max-width="700px">
		<v-btn color="primary" dark slot="activator" v-bind:class="{disabled :tasks.length > 1}">Generate report</v-btn>
		<v-card>
			
			<v-card-title>
				<span class="headline">Add Report</span>
			</v-card-title>

			<v-card-text>
				<v-container grid-list-md>
					<v-layout wrap row> 
						<v-flex xs12>
							<v-list two-line subheader>
								<v-subheader>Complete tasks</v-subheader>
								<template v-for="(item, index) in tasks">
									<v-list-tile avatar v-if="item.status == 'COMPLETED'">
										<v-list-tile-content>
											<v-list-tile-title>{{ item.reference }}</v-list-tile-title>
											<v-list-tile-sub-title>{{ item.description }}</v-list-tile-sub-title>
										</v-list-tile-content>
									</v-list-tile>
									<v-divider v-if="index + 1 < tasks.length" :key="item.reference"></v-divider>
								</template>
							</v-list>
						</v-flex>
						
						<v-flex xs12>
							<v-list two-line subheader>
								<v-subheader>In progress tasks</v-subheader>
								<template v-for="(item, index) in tasks">
									<v-list-tile avatar v-if="item.status == 'IN_PROGRESS'">
										<v-list-tile-content>
											<v-list-tile-title>{{ item.reference }}</v-list-tile-title>
											<v-list-tile-sub-title>{{ item.description }}</v-list-tile-sub-title>
										</v-list-tile-content>
									</v-list-tile>
									<v-divider v-if="index + 1 < tasks.length" :key="item.reference"></v-divider>
								</template>
							</v-list>
						</v-flex>
						
						<v-flex xs12>
								
							<v-list two-line subheader>
								<v-subheader>Planned tasks</v-subheader>
								<template v-for="(item, index) in tasks">
									<v-list-tile avatar v-if="item.status == 'PLANNED'">
										<v-list-tile-content>
											<v-list-tile-title>{{ item.reference }}</v-list-tile-title>
											<v-list-tile-sub-title>{{ item.description }}</v-list-tile-sub-title>
										</v-list-tile-content>
									</v-list-tile>
									<v-divider v-if="index + 1 < tasks.length" :key="item.reference"></v-divider>
								</template>
							</v-list>
							
						</v-flex>
						<v-flex xs12>
							<v-text-field
														label="Important information"
														v-model="addTask.value.importantInfo"
														multi-line
            ></v-text-field>
						</v-flex>
						
					</v-layout>
				</v-container>
			</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
				<v-btn color="blue darken-1" flat @click="saveReport()"> Save</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>

	</div>
</template>

<script>
	import REPORT_CREATE from '../../../graphql/reportAdd';
	import USERS_GET from '../../../graphql/usersGet';
  export default {
		computed:{
			project (){
				return this.$store.state.project
			},
			selectUser (){
				return this.$store.state.selectUser
			},
			alertSuccess (){
				return this.$store.state.alertSuccess
			},
			alertError (){
				return this.$store.state.alertError
			}
		},
		data () {
      return {
				dialog: false,
				addTask:{
					value:{
						reference: '',
						description: '',	
						status: null,
						importantInfo:''
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
				tasks:[],
				headers: [
						{ text: 'Reference', align: 'left',sortable: false,value: 'reference'},
						{ text: 'Description', sortable: false,value: 'description',align: 'left' },
						{ text: 'Status', sortable: false,value: 'status',align: 'left' },
						{ text: 'Options', value: 'assigned', align:'right',sortable: false, },
				],
				selected: [2],
				userList:[],
				max25chars: (v) => v.length <= 25 || 'Input too long!',
        tmp: '',
        search: '',
        pagination: {}
    	}
		},
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
					var copy = Object.assign({}, this.addTask.value);
					
					switch(this.addTask.value.status) {
						case 'Completed':
							this.tasks.push({
								reference: this.addTask.value.reference,
								description: this.addTask.value.description,
								status:'COMPLETED'
							})
							break;
						case 'In progress':
							this.tasks.push({
								reference: this.addTask.value.reference,
								description: this.addTask.value.description,
								status:'IN_PROGRESS'
							})
							break;
						case 'Planned':
							this.tasks.push({
								reference: this.addTask.value.reference,
								description: this.addTask.value.description,
								status:'PLANNED'
							})
							break;
						default:
					}
					console.log(this.tasks)
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
				var report ={
					name:"test",
					importantInfo:this.addTask.value.importantInfo,
					tasks:this.tasks,
					project:this.project,
					reporter:this.selectUser
				} 
				this.$apollo.mutate({
					mutation: REPORT_CREATE(report),
					variables: report
				}).then((data) => {

					var item = {
						snackbar:true,
					}
					this.dialog = false
					this.$store.commit('alertSuccess',item)
					this.tasks = []
					
				}).catch((error) => {
					var item = {
						snackbar:true,
					}
					this.dialog = false
					this.$store.commit('alertError',item)
					
				})
			}
    }
  }
</script>

<style lang="scss">
</style>