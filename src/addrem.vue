<template>
<div class="container">
	<div class="card">
	<BarChart />
		<h1>{{ count }}</h1>
	<h6>CHOOSE TIME RANGE:</h6>	
			<button @click="oneDay">DAY</button>
			<button @click="oneWeek">WEEK</button>
			<button @click="oneMonth">MONTH</button>
		</div>
</div>
</template>


<script>
import BarChart from './BarChart.vue';
export default {
  name: 'Addrem',
  data: () => ({
	count:0
}),
components: {
	BarChart
},
methods: {
	oneDay(){
		this.count=1;

	},
	oneWeek(){
		this.count=7;

	},
	oneMonth(){
		this.count=30;
	}
  }
}
</script>

<style lang="css">
.container{
	width:100%;
	text-align:center;
	display:flex;
	justify-content:space-around;
}
.card{
	width:75%;
	margin-top:15px;
	padding:15px;
	border-radius:10px;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	text-align:center;
	background:white;
	color:#000000;
}
</style>
