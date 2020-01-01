<template>
  <div id="Manage" class="manage" style="text-align-center;">
    <h2 style="font-size:30px;">Check order</h2>
    <div class="manage-column" v-for="(order, index) in model.jsons" :key="index">
      <label class="prfile-lab">
        <h3>DateTime</h3>
        <h5>{{order[0].DateTime}}</h5>
      </label>
      <label class="prfile-lab">
        <h3>Customer</h3>
        <h5>{{order[0].CustomerUserName}}</h5>
      </label>
      <label class="prfile-lab">
        <h3>Product</h3>
        <h5>{{getProduct(order)}}</h5>
      </label>
      <label class="prfile-lab">
        <h3>State</h3>
        <h5 v-text="order.state"></h5>
      </label>
      <div style="margin-bottom:5px ;margin-right:10px;">
        <el-button type="success" @click.once="changeColor(order)">update</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import ApiHelper from "../../Api/base.js";
const apiHelper = new ApiHelper();
export default {
  name: "check-order",
  data: () => {
    return {
      model: {
        jsons: ""
      }
    };
  },
  methods: {
    changeColor(order) {
      if (order.state === "Preparing") {
        order.state = "Complete";
        this.$forceUpdate();
      }
      console.log("Order state: ", order.state);
    },
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
    getProduct(order) {
      let products = "";
      order.forEach(product => (products = products + product.Pname + " "));
      return products;
    }
  },
  async created() {
    let res = await apiHelper.getStaffOrder(this.$store.getters.username);
    res = JSON.parse(res.items);
    console.log("RES: ", res);
    this.model.jsons = this.splitProducts(res);
    this.model.jsons.forEach(order => (order.state = "Preparing"));
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
