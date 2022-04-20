<template>
<div class="cardcontainer">
	<div class="card">
	<div class="padding">
		<ChooseGraphType />
	</div>
<!--
	<LineChart />
-->
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
import LineChart from './LineChart.vue';
import ChooseGraphType from './ChooseGraphType';
import BarChart from './BarChart.vue';
export default {
  name: 'Addrem',
  data: () => ({
	count:0
}),
components: {
	BarChart, ChooseGraphType, LineChart
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
.cardcontainer{
	width:100%;
	text-align:center;
	display:flex;
	justify-content:space-around;
}
.card{
	width:415px;
	margin-top:25px;
	padding:0px;
	padding-top:8px;
	border-radius:10px;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	text-align:center;
	background:white;
	color:#000000;
}
.padding{
	padding-left:50px;
}
</style>
