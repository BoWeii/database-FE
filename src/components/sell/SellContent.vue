<template>
  <div id="sell-content">
    <el-row :gutter="20">
      <el-col :span="3">
        <div class="sell-grid"></div>
      </el-col>
      <el-col :span="4">
        <div class="sell-grid">
          <div class="row-text"></div>
        </div>
      </el-col>
      <el-col :span="8">
        <el-form class="sell-grid" v-model="model" @submit.native.prevent="send">
          <div class="row-size">
            <el-input placeholder="請輸入商品名稱" v-model="model.Pname" maxlength="10" show-word-limit />
          </div>
          <div class="row-size">
            <el-input placeholder="請輸入產地來源" v-model="model.Source" maxlength="10" show-word-limit />
          </div>
          <div class="row-size" style="width: 30%;">
            <el-input placeholder="請輸入商品價錢" v-model="model.Price" />
          </div>
          <div class="row-size">
            <el-input placeholder="請輸入商品庫存數量" v-model="model.Inventory" />
          </div>
          <div class="row-size" style="width: 30%;">
            <el-select value-key="name" v-model="model.Category" placeholder="選擇商品種類">
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
            <el-input placeholder="輸入圖片Url" v-model="model.ImageSrc">
              <template slot="prepend">Http://</template>
            </el-input>
          </div>
          <div class="row-size">
            <el-input
              placeholder="請簡單描述"
              v-model="model.Description"
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
import ApiHelper from "../../Api/base.js";
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

export default {
  name: "SellContent",
  data() {
    return {
      model: {
        Pname: "",
        Price: "",
        ImageSrc:
          "https://www.penghu-nsa.gov.tw/FileDownload/Album/Big/20161012162551758864338.jpg",
        Source: "",
        Description: "",
        Category: "",
        Inventory: "",
        typeOptions: typeOptions
      }
    };
  },
  methods: {
    async send() {
      let apiHelper = new ApiHelper();
      let data = {
        StaffUserName: this.$store.getters.username,
        Description: this.model.Description,
        Pname: this.model.Pname,
        Category: this.model.Category,
        Source: this.model.Source,
        Price: this.model.Price,
        Inventory: this.model.Inventory,
        SoldQuantity: "11",
        OnSaleDate: "1999-01-11",
        ImageSrc: this.model.ImageSrc
      };
      const res = await apiHelper.productPublic(data);
      if (res) {
        alert("Public the product successful");
        this.$router.push("/");
      } else {
        alert("Public the product fail");
      }
      console.log(this.model);
    }
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
  text-align: left;
  line-height: 40px;
}

.row-button {
  margin-top: 100px;
  text-align: left;
}
</style>