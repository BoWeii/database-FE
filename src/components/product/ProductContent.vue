<template>
	<div id="product-content">
		<el-row :gutter="20">
			<el-col :span="3">
				<div class='product-sell-grid'></div>
			</el-col>
			<el-col :span="9">
				<div class='product-sell-grid'>
					<img :src="productInfo.ImageSrc" width="50%" style="margin-top: 100px;">
				</div>
			</el-col>
			<el-col :span="2">
				<div class='product-sell-grid'>
					<div class='row-text' v-for="(label) in labels" :key="label">{{label}}</div>
				</div>
			</el-col>
			<el-col :span="4">
				<div class='product-sell-grid'>
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
						<el-input-number v-model="productInfo.Quantity" :min="1" :max="productInfo.Inventory"></el-input-number>
					</div>
					<div class="row-size">
						<h3>{{productInfo.Inventory}}</h3>
					</div>
					<div class="row-size">
						<h3>{{productInfo.SaleDate}}</h3>
					</div>
					<div class="row-size">
						<h3>{{productInfo.Description}}</h3>
					</div>
				</div>
			</el-col>
		</el-row>
		<div class="row-button">
			<el-button type="primary" :plain="true" @click="OrderProduct()">
				加入購物車
			</el-button>
		</div>
	</div>
</template>

<script>
	import ApiHelper from "../../Api/base.js";
	const labels = ["Name:", "Category:", "Source", "Price:", "Quantity", "Inventory:", "SaleDate:", "Description:"];
	const product = {
		"Pname": "Gold apple",
		"SUser": "StaffA",
		"Category": "Apple",
		"Description": "Very good apple!",
		"Source": "Taiwan",
		"Price": 100,
		"Inventory": 20,
		"Quantity": 1,
		"SaleDate": "2019-01-01",
		'ImageSrc': "https://freepngimg.com/thumb/apple_fruit/24454-5-apple-fruit-transparent-image.png",
		"Discount": [{
			"name": "free shipping",
			"status": true
		}, {
			"name": "20% off",
			"status": true
		}]
	}
	let apiHelper = new ApiHelper();
	export default {
		name: "ProductContent",
		data: () => {
			return {
				productInfo: product,
				priceText: "",
				isOrder: false,
				labels: labels,
			}
		},
		methods: {
			OrderProduct() {
				if (this.isOrder) {
					this.$message('商品已存在於訂單');
				} else {					
					let res = apiHelper.login({
						"ProductId": "1",
						"CartId": "xxx",
						"Quantity": this.productInfo.quantity
					});
					if (res) {
						this.isOrder = true
						this.$message('成功將商品加入購物車')
					} else {
						this.$("錯誤!清重新登入後再試");
					}
				}
			},
			GetProductText() {
				let text = " ( ";
				this.productInfo.discount.forEach((element) => {
					text += element.name + " ";
				});
				this.priceText = this.productInfo.price + text + ")";
			}
		},
		mounted() {
			try {
				console.log(this.$route.params.id);
				this.productInfo = apiHelper.getProducts({
					"p_name": "",
					"s_username": "jeff"
				});
			} catch (e) {
				console.log(e);
			}
			this.GetProductText();
		}
	}
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
		width: 100%
	}

	.row-text {
		padding: 20px;
		height: 50px;
		text-align: left;
		line-height: 60px;
		font-size: 23px;
	}

	.row-button {
		width: 53%;
		margin-top: 100px;
	}
</style>
