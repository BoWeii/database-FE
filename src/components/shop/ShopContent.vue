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
					<ShopListHeader></ShopListHeader>
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
	const productInfo = {
		"0": {
			"name": "Banana",
			"describtion": "Test",
			"imageSrc": "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg"
		},
		"1": {
			"name": "Apple",
			"describtion": "Test",
			"imageSrc": "https://www.insideedition.com/sites/default/files/images/2019-07/073119-banana-1280x720-recovered.jpg"
		},
		"2": {
			"name": "Watermelon",
			"describtion": "Test",
			"imageSrc": "https://images.unsplash.com/photo-1563114773-84221bd62daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1350&q=80"
		}
	}
	const productsInfo = [productInfo, productInfo, productInfo]
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
				productsInfo: productsInfo,
				isLoading: false
			}
		},
		methods: {
			AddPorductsInfo() {
				this.isLoading = true;
				let res = apiHelper.getProducts({
					"p_name": this.$route.query.p_name,
					"s_username":""
				})
				if(res){
					console.log("get Prodcuts", res);
					this.productsInfo.push(res);
				}else{
					console.log("get product fail");
				}			
			},
			handleScroll() {
				const list = this.$refs.list;
				if (this.isLoading) return;

				if (list.scrollTop + list.offsetHeight >= list.scrollHeight && productsInfo.length < 6) {
					this.AddPorductsInfo();
					this.isLoading = false;
				}
			}
		},
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
