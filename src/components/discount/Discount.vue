<template>
	<title>Discount</title>
	<div id="home" style=" maring-top:0px">
		<Header></Header>
		<DiscountContent></DiscountContent>
		<Footer></Footer>
	</div>
</template>
<script>
	import Footer from "../footer/Footer.vue";
	import Header from "../header/Header.vue";
	import DiscountContent from "./DiscountContent.vue"
	export default {
		name: "Discount",
		components: {
			Footer,
			Header,
			DiscountContent
		}
	};
</script>

<style>
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
