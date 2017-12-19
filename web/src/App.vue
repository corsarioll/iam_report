<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      clipped
      app
      v-model="drawer"
    >
      <v-list dense>
									
				<v-list-tile avatar>
					<v-list-tile-avatar>
						<img :src="selectUser.image" alt="">
					</v-list-tile-avatar>
					<v-list-tile-title>{{selectUser.userName}}</v-list-tile-title>
				</v-list-tile>
        <template v-for="(item, i) in menuItems">
          <v-list-tile v-if="selectUser.roleId <= item.roleReq" @click="$router.push(item.path)">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.title }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue darken-3"
      dark
      app
      clipped-left
      fixed
    >
      <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-xs-only">{{project.name}}</span>
      </v-toolbar-title>
      <div class="d-flex align-center" style="margin-left: auto">
        
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
				
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>
      </div>
    </v-toolbar>
    <v-content>	
			<v-container fluid grid-list-md>
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
	import USERS_GET from './graphql/usersGet'
	import REPORTS_GET from './graphql/reportsGet'
	
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
			},
			reports (){
				return this.$store.state.reports
			},
			users (){
				return this.$store.state.users
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
				]
			}
		},
		methods:{
			redirect (url){
				this.$session.remove('user')
				window.location.replace(url)
			},
			callReports (){
				var userReports = {
					reporter : this.selectUser._id,
					project : this.project._id
				}
				this.$apollo.query({
					query:REPORTS_GET(userReports)
				}).then((data) => {
					this.$store.commit('reports',data.data.reportMany)
				}).catch((err) => {
					console.log(err)
				})
			},
			callUsers (){
				this.$apollo.query({
					query:USERS_GET()
				}).then((data) => {
					this.$store.commit('userList',data.data.userMany)
				}).catch((error) => {
					console.log(error)
				})
			},
			callProyects (){
				this.$apollo.query({
					query:PROJECT_GET(this.selectUser)
				}).then((data) => {
					this.proyectList = data.data.projectMany
					if(this.proyectList.length>0){
						this.$store.commit('changeProject',this.proyectList[0])
					}
					this.$store.commit('projects',data.data.projectMany)
					this.callReports()
					this.callUsers()
				}).catch((error) => {
					console.log(error)
				})
			}
		},
		mixins:[
			routes
		],
		created(){
				//verificate the user profile in session storage
				if(this.$session.get('user')){

					this.$store.commit('selectUser',this.$session.get('user'))
					this.callProyects()
				}
				else if(this.$route.query){

					//verficate the user	
					var userQuery = this.$route.query

					this.$apollo.query({
						query:USER_GET(userQuery)
					}).then((data) => {
						this.$session.set('user', data.data.userOne)
						this.$store.commit('selectUser',this.$session.get('user'))
						this.$store.commit('loginModal',false)
						this.callProyects()	
					}).catch((error)=>{})
				}

				this.menuItems = routes
		},
		props: {
      source: String
    }
	}
</script>

<style lang="scss">
	.side-nav{
		position: fixed;
	}
</style>
