<template>
  <div id="ChangePassword" class="ChangePassword">
    <el-form>
      <h2 style="font-size:30px;">ChangePassword</h2>
      <div class="ChangePassword-column">
        <label class="prfile-lab">password</label>
        <el-input class="ChangePassword-input" type="password" style v-model="model.newpassword1"></el-input>
      </div>
      <div class="ChangePassword-column">
        <label class="prfile-lab">password again</label>
        <el-input class="ChangePassword-input" type="password" style v-model="model.newpassword2"></el-input>
      </div>

      <el-button
        :loading="loading"
        style="align-items: center;"
        type="primary"
        @click="send"
        block
      >save</el-button>
    </el-form>
  </div>
</template>

<script>
import ApiHelper from "../../Api/base.js";
export default {
  name: "ChangePassword",
  data() {
    return {
      model: {
        newpassword1: "",
        newpassword2: ""
      }
    };
  },
  methods: {
    async send() {
      if (this.model.newpassword1 != this.model.newpassword2) {
        console.log(this.model.newpassword1, this.model.newpassword2);
        alert("密碼輸入不相同");
      } else {
        const apiHelper = new ApiHelper();
        const data = { password: this.model.newpassword1 };
        if (apiHelper.changePsd(data, this.$store.getters.username))
          alert("change successful ");
      }
    }
  }
};
</script>
<style header>
.ChangePassword {
  position: absolute;
  top: 0;
  right: 0;
  height: 94%;
  width: 90%;
  margin-top: 2%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 10%;
}
.forget:hover {
  color: #379e15;
  cursor: pointer;
}
.link {
  flex-direction: row;
  display: flex;
}
.ChangePassword .prfile-lab {
  margin: 0px;
  justify-content: start;
  display: flex;
  padding: 12px 5px;
  width: 140px;
}
.ChangePassword .ChangePassword-input {
  border: 1px solid #323232 !important;
  border-radius: 5px;
}

.ChangePassword-column {
  flex-direction: row;
  display: flex;
  margin-bottom: 50px;
}
</style>