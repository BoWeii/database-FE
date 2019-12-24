<template>
	<div class="product-categories">
		<h3 class="product-categories-title">PRODUCT <span class="nbsp"></span> Categories</h3>
		<div class='product-categories-content' v-for="(category, index) in categories" :key="index">
			<div class='product-categories-content-category'>
				<el-link><h3 style="margin: 0px;">{{category.category}}</h3></el-link>
			</div>
			<div class="product-categories-content-quantity">
				<el-button type="info" size="mini"><h4 style="margin: 0px;">{{category.quantity}}</h4></el-button>
			</div>
		</div>
	</div>
</template>

<script>
	const cagetories = [{
			"category": "Bread",
			"quantity": " 6"
		},
		{
			"category": "Fruits",
			"quantity": " 5"
		},
		{
			"category": "Herbs&Spices",
			"quantity": " 0"
		},
		{
			"category": "Juices",
			"quantity": " 3"
		},
		{
			"category": "Seed & Nuts",
			"quantity": " 3"
		},
		{
			"category": "Vegetables",
			"quantity": "20"
		}
	];
	export default {
		name: "ShopProductCategories",
		data: ()=> {
			return {
				"categories": cagetories,
			}
		}
	}
</script>

<style>
	.nbsp:after {
		content: '\00A0';
		speak: none;
	}

	.product-categories {
		min-height: 320px;
		width:320px;
	}

	.product-categories-content {
		height: 45px;
		display: flex;
	}
	.product-categories-title{
		text-align: left;
		color: #80B530;
	}
	.product-categories-content-category{
		text-align: left;
		margin-top:5px;
		width: 65%;
	}
	.product-categories-content-button{
		height: 5px;
		width: 5px;
	}
</style>
