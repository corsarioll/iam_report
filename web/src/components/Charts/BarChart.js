import { Bar } from 'vue-chartjs'

export default Bar.extend({
	props:['ChartData'],
	mounted () {
    this.renderChart(this.ChartData, {responsive: true, maintainAspectRatio: false})
	},
})