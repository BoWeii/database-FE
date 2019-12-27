<template>
	<div id="paymentItem" vertical-align="center" class="row-height">
		<el-col :span="4" class="row-height">	
		</el-col>
		<el-col :span="4" class="row-height">
			<h2>{{paymentItem.Pname}}</h2>
		</el-col>
		<el-col :span="4" class="right-align row-height">
			<h2>{{paymentItem.Price}}</h2>
		</el-col>
		<el-col :span="4" class="right-align row-height">
			<h2>{{paymentItem.DiscountNumber}}</h2>
		</el-col>
		<el-col :span="4" class="right-align row-height">
			<h2>{{paymentItem.Quantity}}</h2>
		</el-col>
	</div>
</template>

<script>
	export default {
		name: "PaymentItem",
		props: {
			paymentsInfo: Object
		},
		methods: {
		}
	}
</script>

<style>
	.right-align {
		text-align: right;
	}
	
	.row-height {
		height: 3.75rem;
	}
	
	.ui-vertical-align {
		margin-top: 0.625rem;
	}
</style>
