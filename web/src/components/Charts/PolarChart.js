import {PolarArea} from 'vue-chartjs';

export default PolarArea.extend({
	props:['ChartData'],
  mounted () {
    this.renderChart(this.ChartData, {responsive: true, maintainAspectRatio: false})
  }
})