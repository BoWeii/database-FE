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
				<div v-for="(orderItem, index) in orderItems" :key="orderItem">
					<OrderItem @click-delete="ClickDelete(index)" @change-quantity="ChangeQuantity" :order="index" :name="orderItem.Pname" :price="orderItem.Price" :quantity="orderItem.Quantity" :discountType="orderItem.DiscountType" :discountNumber="orderItem.DiscountNumber"></OrderItem>
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
	const orderItems = {
		"items": [{
			"Pname": "Gold apple",
			"Price": 100,
			"Quantity": 1,
			"DiscountType": "Shipping",
			"DiscountNumber": 0
		}, {
			"Pname": "Pupu apple",
			"Price": 1,
			"Quantity": 20,
			"DiscountType": "Special",
			"DiscountNumber": 30
		}]
	}

	let apiHelper = new ApiHelper();
	export default {
		name: "CartContent",
		components: {
			OrderItem
		},
		data: () => {
			return {
				orderItems: orderItems.items,
				totalPrice: 0,
				ship: 60,
				noProducts: false
			}
		},
		methods: {
			GetOrderItemPrice(orderItem) {
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
			CalcTotalPrice() {
				this.totalPrice = 0
				for (let orderItem of this.orderItems) {
					if (orderItem.DiscountType != "") {
						this.totalPrice += this.GetOrderItemPrice(orderItem)
					}
				}
			},
			ChangeQuantity(quantity, index) {
				this.orderItems[index].Quantity = quantity;
				apiHelper.modifyOrderItem({
					"ProductId": this.orderItems[index].ProductId,
					"CartId": this.$rotuer.params.cartid,
					"Quantity": this.orderItems[index].Quantity
				});				
				this.CalcTotalPrice()
			},
			ClickDelete(index) {
				apiHelper.dmeleteOderItem({
					"ProductId": this.orderItems[index].ProductId,
					"CartId": this.$rotuer.params.cartid
				});
				delete this.orderItems[index];
				this.$root.reload();
			}
		},
		mounted() {
			let res = apiHelper.getOrderItems({
				"CartId": this.$rotuer.params.cartid
			});
			this.orderItems = res.items;
			console.log("test:", this.$rotuer.params.cartid);
			if (this.orderItems === undefined)
				this.noProducts = true;
			this.CalcTotalPrice()
		}
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
