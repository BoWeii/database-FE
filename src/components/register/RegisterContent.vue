<template>
  <div id="register" class="login">
    <h1 style="justify-content: flex-start;display:flex;">Register</h1>
    <el-form class="form" :model="model" ref="form" @submit.native.prevent="login">
      <el-form-item prop="email" style="margin-bottom:0px;">
        <label style="margin:0px; justify-content: flex-start;display:flex;">Email</label>
        <el-input
          style="border: 1px solid #323232 !important;    border-radius: 5px;"
          v-model="model.email"
        ></el-input>
      </el-form-item>
      <el-form-item prop="username" style="margin-bottom:0px;">
        <label style="margin:0px; justify-content: flex-start;display:flex;">Username</label>
        <el-input
          style="border: 1px solid #323232 !important;    border-radius: 5px;"
          v-model="model.username"
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
export default {
  name: "register",
  data() {
    return {
      validCredentials: {
        username: "lightscope",
        password: "lightscope",
        email: "lightscope"
      },
      model: {
        username: "",
        password: "",
        email: ""
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

    async login() {
      let valid = await this.$refs.form.validate();
      if (!valid) {
        return;
      }

      this.loading = true;
      await this.simulateLogin();
      this.loading = false;
      if (
        //確認database身分有無重複(此處待修正)
        this.model.username === this.validCredentials.username &&
        this.model.password === this.validCredentials.password
      ) {
        this.$message.success("Login successfull");
      } else {
        this.$message.error("Username or password is invalid");
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