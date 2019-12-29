<template>
	<div id="payment-content">
		<div class='payment-cotent-text'>
			<el-table :data="paymentItems" style="width: 100%">
				<el-table-column prop="DateTime" label="日期">
				</el-table-column>
				<el-table-column prop="Pname" label="姓名">
				</el-table-column>
				<el-table-column prop="Price" label="價格">
				</el-table-column>
			</el-table>
			<div>
			</div>
		</div>
	</div>
</template>

<script>
	import ApiHelper from '../../Api/base.js';

	const apiHelper = new ApiHelper();
	export default {
		name: "PaymentContent",
		data: () => {
			return {
				paymentItems: "",
				total: 0
			}
		},
		methods: {
			splitProducts(products) {
				let array = [];
				let order = [];
				let date = products[0].DateTime;
				let i;
				while ( i = 0, i < products.length, i++) {
					if (date === products[i].DateTime) {
						order.push(products[i]);
					} else {
						array.push(order);
						order = [];
						date = products[i].DateTime;
					}
				}
				return array;
			},
		},
		async mounted() {
			this.paymentItems = await apiHelper.getBuyByUserName(this.$store.getters.username);
			this.paymentItems = this.splitProducts(this.paymentItems);
			console.log("SplitProducts: ", this.paymentItems);
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
