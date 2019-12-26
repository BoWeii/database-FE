<template>
	<div id="cart-content">
		<div class='cart-cotent-text'>
			<div v-if="noProducts">
				<h1>Your cart is currently empty</h1>
				<el-button type='warning'>Return to shop</el-button>
				<h5>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h5>
			</div>
			<div v-else>
				<div vertical-align="center" class="row-height">
					<el-col :span="14" class="row-height">
						<h2>Name</h2>
					</el-col>
					<el-col :span="3" class="right-align row-height">
						<h2>Quantity</h2>
					</el-col>
					<el-col :span="3" class="right-align row-height">
						<h2>Price</h2>
					</el-col>
				</div>
				<div v-for="(orderItem, index) in orderItems" :key="index">
					<OrderItem @click-delete="clickDelete(index)" @change-quantity="changeQuantity" :order="index" :name="orderItem.Pname" :price="orderItem.Price" :quantity="orderItem.Quantity" :discountType="orderItem.DiscountType" :discountNumber="orderItem.DiscountNumber"></OrderItem>
				</div>
				<div>
					<el-col :span="20" class="total-price-horizontal">
						<h2>Total price : &nbsp;</h2>
						<h2 v-text="totalPrice"></h2>
					</el-col>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import OrderItem from './OrderItem.vue'
	import ApiHelper from "../../Api/base.js";

	let apiHelper = new ApiHelper();

	export default {
		name: "CartContent",
		components: {
			OrderItem
		},
		data: () => {
			return {
				orderItems: "",
				totalPrice: 0,
				ship: 60,
				noProducts: false
			}
		},
		methods: {
			getOrderItemPrice(orderItem) {
				let price = orderItem.Price * orderItem.Quantity
				if (orderItem.DiscountType === "Shipping") {
					if (price < orderItem.DiscountNumber) {
						price += this.ship
					}
				} else if (orderItem.DiscountType === "Special") {
					price = price * orderItem.DiscountNumber / 100 + this.ship
				} else if (orderItem.DiscountType === "Seasoning") {
					price = price * orderItem.DiscountNumber / 100 + this.ship
				}
				return Math.ceil(price)
			},
			calcTotalPrice() {
				this.totalPrice = 0
				for (let orderItem of this.orderItems) {
					if (orderItem.DiscountType != "") {
						this.totalPrice += this.getOrderItemPrice(orderItem)
					}
				}
			},
			async changeQuantity(quantity, index) {
				this.orderItems[index].Quantity = quantity;
				await apiHelper.modifyOrderItem({
					"ProductId": this.orderItems[index].ProductId,
					"CartId": this.$route.params.cartid,
					"Quantity": this.orderItems[index].Quantity
				});
				console.log(this.orderItems);
				this.calcTotalPrice()
			},
			async clickDelete(index) {
				await apiHelper.dmeleteOderItem({
					"ProductId": this.orderItems[index].ProductId,
					"CartId": this.$route.params.cartid
				});
				delete this.orderItems[index];
				this.$root.reload();
			},
			async getOrderItemsFromBackEnd() {
				let res = await apiHelper.getOrderItems("?CartId=" + this.$route.params.cartid);
				if (res) {
					this.orderItems = res.items;
					if (this.orderItems === undefined)
						this.noProducts = true;
				} else {
					console.log('getOrderItemsFromBackEnd Error');
				}

			}
		},
		async created() {
			await this.getOrderItemsFromBackEnd();
			this.calcTotalPrice()
		},
	}
</script>

<style>
	#cart-content {
		height: 500px;
		background: white;
		padding: 10px 0px;
		text-align: left;
	}

	.cart-cotent-text {
		padding: 50px 100px;
	}

	.total-price-horizontal {
		display: flex;
		justify-content: flex-end;
	}
</style>
