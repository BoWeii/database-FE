<template>
  <div id="ModifyContent">
    <el-row :gutter="20">
      <el-col :span="3">
        <div class="sell-grid"></div>
      </el-col>
      <el-col :span="4">
        <div class="sell-grid">
          <div class="row-text" v-for="(label) in labels" :key="label">{{label}}</div>
        </div>
      </el-col>
      <el-col :span="8">
        <el-form class="sell-grid" v-model="model" @submit.native.prevent="send">
          <div class="row-size">
            <el-input placeholder="請輸入商品名稱" v-model="model.jsons[0].Pname" show-word-limit />
          </div>
          <div class="row-size" style="width: 30%;">
            <el-input placeholder="請輸入商品價錢" v-model="model.jsons[0].Price" />
          </div>
          <div class="row-size">
            <el-input placeholder="請輸入商品庫存數量" v-model="model.jsons[0].Inventory" />
          </div>
          <div class="row-size" style="width: 30%;">
            <el-select v-model="model.jsons[0].Category" placeholder="選擇商品種類">
              <el-option
                option
                v-for="option in model.typeOptions"
                :key="option.name"
                :label="option.name"
                :value="option.name"
              ></el-option>
            </el-select>
          </div>
          <div class="row-size">
            <el-input placeholder="輸入圖片Url" v-model="model.jsons[0].ImageSrc">
              <template slot="prepend">Http://</template>
            </el-input>
          </div>
          <div class="row-size">
            <el-input
              placeholder="請簡單描述"
              v-model="model.jsons[0].Description"
              type="textarea"
              maxlength="50"
              :rows="4"
              show-word-limit
              resize="none"
            />
          </div>
          <div class="row-button">
            <el-button type="primary" native-type="submit">送出</el-button>
          </div>
        </el-form>
      </el-col>
      <el-col :span="4">
        <div class="sell-grid"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
const typeOptions = [
  {
    name: "西瓜"
  },
  {
    name: "香蕉"
  },
  {
    name: "葡萄"
  },
  {
    name: "其他"
  }
];

import ApiHelper from "../../../Api/base.js";
const apiHelper = new ApiHelper();
export default {
  name: "ModifyContent",
  data() {
    return {
      model: {
        jsons: "",
        typeOptions: typeOptions
      }
    };
  },
  methods: {
    async send() {
      let apiHelper = new ApiHelper();
      let data = {
        ProductId: this.$route.params.id,
        StaffUserName: this.model.jsons[0].StaffUserName,
        Description: this.model.jsons[0].Description,
        Pname: this.model.jsons[0].Pname,
        Category: this.model.jsons[0].Category,
        Source: this.model.jsons[0].Source,
        Price: this.model.jsons[0].Price,
        Inventory: this.model.jsons[0].Inventory,
        OnSaleDate: this.model.jsons[0].OnSaleDate,
        ImageSrc: this.model.jsons[0].ImageSrc
      };
      let res = apiHelper.productModify(data);
      if (res) {
        alert("Modify the product successful");
        this.$router.push("/");
      }
    }
  },
  async mounted() {
    const res = await apiHelper.getProductByID(this.$route.params.id);
    this.model.jsons = JSON.parse(res.items);
  }
};
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