<template>
	<div id="product">
		<Header/>
		<div class='product-body'>
			<ProductContent />			
		</div>
		<Footer/>
	</div>
</template>

<script>
	import ProductContent from "./ProductContent.vue";
	import Header from '../header/Header.vue';
	import Footer from '../footer/Footer.vue';
	export default {
		name: "Product",
		components: {
			Header,
			ProductContent,
			Footer
		}
	}
</script>

<style>
	.product-body {
		height: 1000px;
		padding: 20px;
		background-color: white;
	}
</style>
