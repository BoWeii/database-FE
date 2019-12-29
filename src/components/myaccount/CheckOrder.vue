<template>
  <div id="Manage" class="manage" style="text-align-center;">
    <h2 style="font-size:30px;">Transaction log</h2>
    <div class="manage-column" v-for="(item, index) in model.jsons" :key="index">
      <label class="prfile-lab">
        <h3>DateTime</h3>
        <h5>{{item.DateTime}}</h5>
      </label>
      <label class="prfile-lab">
        <h3>Pname</h3>
        <h5>{{item.Pname}}</h5>
      </label>
      <label class="prfile-lab">
        <h3>Price</h3>
        <h5>{{item.Price}}</h5>
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
  name: "check-order",
  data() {
    return {
      model: {
        jsons: ""
      }
    };
  },
  async mounted() {
    const res = await apiHelper.getStaffOrder(this.$store.getters.username);
    this.model.jsons = JSON.parse(res.items);
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