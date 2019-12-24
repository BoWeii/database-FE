<template>
	<div id="shop">
		<el-container>
			<el-header height='180px'><Header/></el-header>
			<el-main >
				<ShopContent>
				</ShopContent>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	import Header from '../header/Header.vue';
	import ShopContent from './ShopContent.vue'
	export default {
		name: "Shop",
		components: {
			Header,
			ShopContent
		}
	};
</script>

<style>
</style>
