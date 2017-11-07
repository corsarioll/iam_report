<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h4>{{title}}</h4>
      </v-flex>
			<Calendar></Calendar>
    </v-layout>
  </v-container>
</template>
<script>
	export default {
		data () {
			return {
				title:"Calendar"
			}
		}
	}
</script>
<style lang="scss" scoped>
	.calendar .day{
		height: 100%;
		display: block;
		width: 13%;
		float: left;
		padding-top: 15px;
	}
	.calendar .time-slider{
		width: 9%;
		padding-top: 78px;
		float: left;
		height: 100%;
	}
	.calendar .time-slider .hour{
		height: 20px;
	}
	.calendar .day .hour{
		height: 20px;
	}
</style>