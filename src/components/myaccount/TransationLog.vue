<template>
	<div id="Manage" class="manage" style="text-align-center;">
		<h2 style="font-size:30px;">Transaction log</h2>
		<div class="manage-column" v-for="(order, index) in model.jsons" :key="index">
			<label class="prfile-lab">
				<h3>DateTime</h3>
				<h5>{{order[0].DateTime}}</h5>
			</label>
			<label class="prfile-lab">
				<h3>Pname</h3>
				<h5>{{getProduct(order)}}</h5>
			</label>
			<label class="prfile-lab">
				<h3>Total</h3>
				<h5>{{getTotal(order)}}</h5>
			</label>
			<label class="prfile-lab">
				<h3>State</h3>
				<h5>Preparing</h5>
			</label>
		</div>
	</div>
</template>

<script>
	/*const jsons = {
  items: [
    {
      DateTime: "2019-12-24 14:44:00",
      Pname: "apple",
      Price: 10
    },
    {
      DateTime: "2019-12-24 14:44:00",
      Pname: "banana",
      Price: 100
    }
  ]
};*/
	import ApiHelper from "../../Api/base.js";
	const apiHelper = new ApiHelper();
	export default {
		name: "TransactionLog",
		data: () => {
			return {
				model: {
					jsons: ""
				}
			};
		},
		methods: {
			splitProducts(products) {
				let array = [];
				let order = [];
				let date = products[0].DateTime;
				let i = 0;
				products.push({
					DateTime: ""
				});
				while (i < products.length) {
					if (date === products[i].DateTime) {
						console.log("push: ", i, date);
						order.push(products[i]);
					} else {
						array.push(order);
						order = [];
						order.push(products[i]);
						date = products[i].DateTime;
					}
					i++;
				}
				console.log("Array: ", array);
				return array;
			},
			getTotal(order){
				let total = 0;
				order.forEach((product) => total += product.Price)
				return total
			},
			getProduct(order){
				let products = ""
				order.forEach((product) => products = products + product.Pname + "  ");
				return products
			}
		},
		async mounted() {
			let res = await apiHelper.getTransactionLog(this.$store.getters.cartId);
			res = JSON.parse(res.items);
			this.model.jsons = this.splitProducts(res);
			console.log("in translog", this.model.jsons);
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

	.manage-column {
		border-color: black;
		border-width: 1px;
		border-style: solid;
		align-items: center;
		flex-direction: row;
		display: flex;
		margin-bottom: 50px;
	}
</style>
