<template>
	<div id="orderItem" vertical-align="center" class="row-height">
		<el-col :span="4" class="row-height">	
		</el-col>
		<el-col :span="4" class="row-height">
			<h2>{{orderItem.Pname}}</h2>
		</el-col>
		<el-col :span="4" class="right-align row-height">
			<h2>{{orderItem.Price}}</h2>
		</el-col>
		<el-col :span="4" class="right-align row-height">
			<h2>{{orderItem.DiscountNumber}}</h2>
		</el-col>
		<el-col :span="4" class="right-align row-height">
			<h2>{{orderItem.Quantity}}</h2>
		</el-col>
	</div>
</template>

<script>
	export default {
		name: "OrderItem",
		props: {
			orderItem: Object
		},
		methods: {
		}
	}
</script>

<style>
	.right-align {
		text-align: right;
	}
	
	.row-height {
		height: 3.75rem;
	}
	
	.ui-vertical-align {
		margin-top: 0.625rem;
	}
</style>
