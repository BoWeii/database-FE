<template>
  <div id="login" class="login">
    <h1 style="justify-content: flex-start;display:flex;">Login</h1>
    <el-form class="form" :model="model" ref="form" @submit.native.prevent="login">
      <el-form-item prop="email" style="margin-bottom:0px;">
        <label style="margin:0px; justify-content: flex-start;display:flex;">email address</label>
        <el-input
          style="border: 1px solid #323232 !important;    border-radius: 5px;"
          v-model="model.mail"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <label style="margin:0px justify-content: flex-start;display:flex;;">Password</label>
        <el-input
          type="password"
          style="border: 1px solid #323232 ; border-radius: 5px;"
          v-model="model.password"
        ></el-input>
      </el-form-item>
      <el-form-item style="margin-bottom:5px;">
        <el-button
          :loading="loading"
          style="justify-content: flex-start;display:flex;"
          type="primary"
          native-type="submit"
          block
        >Login</el-button>
      </el-form-item>
      <div class="link">
        <h5 class="forget" style="margin: 0;margin-top:10px; margin-right:20px;">Lost your password?</h5>
        <h5 style="margin: 0;margin-top:10px;margin-right:20px;">|</h5>
        <h5
          id="register"
          @click="register"
          class="forget"
          style="margin: 0;margin-top:10px;"
        >create a account</h5>
      </div>
    </el-form>
  </div>
</template>

<script>
import ApiHelper from "../../Api/base.js";
const apiHelper = new ApiHelper();
export default {
  name: "login",
  data() {
    return {
      model: {
        mail: "boweii@gmail.com",
        password: "123"
      },
      loading: false
    };
  },
  methods: {
    async register() {
      this.$router.push("/register");
    },
    async login() {
      let data = { mail: this.model.mail, password: this.model.password };
      if (await apiHelper.login(data)) {
        await this.$store.dispatch("setUser");
        this.$router.push("/");
      }
    }
  }
};
</script>
<style header>
@import url("//unpkg.com/element-ui@2.12.0/lib/theme-chalk/index.css");

.login {
  margin-right: 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 30px;
  margin-top: 30px;
  margin-right: 25%;
  margin-left: 25%;
  border-radius: 5px;
  min-height: calc(100vh - 386px);
}
.form {
  border: 1px solid #d3ced2;
  justify-content: center;
  width: 70%;
  padding: 20px;
  border-radius: 5px;
}
.forget:hover {
  color: #379e15;
  cursor: pointer;
}
.link {
  flex-direction: row;
  display: flex;
}
</style>
