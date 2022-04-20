<template>
	<Line :chart-data="chartData" />
</template>

<script>
import { Line } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
	name: 'LineChart',
	components: { Line },
	data() {
		return {
		chartData:{
			labels: ['Jan', 'Feb', 'Mar','Apr','Jun','Jul','Aug'],
			datasets: [
			{	
				data: [48,100,82,69,91,63,113],
				backgroundcolor:"#f87979"
			}]
			}
		}
	}
}
</script>
