<template>
  <div id="register" class="login">
    <h1 style="justify-content: flex-start;display:flex;">Register</h1>
    <el-form class="form" :model="model" ref="form" @submit.native.prevent="register">
      <el-form-item prop="email" style="margin-bottom:0px;">
        <label style="margin:0px; justify-content: flex-start;display:flex;">Email</label>
        <el-input
          style="border: 1px solid #323232 !important;    border-radius: 5px;"
          v-model="model.mail"
        ></el-input>
      </el-form-item>
      <el-form-item prop="username" style="margin-bottom:0px;">
        <label style="margin:0px; justify-content: flex-start;display:flex;">Username</label>
        <el-input
          style="border: 1px solid #323232 !important;    border-radius: 5px;"
          v-model="model.userName"
        ></el-input>
      </el-form-item>
      <el-form-item prop="username" style="margin-bottom:0px;">
        <label style="margin:0px; justify-content: flex-start;display:flex;">Nickname</label>
        <el-input
          style="border: 1px solid #323232 !important;    border-radius: 5px;"
          v-model="model.nickname"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <label style="margin:0px; justify-content: flex-start;display:flex;">Password</label>
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
        >Register</el-button>
      </el-form-item>
      <div class="link">
        <h5 class="forget" style="margin: 0;margin-top:10px;">back to login</h5>
      </div>
    </el-form>
  </div>
</template>

<script>
import ApiHelper from "../../Api/base.js";
const apiHelper = new ApiHelper();
export default {
  name: "register",
  data() {
    return {
      model: {
        mail: "",
        userName: "",
        password: "",
        nickname: "",
        fname: "test",
        lname: "test",
        phone: "0912345678",
        location: "sea",
        money: "1000.00",
        introduction: "Programming geek.",
        staffFlag: "1"
      },
      loading: false
    };
  },
  methods: {
    simulateLogin() {
      return new Promise(resolve => {
        setTimeout(resolve, 800);
      });
    },

    async register() {
      let data = {
        mail: this.model.mail,
        password: this.model.password,
        userName: this.model.userName,
        nickname: this.model.nickname,
        fname: this.model.fname,
        lname: this.model.lname,
        phone: this.model.phone,
        location: this.model.location,
        money: this.model.money,
        introduction: this.model.introduction,
        staffFlag: this.model.staffFlag
      };
      if (await apiHelper.register(data)) {
        alert("successful register");
        this.$router.push("/login");
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
  /*margin-bottom: 0px;
  margin-left: 5%;*/
  margin-bottom: 30px;
  margin-top: 30px;
  margin-right: 25%;
  margin-left: 25%;
  border-radius: 5px;
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