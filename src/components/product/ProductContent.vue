<template>
	<div id="product-content">
		<el-row :gutter="20">
			<el-col :span="3">
				<div class="product-sell-grid"></div>
			</el-col>
			<el-col :span="9">
				<div class="product-sell-grid">
					<img :src="productInfo.ImageSrc" width="50%" style="margin-top: 100px;" />
				</div>
			</el-col>
			<el-col :span="2">
				<div class="product-sell-grid">
					<div class="row-text" v-for="(label) in labels" :key="label">{{label}}</div>
				</div>
			</el-col>
			<el-col :span="4">
				<div class="product-sell-grid">
					<div class="row-size">
						<h3>{{productInfo.Pname}}</h3>
					</div>
					<div class="row-size">
						<h3>{{productInfo.Category}}</h3>
					</div>
					<div class="row-size">
						<h3>{{productInfo.Source}}</h3>
					</div>
					<div class="row-size">
						<h3>{{priceText}}</h3>
					</div>
					<div class="row-size">
						<el-input-number v-model="quantity" :min="1" :max="productInfo.Inventory"></el-input-number>
					</div>
					<div class="row-size">
						<h3>{{inventoryText}}</h3>
					</div>
					<div class="row-size">
						<h3>{{productInfo.OnSaleDate}}</h3>
					</div>
					<div class="row-size">
						<h3>{{productInfo.Description}}</h3>
					</div>
				</div>
			</el-col>
		</el-row>
		<div class="row-button">
			<el-button type="primary" :plain="true" @click="orderProduct">加入購物車</el-button>
		</div>
	</div>
</template>

<script>
	import ApiHelper from "../../Api/base.js";
	const labels = [
		"Name:",
		"Category:",
		"Source:",
		"Price:",
		"Quantity",
		"Inventory:",
		"OnSaleDate:",
		"Description:"
	];
	const apiHelper = new ApiHelper();
	export default {
		name: "ProductContent",
		data: () => {
			return {
				productInfo: "",
				priceText: "",
				inventoryText: "",
				quantity: 1,
				isOrder: false,
				labels: labels
			};
		},
		methods: {
			async orderProduct() {
				if (this.isOrder) {
					this.$message("商品已存在於訂單");
				} else {
					const res = await apiHelper.addOrderItem({
						ProductId: this.$route.params.id,
						CartId: this.$store.getters.cartId,
						Quantity: this.quantity
					});
					if (res) {
						this.$message("成功將商品加入購物車");
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
				if (this.productInfo.SpecialEventDiscountPolicyCode === null) {
					this.priceText = this.productInfo.Price;
				} else {
					this.priceText =
						this.productInfo.Price +
						"( 優惠:" +
						this.productInfo.SpecialEventDiscountPolicyCode +
						")";
				}

				this.inventoryText =
					this.productInfo.Inventory +
					"( 已售: " +
					this.productInfo.SoldQuantity +
					")";
			}
		},
		async mounted() {
			await this.getProductFromBackEnd();
			this.getText();
		}
	};
</script>

<style>
	#sell-content {
		font-family: "微软雅黑";
		padding: 30px;
	}

	.product-sell-grid {
		height: 700px;
		background-color: white;
	}

	.row-size {
		height: 50px;
		padding: 20px 0px;
		line-height: 2px;
		width: 100%;
	}

	.row-text {
		padding: 20px;
		height: 50px;
		text-align: right;
		line-height: 60px;
		font-size: 23px;
	}

	.row-button {
		width: 53%;
		margin-top: 100px;
	}
</style>
