<template>
	<div id="product-content">
		<el-row :gutter="20">
			<el-col :span="3">
				<div class='sell-grid'></div>
			</el-col>
			<el-col :span="9">
				<div class='sell-grid'>
					<img :src="productInfo.imageSrc" width="50%" style="margin-top: 100px;">
				</div>
			</el-col>
			<el-col :span="2">
				<div class='sell-grid'>
					<div class='row-text' v-for="(label) in labels" :key="label">{{label}}</div>
				</div>
			</el-col>
			<el-col :span="4">
				<div class='sell-grid'>
					<div class="row-size">
						<h3>{{productInfo.name}}</h3>
					</div>
					<div class="row-size">
						<h3>{{productInfo.cate}}</h3>
					</div>
					<div class="row-size">
						<h3>{{productInfo.source}}</h3>
					</div>
					<div class="row-size">
						<h3>{{priceText}}</h3>
					</div>
					<div class="row-size">
						<el-input-number v-model="productInfo.quantity" :min="1" :max="productInfo.inventory"></el-input-number>
					</div>
					<div class="row-size">
						<h3>{{productInfo.inventory}}</h3>
					</div>
					<div class="row-size">
						<h3>{{productInfo.saleDate}}</h3>
					</div>
					<div class="row-size">
						<h3>{{productInfo.describtion}}</h3>
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
	export default {
		name: "ProductContent",
		data: () => {
			return {
				productInfo: {
					name: product.Pname,
					cate: product.Category,
					describtion: product.Description,
					source: product.Source,
					price: product.Price,
					quantity: product.Quantity,
					inventory: product.Inventory,
					saleDate: product.SaleDate,
					imageSrc: product.ImageSrc,
					discount: product.Discount
				},
				priceText: "",
				isOrder: false,
				labels: labels,
			}
		},
		methods: {
			OrderProduct() {
				if (this.isOrder == false) {
					this.isOrder = true;
					this.$message('成功加入訂單');
					this.$http.post("http://104.199.190.234/addorderitemtocart", {
						ProductId: this.$route.params.id,
						CartId: 'xxx',
						Quantity: this.quantity
					}).then((res) => {
						console.log(res);
					}, () => {
						console.log('Error');
					})
				} else {
					this.$message('商品已存在於訂單');
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
			this.$http.get("http://104.199.190.234:80/users").then((res) => {
				console.log(res);
			}, () => {
				console.log("Error");
			})
			this.GetProductText();
		}
	}
</script>

<style>
	#sell-content {
		font-family: "微软雅黑";
		padding: 30px;
	}

	.sell-grid {
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
		width: 100%;
		margin-top: 100px;
		text-align: center;
	}
</style>
