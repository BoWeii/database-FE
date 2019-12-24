<template>
	<div id="Discount-content">
		<div class='Discount-cotent-text'>
			<h1>折扣修改區啦幹</h1>
			<table border="1">
				<tr>
					<td>折扣種類</td>
					<td>折扣日期</td>
				</tr>
			</table>
			<el-button type='primary'>new discount</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "CDiscountContent",
	}
</script>

<style>
	#Discount-content {
		margin-right: 0px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		/*margin-bottom: 0px;
    margin-left: 5%;*/
		margin-bottom: 30px;
		margin-top: 30px;
		margin-right: 25%;
		margin-left: 25%;
		border-radius: 5px;
		min-height: calc(100vh - 386px);
	}

	.Discount-cotent-text {
		padding: 50px 100px;
	}
</style>
