<template>
	<div id="orderItem" vertical-align="center" class="row-height">
		<el-col :span="7" class="row-height">
			<h2>{{name}}</h2>
		</el-col>
		<el-col :span="3" class="right-align row-height">
			<h2>{{price}}</h2>
		</el-col>
		<el-col :span="6" class="right-align row-height">
			<h2>{{discountPrice}}</h2>
		</el-col>
		<el-col :span="4" class="right-align row-height">
			<el-input-number @change="ChangeQuantity" v-model="quantity" height="100%" class="ui-vertical-align" :min="0"></el-input-number>
		</el-col>
		<el-col :span="4" class="right-align row-height">
			<el-button @click="ClickDelete" type="danger" height="100%" class="ui-vertical-align">Delete</el-button>
		</el-col>
	</div>
</template>

<script>
	export default {
		name: "OrderItem",
		props: {
			order: Number,
			name: String,
			price: Number,
			quantity: Number,
			discountPrice: Number
		},
		data: () =>{
			return{
				quantity: this.quantity
			}
		},
		methods: {
			ChangeQuantity() {
				this.$emit('change-quantity', this.quantity, this.order)
			},
			ClickDelete() {
				this.$emit('click-delete', this.order)
			},
		},
	}
</script>

<style>
	.right-align {
		text-align: center;
	}

	.row-height {
		height: 3.75rem;
	}

	.ui-vertical-align {
		margin-top: 0.625rem;
	}
</style>
