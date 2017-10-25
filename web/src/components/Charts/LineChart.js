import { Line } from 'vue-chartjs'

export default Line.extend({
	props:['ChartData'],
  mounted () {
    this.renderChart(this.ChartData, {responsive: true, maintainAspectRatio: false})
  }
})