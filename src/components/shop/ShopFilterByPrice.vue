<template>
	<div id="shop-filter-by-price">
		<h3 class="shop-filter-by-price-title">FILTER<span class="nbsp"></span>BY<span class="nbsp"></span>PRICE</h3>
		<div class="shop-filter-by-price-slider">
			<el-slider v-model="filterPrice" range show-top :max="1000"></el-slider>
		</div>
		<div class='shop-filter-by-price-Info'>
			<div class='shop-filter-by-price-Info-text'>
				<h5>
					Price:${{filterPrice[0]}}<span class='nbsp'></span>~<span class='nbsp'></span>${{filterPrice[1]}}
				</h5>
			</div>
			<div class='shop-filter-by-price-Info-button'>
				<el-button type="info">Filter</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ShopFilterByPrice',
		data: () => {
			return {
				"filterPrice": [200, 700]
			}
		}
	}
</script>

<style>
	.nbsp:after {
		content: '\00A0';
		speak: none;
	}

	#shop-filter-by-price {
		min-height: 150px;
		width: 260px;
	}

	.shop-filter-by-price-title {
		margin-top: 10px;
		text-align: left;
		color: #80B530;
	}

	.shop-filter-by-price-Info {
		display: flex;
	}

	.shop-filter-by-price-Info-text {
		text-align: left;
		width: 80%;
	}

	.shop-filter-by-price-Info-button {
		margin-top: 7px;
	}
</style>
