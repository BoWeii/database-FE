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
					<OrderItem @click-delete="clickDelete" @change-quantity="changeQuantity" :order="index" :name="orderItem.Pname" :price="orderItem.Price" :quantity="orderItem.Quantity" :discountType="orderItem.DiscountType" :discountNumber="orderItem.DiscountNumber"></OrderItem>
				</div>
				<div>
					<el-col :span="20" class="total-price-horizontal">
						<h2>Total price : &nbsp;</h2>
						<h2 v-text="totalPrice"></h2>
						<el-button type="info" :plain="true" class='send-button' @click="sendOrder">send</el-button>
					</el-col>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import OrderItem from './OrderItem.vue'
	import ApiHelper from "../../Api/base.js";

	const apiHelper = new ApiHelper();

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
				console.log("Quantity: ", quantity, "index:", index);
				await apiHelper.modifyOrderItem({
					"ProductId": this.orderItems[index].ProductId,
					"CartId": this.$store.getters.cartId,
					"Quantity": this.orderItems[index].Quantity
				});
				this.calcTotalPrice()
			},
			async clickDelete(index) {
				console.log("ProductId: ", this.orderItems[index].ProductId, "index:", index);
				await apiHelper.deleteOrderItem({
					"ProductId": this.orderItems[index].ProductId,
					"CartId": this.$store.getters.cartId
				});
				delete this.orderItems[index];
				location.reload();
			},
			async sendOrder() {
				const res = apiHelper.addBuy(this.$store.getters.cartId);
				if (res.status === 200)
					alert("成功!")
				this.$router.push({
					name: 'home'
				});
			},
			async getOrderItemsFromBackEnd() {
				let res = await apiHelper.getOrderItemsByCartId(this.$store.getters.cartId);
				if (res) {
					this.orderItems = res;
					console.log("Result: ", res);
					if (this.orderItems.length === 0) {
						this.noProducts = true;
					} else {
						this.noProducts = false;
					}
				}
			}
		},
		async created() {
			await this.getOrderItemPrice()();
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

	.send-button {
		font-size: 20px;
		margin-left: 30px;
	}
</style>
