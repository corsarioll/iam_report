<template>
	<div>
		<h4>{{title}}</h4>
	
		<v-layout row wrap>
			<v-flex xs6>
				<h5 class="headline grey--text text--darken-1">Bar chart</h5>
				<v-card class="chart-demo">
					<bar-chart v-bind:ChartData="barChartData"></bar-chart>
				</v-card>
			</v-flex>
			<v-flex xs6>
				<h5 class="headline grey--text text--darken-1">Line chart</h5>
				<v-card class="chart-demo">
					<line-chart v-bind:ChartData="lineChartData"></line-chart>
				</v-card>
			</v-flex>
		</v-layout>
			
		<v-layout row wrap>
			<v-flex xs6>
				<h5 class="headline grey--text text--darken-1">Doughnut chart</h5>
				<v-card class="chart-demo">
					<doughnut-chart v-bind:ChartData="doughnutChartData"></doughnut-chart>
				</v-card>
			</v-flex>

			<v-flex xs6>
					<h5 class="headline grey--text text--darken-1">Pie chart</h5>
				<v-card class="chart-demo">
					<pie-chart v-bind:ChartData="pirChartData"></pie-chart>
				</v-card>
			</v-flex>
		</v-layout>
				
		<v-layout row wrap>
			<v-flex xs6>
					<h5 class="headline grey--text text--darken-1">Radar chart</h5>
				<v-card class="chart-demo">
					<radar-chart v-bind:ChartData="radarChartData"></radar-chart>
				</v-card>
			</v-flex>
			
			<v-flex xs6>
					<h5 class="headline grey--text text--darken-1">Polar chart</h5>
				<v-card class="chart-demo">
					<polar-chart v-bind:ChartData="polarChartData"></polar-chart>
				</v-card>
			</v-flex>
		</v-layout>
			
		<v-layout row wrap>
			<v-flex xs6>
				<h5 class="headline grey--text text--darken-1">Bubble chart</h5>
				<v-card class="chart-demo">
					<bubble-chart v-bind:ChartData="bubbleChartData"></bubble-chart>
				</v-card>
			</v-flex>
			<v-flex xs12>
				<a href="https://github.com/apertureless/vue-chartjs" target="_blank">documentation</a>
			</v-flex>
		</v-layout>
			
	</div>
</template>
<script>

	
	export default {
	
		data () {
			return {
				title:"Charts",
				barChartData:{
					labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
					datasets: [
						{
							label: 'Data One',
							backgroundColor: '#f87979',
							data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
						}
					]
				},
				bubbleChartData:{
					datasets: [
						{
							label: 'Data One',
							backgroundColor: '#f87979',
							data: [
								{x: 20,y: 25,r: 5},
								{x: 40,y: 10,r: 10},
								{x: 30,	y: 22,r: 30}
							]
						},
						{
							label: 'Data Two',
							backgroundColor: '#7C8CF8',
							data: [
								{x: 10,y: 30,r: 15},
								{x: 20,y: 20,r: 10},
								{x: 15,y: 8,r: 30}
							]
						}
					]
				},
				doughnutChartData:{
					labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
					datasets: [
						{
							backgroundColor: [
								'#41B883',
								'#E46651',
								'#00D8FF',
								'#DD1B16'
							],
							data: [40, 20, 80, 10]
						}
					]
				},
				lineChartData :{
					labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
					datasets: [
						{
							label: 'Data One',
							backgroundColor: '#f87979',
							data: [40, 39, 10, 40, 39, 80, 40]
						}
					]
				},
				pirChartData :{
					labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
					datasets: [
						{
							backgroundColor: [
								'#41B883',
								'#E46651',
								'#00D8FF',
								'#DD1B16'
							],
							data: [40, 20, 80, 10]
						}
					]
				},
				polarChartData:{
					labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
					datasets: [
						{
							label: 'My First dataset',
							backgroundColor: 'rgba(179,181,198,0.2)',
							pointBackgroundColor: 'rgba(179,181,198,1)',
							pointBorderColor: '#fff',
							pointHoverBackgroundColor: '#fff',
							pointHoverBorderColor: 'rgba(179,181,198,1)',
							data: [65, 59, 90, 81, 56, 55, 40]
						},
						{
							label: 'My Second dataset',
							backgroundColor: 'rgba(255,99,132,0.2)',
							pointBackgroundColor: 'rgba(255,99,132,1)',
							pointBorderColor: '#fff',
							pointHoverBackgroundColor: '#fff',
							pointHoverBorderColor: 'rgba(255,99,132,1)',
							data: [28, 48, 40, 19, 96, 27, 100]
						}
					]
				},
				radarChartData:{
					labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
					datasets: [
						{
							label: 'My First dataset',
							backgroundColor: 'rgba(179,181,198,0.2)',
							borderColor: 'rgba(179,181,198,1)',
							pointBackgroundColor: 'rgba(179,181,198,1)',
							pointBorderColor: '#fff',
							pointHoverBackgroundColor: '#fff',
							pointHoverBorderColor: 'rgba(179,181,198,1)',
							data: [65, 59, 90, 81, 56, 55, 40]
						},
						{
							label: 'My Second dataset',
							backgroundColor: 'rgba(255,99,132,0.2)',
							borderColor: 'rgba(255,99,132,1)',
							pointBackgroundColor: 'rgba(255,99,132,1)',
							pointBorderColor: '#fff',
							pointHoverBackgroundColor: '#fff',
							pointHoverBorderColor: 'rgba(255,99,132,1)',
							data: [28, 48, 40, 19, 96, 27, 100]
						}
					]
				}
			}
		}
	}
</script>
<style lang="scss">
	.chart-demo{
		position: relative;
		height:300px;
		padding: 10px;
		margin-bottom: 20px;
	}
</style>