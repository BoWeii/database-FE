<template>

	<div id="cart-content">
		<div class="cart-cotent-text">
			<div v-if="noProducts">
				<h1>Your cart is currently empty</h1>
				<el-button type="warning">Return to shop</el-button>
				<h5>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h5>
			</div>
			<div v-else>
				<div vertical-align="center" class="row-height">
					<el-col :span="7" class="row-height">
						<h2>Name</h2>
					</el-col>
					<el-col :span="3" class="right-align row-height">
						<h2>Price</h2>
					</el-col>
					<el-col :span="6" class="right-align row-height">
						<h2>Discount Number</h2>
					</el-col>
					<el-col :span="4" class="right-align row-height">
						<h2>Quantity</h2>
					</el-col>
				</div>
				<div v-for="(orderItem, index) in orderItems" :key="index">
					<OrderItem @click-delete="clickDelete" @change-quantity="changeQuantity" :order="index" :name="orderItem.Pname" :price="orderItem.Price" :quantity="orderItem.Quantity" :discountType="orderItem.DiscountType" :discountPrice="orderItem.DiscountPrice"></OrderItem>
				</div>
				<div>
					<el-col  :span="10">
						<el-input v-model="discountCode" placeholder="enter the discount code" @change="calcTotalPrice"></el-input>
					</el-col>
					<el-col :span="10">
						<h2>Shipping: {{ship}}</h2>
					</el-col>
					<el-col :span="20" class="total-price-horizontal">
						<h2>Total price : &nbsp;</h2>
						<h2 v-text="totalPrice"></h2>
						<el-button type="info" :plain="true" class="send-button" @click="sendOrder">send</el-button>
					</el-col>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import OrderItem from "./OrderItem.vue";
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
				noProducts: false,
				discountCode:"",
				seasoningstRate: 1
			};
		},
		methods: {
			async calcTotalPrice(){
				this.totalPrice = 0;
				this.orderItems.forEach((orderItem)=> this.totalPrice += orderItem.DiscountPrice * orderItem.Quantity);
				if(this.discountCode === "")
				{	
					this.ship = 60; 
					this.seasoningstRate = 1; 
				} else {
					const res = await apiHelper.getDiscountByCode(this.discountCode)
					if(res.type === "Seasonings"){
						this.seasoningstRate = res.seasoningsRate; 
					}
					else if(res.type === "Shipping" && this.totalPrice > res.shippingMinimumOrderPrice){
						this.ship = 0; 
					}
				}					
				this.totalPrice += this.ship;
				this.totalPrice *= this.seasoningstRate;
				console.log("Total:", this.totalPrice);
				return this.totalPrice;
			},
			async changeQuantity(quantity, index) {
				this.orderItems[index].Quantity = quantity;
				console.log("Quantity: ", quantity, "index:", index);
				await apiHelper.modifyOrderItem({
					ProductId: this.orderItems[index].ProductId,
					CartId: this.$store.getters.cartId,
					Quantity: this.orderItems[index].Quantity
				});
				this.calcTotalPrice();
			},
			async clickDelete(index) {
				console.log(
					"ProductId: ",
					this.orderItems[index].ProductId,
					"index:",
					index
				);
				await apiHelper.deleteOrderItem({
					ProductId: this.orderItems[index].ProductId,
					CartId: this.$store.getters.cartId
				});
				delete this.orderItems[index];
				location.reload();
			},
			async sendOrder() {
				const res = await apiHelper.addBuy(this.$store.getters.cartId);
				if (res) {
					alert("成功!");
					this.$router.push({
						name: "payment"
					});
				}
			},
			async getOrderItemsFromBackEnd() {
				const res = await apiHelper.getOrderItemsByCartId(
					this.$store.getters.cartId
				);
				if (res) {
					this.orderItems = res;
					console.log("Result: ", res);
					if (this.orderItems.length === 0) {
						this.noProducts = true;
					} else {
						this.noProducts = false;
						await this.getItemsDiscount();
					}
				}
				return true
			},
			async getItemsDiscount() {
				this.itemsDiscountPolicy = [];
				for (let index = 0; index < this.orderItems.length; index++) {
					if (this.orderItems[index].SpecialEventDiscountPolicyCode === null) {
						this.orderItems[index].DiscountPrice = this.orderItems[index].Price
						this.orderItems[index].DiscountPolicy= {};

					} else {
						this.orderItems[index].DiscountPolicy= await apiHelper.getDiscountByCode(this.orderItems[index].SpecialEventDiscountPolicyCode)			
						this.orderItems[index].DiscountPrice = this.orderItems[index].DiscountPolicy.specialEventRate * this.orderItems[index].Price	
					}
					console.log("Name:", this.orderItems[index].Pname,this.orderItems[index].SpecialEventDiscountPolicyCode, this.orderItems[index].DiscountPolicy);
				}				
			}
		},
		async mounted() {
			await this.getOrderItemsFromBackEnd();
			this.calcTotalPrice();	
		}
	};
</script>

<style>
	#cart-content {
		height: 700px;
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
