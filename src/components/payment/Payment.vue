<template>
	<div id='Payment'>
		<title>Payment</title>
		<Header/>
		<div class="payment-body">
			<PaymentContent/>			
		</div>
		<Footer/>
	</div>
</template>

<script>
	import PaymentContent from './PaymentContent.vue'
	import Header from '../header/Header.vue';
	import Footer from "../footer/Footer.vue";
	export default{
		name: "Payment",
		components:{
			Header,
			Footer,
			PaymentContent
		}
	}
</script>

<style>
	.payment-body{
		height: 700px;
		background-color: #f8fbfb;
	}
</style>
