<template>
	<div id="shop-list-products-In-row">
		<el-row :gutter="20">
			<el-col :span="7" v-for="(product, index) in products" :key="index" :offset="index >= 0 ? 1 : 0">
				<el-card :body-style="{ padding: '0px' }">
					<img :src="product.ImageSrc" class="shpo-list-card-image" @click="goToProduct(product.ProductId)">
					<div style="padding: 12px;">
						<div class="shpo-list-card-content">
							<div class="shpo-list-card-text">
								<h3 style="margin: 0px;">{{product.PName}}</h3>
								<h4 style="margin: 3px;">{{product.Price}}</h4>
							</div>
							<div class="shpo-list-card-button">
								<el-button v-bind:icon="iconNameList[index]" @mouseover.native="changeIconOfButton(index)" @mouseout.native="changeIconOfButton(index)" plain></el-button>
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
			products: Array,
		},
		data: () => {
			return {
				currentDate: "2019/12/3",
				iconNameList: iconNameList,
			}
		},
		methods: {
			changeIconOfButton(index) {
				if (this.iconNameList[index] === iconNameShopingCart) {
					this.iconNameList[index] = iconNameGoods;
				} else {
					this.iconNameList[index] = iconNameShopingCart;
					console.log(iconNameShopingCart);
				}

			},
			goToProduct(productId) {
				console.log(productId);
				this.$router.push({
					name: 'product',
					params: {
						id: productId
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
