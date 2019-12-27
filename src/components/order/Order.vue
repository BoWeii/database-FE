<template>
	<div id='order'>
		<Header/>
		<div class="order-body">
			<OrderContent/>			
		</div>
		<Footer/>
	</div>
</template>

<script>
	import OrderContent from './OrderContent.vue'
	import Header from '../header/Header.vue';
	import Footer from "../footer/Footer.vue";
	export default{
		name: "Order",
		components:{
			Header,
			Footer,
			OrderContent
		}
	}
</script>

<style>
	.order-body{
		height: 700px;
		background-color: #f8fbfb;
	}
</style>
