<template>
  <div id="Manage" class="manage" style="text-align-center;">
    <h2 style="font-size:30px;">Your public</h2>

    <div class="manage-column" v-for="(item, index) in model.jsons" :key="index">
      <label class="prfile-lab">
        <h3>Product</h3>
        <h5>{{item.Pname}}</h5>
      </label>
      <label class="prfile-lab">
        <h3>Description</h3>
        <h5>{{item.Description}}</h5>
      </label>
      <label class="prfile-lab">
        <h3>Price</h3>
        <h5>{{item.Price}}</h5>
      </label>
      <label class="prfile-lab">
        <h3>P_id</h3>
        <h5>{{item.ProductId}}</h5>
      </label>
      <div class="prfile-lab" style="flex-direction:column;display:flex;">
        <div style="margin-bottom:5px">
          <el-button type="success" @click="update(item.ProductId)">update</el-button>
        </div>
        <div>
          <el-button type="danger" @click="_delete(item.ProductId)">delete</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*const jsons = {
  items: [
    {
      StaffUserName: "boweii",
      PName: "name1",
      Price: "100",
      Category: "qpp",
      ImageSrc:
        "https://www.penghu-nsa.gov.tw/FileDownload/Album/Big/20161012162551758864338.jpg",
      Source: "japan",
      Inventory: 10,
      Description: "ya",
      SoldQuantity: "yee",
      OnSaleDate: 10,
      typeOptions: "typeOptions",
      labels: "labels"
    },
    {
      StaffUserName: "weii",
      PName: "name1",
      Price: "100",
      Category: "qpp",
      ImageSrc:
        "https://www.penghu-nsa.gov.tw/FileDownload/Album/Big/20161012162551758864338.jpg",
      Source: "japan",
      Inventory: 10,
      Description: "ya",
      SoldQuantity: "yee",
      OnSaleDate: 10,
      typeOptions: "typeOptions",
      labels: "labels"
    }
  ]
};*/
import ApiHelper from "../../Api/base.js";
const apiHelper = new ApiHelper();
export default {
  name: "manage-product",
  data() {
    return {
      model: {
        jsons: ""
      }
    };
  },
  methods: {
    async update(index) {
      this.$router.push({
        name: "modify",
        params: { id: index }
      });
    },
    async _delete(index) {
      if (await apiHelper.deleteProduct(index)) alert("successful delete");
      alert("in delete");
      this.$router.push({
        name: "myAccount"
      });
    }
  },

  async mounted() {
    const res = await apiHelper.getProductByName(this.$store.getters.username);
    this.model.jsons = JSON.parse(res.items);
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