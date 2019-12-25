<template>
	<div id="shop-list-header">
		<div class="home-page"><a v-bind:href="homeUrl">Home</a></div>
		<div class="home-result"><span>Showing 1–{{end}} of {{total}} results</span></div>
		<div class="home-result">
			<el-dropdown>
				<span class="el-dropdown-link">
					Default<span class="nbsp"></span>sorting<i class="el-icon-arrow-down el-icon--left"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item  v-for="(option, index) in options" :key="index">{{option}}</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
	const dropdownOptions = ["Default sorting", "sort by newness", "sort by price:low to high", "sort by price:high to low"];
	export default {
		name: "ShopListHeader",
		props:{
			end: String,
			total: String
		},
		data: () => {
			return {
				homeUrl: "https://www.gamer.com.tw/",
				options:dropdownOptions,
			}
		}
	}
</script>

<style>
	.nbsp:after {
		content: '\00A0';
		speak: none;
	}
	#shop-list-header {
		margin: 30px;
		height: 20px;
		display: flex;
		padding: 8px;
	}

	.home-page {
		text-align: left;
		width: 40%;
	}

	.home-result {
		text-align: right;
		width: 40%;
	}
</style>
