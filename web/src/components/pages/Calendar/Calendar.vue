<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h4>{{title}}</h4>
      </v-flex>
			<v-flex xs12 class="calendar">
				<v-card class="time-slider">
						<h3>test</h3>
						<div v-for="i in 24" :key="i" class="hour"></div>
				</v-card>
				<v-card class="day">
					<h6 class="title grey--text text--darken-1">Monday</h6>
					<h2>2</h2>
					<div v-for="i in 24" :key="i" class="hour"></div>
				</v-card>
				<v-card class="day">
					<h6 class="title grey--text text--darken-1">Tuesday</h6>
					<h2>2</h2>
					<div v-for="i in 24" :key="i" class="hour"><p>{{i}}</p></div>
				</v-card>
				<v-card class="day">
					<h6 class="title grey--text text--darken-1">Wednesday</h6>
					<h2>2</h2>
					<div v-for="i in 24" :key="i" class="hour"></div>
				</v-card>
				<v-card class="day">
					<h6 class="title grey--text text--darken-1">Thursday</h6>
					<h2>2</h2>
					<div v-for="i in 24" :key="i" class="hour"></div>
				</v-card>
				<v-card class="day">
					<h6 class="title grey--text text--darken-1">Friday</h6>
					<h2>2</h2>
					<div v-for="i in 24" :key="i" class="hour"></div>
				</v-card>
				<v-card class="day">
					<h6 class="title grey--text text--darken-1">Saturday</h6>
					<h2>2</h2>
					<div v-for="i in 24" :key="i" class="hour"></div>
				</v-card>
				<v-card class="day">
					<h6 class="title grey--text text--darken-1">Sunday</h6>
					<h2>2</h2>
					<div v-for="i in 24" :key="i" class="hour"></div>
				</v-card>
			</v-flex>
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
<style lang="scss">
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