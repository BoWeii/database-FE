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
					<ShopListHeader :end="quantityInList" :total="products.length"></ShopListHeader>
					<div v-for="(productInList, index) in productsInList" :key="index">
						<ShopListProductsInRow :products-info="productInList"></ShopListProductsInRow>
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
	const productInfo = [
		{
			"PName": "Banana",
			"Price": "Test",
			"ImageSrc": "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg"
		},
		{
			"PName": "Apple",
			"Price": "Test",
			"ImageSrc": "https://www.insideedition.com/sites/default/files/images/2019-07/073119-banana-1280x720-recovered.jpg"
		},
		{
			"PName": "Watermelon",
			"Price": "Test",
			"ImageSrc": "https://images.unsplash.com/photo-1563114773-84221bd62daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1350&q=80"
		}
	]
	const productsInList = [productInfo, productInfo, productInfo]
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
				productsInList: productsInList,
				isLoading: false,
				quantityInList: 0
			}
		},
		methods: {
			addPorductsToList() {
				this.isLoading = true;
				let count = 0;
				let productInfo = []
				while(this.quantityInList < this.products.length && count < 3){
					productInfo.push(this.products[this.quantityInList]);
					count += 1;
					this.quantityInList += 1;
				}
			},
			async getProductFromBackend() {
				this.isLoading = true;
				this.products  = await apiHelper.getProducts({
					"p_name": this.$route.query.p_name,
					"s_username": ""
				})
			},
			handleScroll() {
				const list = this.$refs.list;
				if (this.isLoading) return;

				if (list.scrollTop + list.offsetHeight >= list.scrollHeight && productsInList.length < 6) {
					this.addPorductsToList();
					this.isLoading = false;
				}
			}
		},
		async mounted(){
			await this.getProductFromBackend();
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
