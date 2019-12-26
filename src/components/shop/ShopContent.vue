<template>
	<div class="shop-content" ref='list' @scroll="handleScroll">
		<el-row :gutter="20">
			<el-col :span="4">
				<div class="shop-content-grid-content"></div>
			</el-col>
			<el-col :span="4">
				<div class="shop-content-grid-content ">
					<ShopProductCategories></ShopProductCategories>
					<ShopFilterByPrice></ShopFilterByPrice>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="shop-content-grid-content">
					<ShopListHeader :end="quantity" :total="this.products.length"></ShopListHeader>
					<div v-for="(productInfo, index) in productsInfo" :key="index">
						<ShopListProductsInRow :products-info="productInfo"></ShopListProductsInRow>
					</div>
				</div>
			</el-col>
			<el-col :span="4">
				<div class="shop-content-grid-content"></div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import ShopProductCategories from './ShopProductCategories.vue';
	import ShopFilterByPrice from './ShopFilterByPrice.vue';
	import ShopListProductsInRow from './ShopListProductsInRow.vue';
	import ShopListHeader from './ShopListHeader'
	import ApiHelper from '../../Api/base.js';
	const productInfo = [{
			"Id": "1",
			"PName": "Banana",
			"Price": "Test",
			"ImageSrc": "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg"
		},
		{
			"Id": "2",
			"PName": "Apple",
			"Price": "Test",
			"ImageSrc": "https://www.insideedition.com/sites/default/files/images/2019-07/073119-banana-1280x720-recovered.jpg"
		},
		{
			"Id": "3",
			"PName": "Watermelon",
			"Price": "Test",
			"ImageSrc": "https://images.unsplash.com/photo-1563114773-84221bd62daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1350&q=80"
		}
	]
	const productsInfo = [productInfo, productInfo, productInfo]
	let apiHelper = new ApiHelper();
	export default {
		name: "ShopContent",
		components: {
			ShopProductCategories,
			ShopFilterByPrice,
			ShopListProductsInRow,
			ShopListHeader
		},
		data: () => {
			return {
				products: "",
				productsInfo: productsInfo,
				isLoading: false,
				quantity: 0
			}
		},
		methods: {
			AddPorductsInfo() {
				this.isLoading = true;
				let productInfo = [];
				let count = 0
				while (this.quantity < this.products.item.length && count < 3) {
					productInfo.push(this.products.item[this.quantity]);
					count += 1;
					this.quantity += 1;
				}
				this.productsInfo.push(productInfo);
			},
			HandleScroll() {
				const list = this.$refs.list;
				
				if (this.isLoading) return;

				if (list.scrollTop + list.offsetHeight >= list.scrollHeight && productsInfo.length < 6) {
					this.AddPorductsInfo();
					this.isLoading = false;
				}
			}
		},
		mounted() {
			try {
				this.products = apiHelper.getProducts({
					"p_name": this.$route.query.p_name,
					"s_username": ""
				})
			} catch (e) {
				console.log(e);
			}
		}
	}
</script>

<style>
	.shop-content-grid-content {
		height: 200px;
	}

	.shop-content {
		position: fixed;
		top: 12rem;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: auto;
		background-color: #f8fbfb
	}
</style>
