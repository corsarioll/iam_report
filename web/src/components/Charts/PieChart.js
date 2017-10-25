import {Pie} from 'vue-chartjs'

export default Pie.extend({
	props:['ChartData'],
  mounted () {
    this.renderChart(this.ChartData, {responsive: true, maintainAspectRatio: false})
  }
})