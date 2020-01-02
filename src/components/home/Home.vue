<template>
	<div id="home" style=" maring-top:0px">
		<title>Home</title>
		<Header></Header>
		<HomeContent></HomeContent>
		<Footer></Footer>
	</div>
</template>
<script>
	import Footer from "../footer/Footer.vue";
	import Header from "../header/Header.vue";
	import HomeContent from "./HomeContent.vue"
	export default {
		name: "Home",
		components: {
			Footer,
			Header,
			HomeContent
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
