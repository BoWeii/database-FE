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
				let i = 0;
				products.push({"DateTime":""})
				while (i<products.length) {
					if (date === products[i].DateTime) {
						console.log('push: ', i, date);
						order.push(products[i]);
					} else {
						array.push(order);
						order = [];
						order.push(products[i])
						date = products[i].DateTime;
					}
					i++;
				}
				console.log('Array: ', array);
				return array;
			},
		},
		async mounted() {
			let res = await apiHelper.getBuyByUserName(this.$store.getters.cartId);
			res= this.splitProducts(res);
			this.paymentItems = res[res.length-1];
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
