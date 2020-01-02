<template>
	<div id="cart">
		<Header></Header>
		<div class="cart-body">
			<el-row :gutter="0">
				<el-col :span="4">
					<div class='cart-grid'/>
				</el-col>
				<el-col :span="14">
					<CartContent scr="5"/>
				</el-col>
				<el-col :span="6">
					<CartAside />
				</el-col>
			</el-row>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from '../header/Header.vue'
	import Footer from '../footer/Footer.vue'
	import CartContent from "./CartContent.vue"
	import CartAside from './CartAside.vue'
	export default {
		name: "Cart",
		components: {
			Header,
			Footer,
			CartContent,
			CartAside,
		}
	};
</script>

<style>
	.cart-grid{
		height: 700px;
		background-color: white;
		padding:10px 0px;
	}
</style>
