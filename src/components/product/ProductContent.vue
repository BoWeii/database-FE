<template>
	<div id="payment-content">
		<div class="payment-cotent-text">
			<el-table :data="paymentItems" style="width: 100%">
				<el-table-column prop="DateTime" label="日期"></el-table-column>
				<el-table-column prop="Pname" label="姓名"></el-table-column>
				<el-table-column prop="Price" label="價格"></el-table-column>
			</el-table>
			<div></div>
		</div>
	</div>
</template>

<script>
	import ApiHelper from "../../Api/base.js";
	const labels = ["Name:", "Category:", "Source:", "Price:", "Quantity", "Inventory:", "OnSaleDate:", "Description:"];
	const apiHelper = new ApiHelper();
	export default {
		name: "ProductContent",
		data: () => {
			return {
				productInfo: '',
				priceText: "",
				inventoryText: "",
				quantity: 1,
				isOrder: false,
				labels: labels,
			}
		},
		methods: {
			async orderProduct() {
				if (this.isOrder) {
					this.$message('商品已存在於訂單');
				} else {
					const res = await apiHelper.addOrderItem({
						"ProductId": this.$route.params.id,
						"CartId": this.$store.getters.cartId,
						"Quantity": this.quantity
					});
					if (res) {
						this.$message('成功將商品加入購物車')
					} else {
						this.$message("錯誤!清重新登入後再試");
					}
				}
			},
			async getProductFromBackEnd() {
				console.log(this.$route.params.id);
				let res = await apiHelper.getProductById(this.$route.params.id);
				this.productInfo = res[0];
				console.log("this.productInfo :", this.productInfo);
			},
			getText() {
				if (this.productInfo.discountType === "") {
					this.priceText = this.productInfo.Price;
				} else {
					this.priceText = this.productInfo + "( 優惠:" + this.productInfo.SpecialEventDiscountPolicyCode + ")"
				}
			},
			splitProducts(products) {
				let array = [];
				let order = [];
				let date = products[0].DateTime;
				let i = 0;
				products.push({
					DateTime: ""
				});
				while (i < products.length) {
					if (date === products[i].DateTime) {
						console.log("push: ", i, date);
						order.push(products[i]);
					} else {
						array.push(order);
						order = [];
						order.push(products[i]);
						date = products[i].DateTime;
					}
					i++;
				}
				console.log("Array: ", array);
				return array;
			}
		},
		async mounted() {
			let res = await apiHelper.getBuyByUserName(this.$store.getters.cartId);
			console.log("in pay", res);
			res = this.splitProducts(res);
			this.paymentItems = res[res.length - 1];
		}
	};
</script>

<style>
	#payment-content {
		height: 700px;
		padding: 10px 0px;
		text-align: left;
	}

	<<<<<<< HEAD .product-sell-grid {
		height: 100px;
		background-color: white;
	}

	=======.payment-cotent-text {
		padding: 50px 100px;
	}

	>>>>>>>98c5d303198a2ee27c7ff2391592366e8a1d75fb .total-price-horizontal {
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
