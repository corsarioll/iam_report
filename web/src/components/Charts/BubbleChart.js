import {Bubble} from 'vue-chartjs';

export default Bubble.extend({
	props:['ChartData'],
  mounted () {
    this.renderChart(this.ChartData, {responsive: true, maintainAspectRatio: false})
  }
})