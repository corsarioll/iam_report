import {Doughnut} from 'vue-chartjs'

export default Doughnut.extend({
	props:['ChartData'],
  mounted () {
    this.renderChart(this.ChartData, {responsive: true, maintainAspectRatio: false})
  }
})