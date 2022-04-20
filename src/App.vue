<template>
	<Slide>
			<span><h6>TARGETS</h6></span>
				<h6>System Performance</h6>
			<div class="item">
				<font-awesome-icon icon="desktop"/>
				<h6>PERFDATA P1</h6>
			</div>
			<div class="item">
				<font-awesome-icon icon="desktop"/>
				<h6>ROUND TRIP AVERAGE</h6>
			</div>
			<div class="item">
				<font-awesome-icon icon="microchip"/>
				<h6> CPU IDLE </h6>
			</div>
				<font-awesome-icon icon="memory"/>
				<font-awesome-icon icon="chart-line"/>
				<font-awesome-icon icon="chart-simple"/>
				<font-awesome-icon icon="chart-pie"/>
				<font-awesome-icon icon="cloud"/>
				<font-awesome-icon icon="globe"/>
<!--
				<font-awesome-icon icon="layer-group"/>
				<font-awesome-icon icon="signal"/>
-->
				<font-awesome-icon icon="upload"/>
				<font-awesome-icon icon="download"/>
				<br>
				
	</Slide>
	<Addrem />
	<div class="bar-container">
		<BarChart/>
	</div>
</template>


<script>
import BarChart from './BarChart.vue';
import mainChart from './MainChart.vue';
import Menu from './Menu.vue';
import Addrem from './addrem.vue';
import { Slide } from 'vue3-burger-menu' 
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDesktop,faMicrochip,faMemory,faChartLine,faChartSimple,faChartPie,faCloud,faGlobe,faLayerGroup,faSignal,faDownload,faUpload } from '@fortawesome/free-solid-svg-icons'
library.add(faDesktop)
library.add(faMicrochip)
library.add(faMemory)
library.add(faChartLine)
library.add(faChartSimple)
library.add(faChartPie)
library.add(faCloud)
library.add(faGlobe)
library.add(faLayerGroup)
library.add(faSignal)
library.add(faUpload)
library.add(faDownload)

export default {
	name: 'App',
	components: {
		Menu, Addrem, Slide, BarChart
	}
}
</script>
.item {
display:inline-block;
}
<style>
.bar-container{
	width:100%;
}
</style>


