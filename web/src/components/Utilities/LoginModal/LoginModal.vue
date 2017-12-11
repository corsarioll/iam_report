<template>
  <v-layout row justify-center>
    <v-dialog v-model="loginModal" fullscreen transition="dialog-bottom-transition" :overlay=false>
      <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-title>Login{{loginModal}}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-divider></v-divider>
				 <v-layout row justify-space-between>
					<v-flex xs2 offset-xs5>
						
							<div class="vertical-center">
                <v-btn color="error" dark large v-on:click="signGo()">Signup with google</v-btn>
              </div>
						
					</v-flex>
				</v-layout>

      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
  export default {
		computed:{
			alertSuccess (){
				return this.$store.state.alertSuccess
			},
			alertError (){
				return this.$store.state.alertError
			},
			servicesUrl (){
				return this.$store.state.servicesUrl
			},
			loginModal (){
				return this.$store.state.loginModal
			}
		},
    data () {
      return {
        notifications: false,
        sound: true,
        widgets: false
      }
    },
		methods: {
			signGo (){
				window.location.replace(this.servicesUrl+'auth/google');
			}
		}
  }
</script>
<style>
	.vertical-center{
		position: absolute;
		top: 50%;
		-webkit-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
	}
</style>