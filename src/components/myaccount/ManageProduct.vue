<template>
  <div id="Manage" class="manage" style="text-align-center;">
    <h2 style="font-size:30px;">Your public</h2>

    <div class="manage-column">
      <label class="prfile-lab">
        <h3>Product</h3>
        <h5>{{model.PName}}</h5>
      </label>
      <label class="prfile-lab">
        <h3>Category</h3>
        <h5>{{model.Category}}</h5>
      </label>
      <label class="prfile-lab">
        <h3>Description</h3>
        <h5>{{model.Description}}</h5>
      </label>
      <label class="prfile-lab">
        <h3>Price</h3>
        <h5>{{model.Price}}</h5>
      </label>
      <div class="prfile-lab" style="flex-direction:column;display:flex;">
        <div style="margin-bottom:5px">
          <el-button type="success" @click="update">update</el-button>
        </div>
        <div>
          <el-button type="danger" native-type="submit">delete</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "manage-product",
  data() {
    return {
      model: {
        PName: "Gold apple",
        Category: "Apple",
        Description: "Very good apple!",
        Source: "Taiwan",
        Price: 100,
        Inventory: 20
      }
    };
  },
  methods: {
    async update() {
      this.$router.push({
        name: "modify",
        params: { id: 1 }
      });
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