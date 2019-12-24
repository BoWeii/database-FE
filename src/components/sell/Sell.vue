<template>
	<div id="sell">
		<Header/>
		<div class="sell-body">
			<SellContent/>
		</div>
		<Footer/>
	</div>
</template>

<script>
	import Header from "../header/Header.vue"
	import Footer from "../footer/Footer.vue"
	import SellContent from "./SellContent.vue"
	export default{
		name: "Sell",
		components:{
			Header,
			Footer,
			SellContent
		}
	}
</script>

<style>
	.sell-body{
		height: 1000px;
		padding: 20px;
		background-color: white;
	}
</style>
