<template>
  <v-app id="example-2" toolbar>
    <v-navigation-drawer
												 absolute
												 persistent 
												 light 
												 fixed
												 stateless 
												 :mini-variant.sync="mini" 
												 v-model="drawer" 
												 overflow 
												 app
												 class="side-nav"
												 >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
						
            <v-list-tile-action>
              <v-btn icon @click.native.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
						
          </v-list-tile>
        </v-list>
      </v-toolbar>
			
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
				
        <v-list-tile v-for="item in menuItems" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><router-link v-bind:to="item.path">{{ item.title }}</router-link></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="indigo darken-4" fixed dark app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{project.name}}</v-toolbar-title>
    </v-toolbar>
		<v-content>	
			<v-container fluid>
				<router-view></router-view>
			</v-container>
		</v-content>
		<app-login></app-login>
		<Alert v-bind:snackdata="alertSuccess"></Alert>
		<Alert v-bind:snackdata="alertError"></Alert>
  </v-app>
</template>

<script>
	import routes from './routes';
	import login from './components/Utilities/LoginModal/LoginModal.vue';
	import PROJECT_GET from './graphql/projectsGet';
	
	export default {
		computed:{
			project (){
				return this.$store.state.project
			},
			alertSuccess (){
				return this.$store.state.alertSuccess
			},
			alertError (){
				return this.$store.state.alertError
			}
		},
		components:{
			"app-login":login
		},
		data () {
			return {
				drawer: true,
				menuItems: [],
				mini: false,
				right: null
			}
		},
		methods:{
		},
		mixins:[
			routes
		],
		created(){
			this.menuItems = routes
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

<style lang="scss">
	.side-nav{
		position: fixed;
	}
</style>
