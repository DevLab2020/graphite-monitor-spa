import { createApp } from 'vue';
import App from './App.vue';

import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import { Chart, registerables } from 'chart.js';
import { FontAwesomeIcon } from  "@fortawesome/vue-fontawesome";
//import "@fontsource/open-sans";
import "@fontsource/open-sans"

//Vue.config.productionTip = false;
/*
const app = createApp(App)({
	data: ()=> ({
		count:0
	}),
	methods: {
		inc() {
			this.count++;
		}
	}
});
*/
Chart.register(...registerables);
createApp(App)
	.component("font-awesome-icon", FontAwesomeIcon)
	.mount("#app");
