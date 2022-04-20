<template>
	<div class="chooseContainer">
		<div class="items">
			<font-awesome-icon icon="chart-line"/><span>LINE</span>
		</div>
		<div class="items">
			<font-awesome-icon icon="chart-simple"/><span>BAR</span>
		</div>
		<div class="items">
			<font-awesome-icon icon="chart-pie"/><span>PIE</span>
		</div>
	</div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartLine, faChartSimple, faChartPie } from '@fortawesome/free-solid-svg-icons';
library.add(faChartPie)
library.add(faChartLine)
library.add(faChartSimple)

export default {
	name: 'ChooseGraphType',
	data () {
		return{}
	}
}
</script>

<style>
.chooseContainer{
	width:100%;
	display:flex;
	justify-content:space-around;
}
.items{
	font-size:35px;
}
.items > * {
	cursor:pointer;
	color:rgba(11,43,57,1);
}
.items span {
	font-size:20px;
	font-family:'open sans';
	font-weight:800;
	line-height:35px;
}
</style>
