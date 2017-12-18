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
				
				<v-list-tile v-for="item in menuItems" :key="item.title" v-if="selectUser.roleId <= item.roleReq">
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
	export default {
		data () {
			return {

		}
	}
</script>