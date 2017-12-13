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
              <img :src="selectUser.image" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{selectUser.userName}}</v-list-tile-title>
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
			
			<div class="d-flex align-center" style="margin-left: auto">
				
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>
				
				<v-menu
					transition="slide-y-transition"
					bottom
				>
					<v-btn icon  dark slot="activator">
						<v-icon>apps</v-icon>
					</v-btn>
					<v-list>
						<v-list-tile v-for="item in items" :key="item.title" @click="">
							<v-list-tile-title v-on:click="redirect(item.url)">{{ item.title }}</v-list-tile-title>
						</v-list-tile>
					</v-list>
				</v-menu>
				
      </div>
			
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
	import routes from './routes'
	import login from './components/Utilities/LoginModal/LoginModal.vue'
	import PROJECT_GET from './graphql/projectsGet'
	import USER_GET from './graphql/userGet'
	import REPORTS_GET from './graphql/reportsGet';
	
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
			},
			selectUser (){
				return this.$store.state.selectUser
			},
			loginModal (){
				return this.$store.state.loginModal
			},
			servicesUrls (){
				return this.$store.state.servicesUrls
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
				right: null,
				items: [
					{ title: 'Sign out', url:this.servicesUrls+"logout"},
					{ title: 'Edit profile' },
				],
				show: true
			}
		},
		methods:{
			redirect (url){
				window.location.replace(url)
			}
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
					this.$store.commit('projects',data.data.projectMany)
			}).catch((error) => {
				
			})
			var userQuery = this.$route.query
			
			this.$apollo.query({
					query:USER_GET(userQuery)
			}).then((data) => {
				this.$store.commit('selectUser',data.data.userOne)
				this.$store.commit('loginModal',false)
					
				var userReports = {
					reporter : this.selectUser._id,
					project : this.project._id
				}
				
				this.$apollo.query({
					query:REPORTS_GET(userReports)
				}).then((data) => {
					console.log(data)
				//	this.$store.commit('selectUser',data.data.userOne)
				}).catch((error) => {
					console.log(error)
				})
				
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
