<template>
	<div id="shop-list-products-In-row">
		<el-row :gutter="20">
			<el-col :span="7" v-for="(o, index) in 3" :key="o" :offset="index >= 0 ? 1 : 0">
				<el-card :body-style="{ padding: '0px' }">
					<img :src="productsInfo[index].imageSrc" class="shpo-list-card-image">
					<div style="padding: 12px;">
						<div class="shpo-list-card-content">
							<div class="shpo-list-card-text">
								<h3 style="margin: 0px;">{{productsInfo[index].name}}</h3>
								<h4 style="margin: 3px;">{{productsInfo[index].describtion}}</h4>
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
				} else {
					this.iconNameList[index] = iconNameShopingCart;
					console.log(iconNameShopingCart);
				}

			}
		}
	}
</script>

<style>
	.shpo-list-card-content{
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
