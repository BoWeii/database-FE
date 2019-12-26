<template>
	<div id="order-content">
		<div class='order-cotent-text'>
			<div vertical-align="center" class="row-height">
				<el-col :span="4" class="row-height">
				</el-col>
				<el-col :span="4" class="row-height">
					<h2>Name</h2>
				</el-col>				
				<el-col :span="4" class="right-align row-height">
					<h2>Price</h2>
				</el-col>
				<el-col :span="4" class="right-align row-height">
					<h2>DiscountPrice</h2>
				</el-col>
				<el-col :span="4" class="right-align row-height">
					<h2>Quantity</h2>
				</el-col>

			</div>
			<div v-for="(orderItem, index) in orderItems" :key="index">
				<OrderItem :orderItem="orderItem"/>
			</div>
			<div>
				<el-col :span="16" class="total-price-horizontal">
					<h2>Total price :</h2>
				</el-col>
				<el-col :span="4" class="total-price-left">
					<h2>{{total}}</h2>
				</el-col>
			</div>
		</div>
	</div>
</template>

<script>
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

	import OrderItem from './OrderItem.vue'
	export default {
		name: "OrderContent",
		components: {
			OrderItem
		},
		data: () => {
			return {
				orderItems: orderItems.items,
				total: 0
			}
		},
		methods:{
			CountTotal(){
				this.orderItems.forEach((element)=>{
					this.total += element.DiscountNumber;
				})
			}
		},
		mounted(){
			this.CountTotal();
		}
	}
</script>

<style>
	#order-content {
		height:700px;
		padding: 10px 0px;
		text-align: left;
	}

	.order-cotent-text {
		padding: 50px 100px;
	}

	.total-price-horizontal {
		margin-top:100px;
		text-align: left;
		display: flex;
		justify-content: flex-end;
	}
	.total-price-left{
		margin-top: 100px;
		text-align: right;
		font-size: 25px;
		line-height: 0px;
	}
</style>
