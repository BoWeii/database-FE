<template>
	<div class="shop-content" ref='list' @scroll="handleScroll">
		<title>Shop</title>
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
					<div v-if="isEmpty">
						<h1>We don't find anything you searched</h1>
						<h5>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h5>
					</div>
					<div v-else>
						<ShopListHeader :end="quantityInList" :total="products.length"></ShopListHeader>
						<div v-for="(productInList, index) in productsInList" :key="index" >
							<ShopListProductsInRow :products="productInList"></ShopListProductsInRow>
						</div>
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

	const apiHelper = new ApiHelper();
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
				productsInList: [],
				isLoading: false,
				quantityInList: 0,
				isEmpty: false
			}
		},
		methods: {
			addPorductsToList() {
				this.isLoading = true;
				let count = 0;
				let productInfo = []
				while (this.quantityInList < this.products.length && count < 3) {
					productInfo.push(this.products[this.quantityInList]);
					count += 1;
					this.quantityInList += 1;
				}
				this.productsInList.push(productInfo);
			},
			async getProductFromBackend() {
				this.isLoading = false;
				this.products = await apiHelper.getProductByPname(this.$route.query.p_name);
				if(this.products.length === 0) {
					this.isEmpty = true;
				}
			},
			handleScroll() {
				let list = this.$refs.list;
				console.log("Scroll: ", list.scrollTop, list.offsetHeight, list.scrollHeight)
				if (this.isLoading) return;
				if (list.scrollTop + list.offsetHeight >= list.scrollHeight && this.productInList.length < 6) {
					this.addPorductsToList();
					this.isLoading = false;
				}
			}
		},
		async created() {
			await this.getProductFromBackend();
			for (let i = 0; i < 3; i++) {
				this.addPorductsToList();
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
