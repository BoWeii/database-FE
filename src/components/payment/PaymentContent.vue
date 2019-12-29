<template>
	<div id="payment-content">
		<div class='payment-cotent-text'>
			<div vertical-align="center" class="row-height">
				<el-col :span="4" class="row-height">
				</el-col>
				<el-col :span="4" class="row-height">
					<h2>Name</h2>
				</el-col>
				<el-col :span="4" class="right-align row-height">
					<h2>Price</h2>
				</el-col>
				<el-col :span="4" class="right-align row-height">
					<h2>DateTime</h2>
				</el-col>
		
			</div>
			<div v-for="(paymentItem, index) in paymentItems" :key="index">
				<PaymentItem :paymentsInfo="paymentItem" />
			</div>
			<div>
				<el-col :span="16" class="total-price-horizontal">
					<h2>Total price :</h2>
				</el-col>
				<el-col :span="4" class="total-price-left">
					<h2>{{total}}</h2>
				</el-col>
			</div>
		</div>
	</div>
</template>

<script>
	import PaymentItem from './PaymentItem.vue';
	import ApiHelper from '../../Api/base.js';
	
	const apiHelper = new ApiHelper();
	export default {
		name: "PaymentContent",
		components: {
			PaymentItem
		},
		data: () => {
			return {
				paymentItems: "",
				total: 0
			}
		},
		methods: {
			CountTotal() {
				this.paymentItems.forEach((element) => {
					this.total += element.DiscountNumber;
				})
			}
		},
		mounted() {
			this.paymentItems = apiHelper.getBuyByUserName(this.$store.getters.username);
			console.log("THIS payment:", this.paymentItems);
			this.CountTotal();
		}
	}
</script>

<style>
	#payment-content {
		height: 700px;
		padding: 10px 0px;
		text-align: left;
	}

	.payment-cotent-text {
		padding: 50px 100px;
	}

	.total-price-horizontal {
		margin-top: 100px;
		text-align: left;
		display: flex;
		justify-content: flex-end;
	}

	.total-price-left {
		margin-top: 100px;
		text-align: right;
		font-size: 25px;
		line-height: 0px;
	}
</style>
