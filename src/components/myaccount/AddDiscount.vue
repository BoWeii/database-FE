<template>
	<div id="Manage" class="manage" style="text-align-center;">
		<title>Modify</title>
		<h2 style="font-size:30px;">Transaction log</h2>
		<div class="dis-column">
			<div class="dis-row" style>
				<label class="prfile-lab">Code</label>
				<el-input placeholder="請輸入優惠代碼" v-model="model.code" maxlength="9" show-word-limit />
			</div>
			<div class="dis-row" style>
				<label class="prfile-lab">Name</label>
				<el-input placeholder="請輸入優惠名稱" v-model="model.name" show-word-limit />
			</div>
			<div class="dis-row" style>
				<label class="prfile-lab">Description</label>
				<el-input placeholder="請輸入優惠描述" v-model="model.des" show-word-limit />
			</div>
			<div class="dis-row" style>
				<label class="prfile-lab">Type</label>
				<el-select value-key="name" v-model="model.type" placeholder="選擇優惠類型">
					<el-option option v-for="option in model.typeOptions" :key="option.name" :label="option.name" :value="option.name"></el-option>
				</el-select>
			</div>
			<div class="dis-row" style>
				<label class="prfile-lab">Min-price</label>
				<el-input placeholder="e.g. 100.00" v-model="model.price" maxlength="10" show-word-limit />
			</div>
			<div class="dis-row" style>
				<label class="prfile-lab">BeginDate</label>
				<el-input placeholder="優惠開始日期YYYY-MM-DD" v-model="model.begin" maxlength="10" show-word-limit />
			</div>
			<div class="dis-row" style>
				<label class="prfile-lab">EndDate</label>
				<el-input placeholder="優惠截止日期YYYY-MM-DD" v-model="model.end" maxlength="10" show-word-limit />
			</div>
			<div class="dis-row" style>
				<label class="prfile-lab">EventRate</label>
				<el-input placeholder="折扣率 0.00 ~ 1.00" v-model="model.rate" maxlength="10" show-word-limit />
			</div>
			<div class="dis-row" style>
				<label class="prfile-lab">ProductId</label>
				<el-input placeholder="請輸入商品編號" v-model="model.p_id" maxlength="10" show-word-limit />
			</div>
			<el-button style="justify-content: flex-start;display:flex;" type="primary" @click="send" block>Sned</el-button>
		</div>
	</div>
</template>

<script>
	const typeOptions = [{
			name: "Seasonings"
		},
		{
			name: "Special Event"
		},
		{
			name: "Shipping"
		}
	];
	import ApiHelper from "../../Api/base.js";
	const apiHelper = new ApiHelper();
	export default {
		name: "TransactionLog",
		data() {
			return {
				model: {
					code: "SHI000001",
					name: "A Shipping Discount Policy",
					des: "1",
					type: "Seasonings",
					price: "500",
					begin: "2018-01-01",
					end: "2018-01-01",
					rate: "0.5",
					p_id: "3",
					typeOptions: typeOptions
				}
			};
		},
		methods: {
			async send() {
				let data = {
					code: this.model.code,
					name: this.model.name,
					description: this.model.des,
					type: this.model.type,
					staffUserName: this.$store.getters.username,
					shippingMinimumOrderPrice: this.model.price,
					seasoningsRate: this.model.rate,
					seasoningsBeginDate: this.model.begin,
					seasoningsEndDate: this.model.end,
					specialEventBeginDate: this.model.begin,
					specialEventEndDate: this.model.end,
					specialEventRate: this.model.rate,
					specialEventProductIds: this.model.p_id.split(",")
				};
				if (await apiHelper.sendDiscount(data, this.$store.getters.username)) {
					alert("send successfuly");
					this.$router.push("/");
				}
			}
		}
	};
</script>
<style header>
	.manage {
		-webkit-flex: 1;
		flex: 1;
	}

	.forget:hover {
		color: #379e15;
		cursor: pointer;
	}

	.link {
		flex-direction: row;
		display: flex;
	}

	.manage .prfile-lab {
		flex-direction: column;
		margin: 0px;
		display: flex;
		padding: 12px 5px;
		width: 120px;
		align-items: center;
	}

	.manage .prfile-lab h2 {
		font-size: 14px;
		align-items: center;
	}

	.manage .profile-input {
		border: 1px solid #323232 !important;
		border-radius: 5px;
	}

	.dis-column {
		align-items: center;
		flex-direction: column;
		display: flex;
		margin-bottom: 50px;
	}

	.prfile-lab {
		margin: 0px;
		justify-content: start;
		display: flex;
		padding: 12px 5px;
		width: 120px;
	}

	.dis-row {
		flex-direction: row;
		display: flex;
		margin-bottom: 20px;
	}
</style>
