<template>
	<div class="header-container">
		<div class="header-items inline">
			<button>V</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Menu',
	methods: {
		showMenu(){
			//show menu
		},
		hideMenu(){
			//hide menu
		}
	}
}
</script>

<style lang="css">
.header-container{
	width:100%;
	height:50px;
	position:fixed;
	left:0;
	top:0;
	transform: translate3d(-100vw, 0, 0);
}	
.header-items{
	display:inline-block;
	float:right;
}
.inline{
	display:inline-block;
}

</style>

			
