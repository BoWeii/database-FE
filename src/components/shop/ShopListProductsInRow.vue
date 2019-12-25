<template>
	<div id="shop-list-products-In-row">
		<el-row :gutter="20">
			<el-col :span="7" v-for="(productInfo, index) in productsInfo" :key="productInfo" :offset="index >= 0 ? 1 : 0">
				<el-card :body-style="{ padding: '0px' }">
					<img :src="productInfo.ImageSrc" class="shpo-list-card-image" @click="GoToProduct(productInfo.Id)">
					<div style="padding: 12px;">
						<div class="shpo-list-card-content">
							<div class="shpo-list-card-text">
								<h3 style="margin: 0px;">{{productInfo.PName}}</h3>
								<h4 style="margin: 3px;">{{productInfo.Price}}</h4>
							</div>
							<div class="shpo-list-card-button">
								<el-button v-bind:icon="iconNameList[index]" @mouseover.native="ChangeIconOfButton(index)" @mouseout.native="ChangeIconOfButton(index)" plain></el-button>
							</div>
						</div>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	const iconNameGoods = "el-icon-goods";
	const iconNameShopingCart = "el-icon-shopping-cart-1";
	let iconNameList = [iconNameGoods, iconNameGoods, iconNameGoods];

	export default {
		name: 'ShopListProductsInRow',
		props: {
			productsInfo: Object,
		},
		data: () => {
			return {
				currentDate: "2019/12/3",
				iconNameList: iconNameList,
			}
		},
		methods: {
			ChangeIconOfButton(index) {
				if (this.iconNameList[index] === iconNameShopingCart) {
					this.iconNameList[index] = iconNameGoods;
					console.log(iconNameGoods);
					console.log(this.productsInfo);
				} else {
					this.iconNameList[index] = iconNameShopingCart;
					console.log(iconNameShopingCart);
				}

			},
			GoToProduct(Id) {
				console.log(Id);
				this.$router.push({
					name: 'product',
					params: {
						id: Id
					}
				})
			}
		}
	}
</script>

<style>
	.shpo-list-card-content {
		display: flex;
	}

	.shpo-list-card-text {
		width: 90%;
		text-align: left;
	}

	.shpo-list-card-image {
		height: 150px;
	}
</style>
