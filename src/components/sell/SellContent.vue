<template>
	<div id="sell-content">
		<el-row :gutter="20">
			<el-col :span="3">
				<div class='sell-grid'></div>
			</el-col>
			<el-col :span="4">
				<div class='sell-grid'>
					<div class='row-text' v-for="(label) in labels" :key="label">{{label}}</div>
				</div>
			</el-col>
			<el-col :span="8">
				<div class='sell-grid'>
					<div class="row-size">
						<el-input placeholder="請輸入商品名稱" v-model="productName" maxlength="10" show-word-limit />
					</div>
					<div class="row-size" style="width: 30%;">
						<el-input placeholder="請輸入商品價錢" v-model="productPrice" />
					</div>
					<div class="row-size" style="width: 30%;">
						<el-select v-model="productType" placeholder="選擇商品種類">
							<el-option option v-for="option in typeOptions" :key="option.name" :label="option.name" :value="option.name"></el-option>
						</el-select>
					</div>
					<div class="row-size">
						<el-input placeholder="輸入圖片Url" v-mode="productUrl">
							<template slot="prepend">Http://</template>
						</el-input>
					</div>
					<div class="row-size">
						<el-input placeholder="請簡單描述" v-model="productDescribtion" type="textarea" maxlength="50" :rows="4" show-word-limit resize="none" />
					</div>
					<div class="row-button">
						<el-button type="primary">
							送出
						</el-button>
					</div>
				</div>
			</el-col>
			<el-col :span="4">
				<div class='sell-grid'></div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	const typeOptions = [{
		"name": "西瓜"
	}, {
		"name": "香蕉",
	}, {
		"name": "葡萄"
	}, {
		"name": "其他"
	}]
	const labels = ["商品名稱:", "商品價格:", "商品種類:", "圖片網址:", "商品描述:"]

	export default {
		name: "SellContent",
		data: () => {
			return {
				productName: "",
				productPrice: "",
				productUrl: "",
				productType: "",
				productDescribtion: "",
				typeOptions: typeOptions,
				labels: labels
			}
		}
	}
</script>

<style>
	#sell-content {
		font-family: "微软雅黑";
		padding: 30px;
	}

	.sell-grid {
		height: 500px;
		background-color: white;
	}

	.row-size {
		height: 50px;
		padding: 20px 0px;
	}

	.row-text {
		padding: 20px;
		height: 50px;
		text-align: right;
		line-height: 40px;
	}

	.row-button {
		margin-top: 100px;
		text-align: right;
	}
</style>
