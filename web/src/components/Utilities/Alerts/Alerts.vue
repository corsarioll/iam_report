<template>
		<v-snackbar
					:timeout="snack.timeout"
					:color="snack.color"
					:multi-line="snack.mode === 'multi-line'"
					:vertical="snack.mode === 'vertical'"
					v-model="snack.snackbar"
								>
			{{ snack.text }}
		</v-snackbar>
</template> 
<script>
  export default {
		props:['snackdata'],
		data () {
      return {
				snack:{
					snackbar: false,
					color: 'success',
					mode: '',
					timeout: 6000,
					text: 'Hello, I\'m a snackbar'
				}
      }
		},
		methods: {
		},
		mounted (){
			this.snack = this.snackdata
		}
	}
</script>
<style lang="scss">
</style>