<template>
  <div id="Register">
    <el-container>
      <el-header height="180px">
        <Header />
      </el-header>
      <div class="my-account" style="background-color:#f8fbfb">
        <div id="sibar" class="sibar" style="max-width: 320px;">
          <h2>name</h2>
          <div style="margin-bottom: 25px;">__________________</div>
          <div class="tab" @click="sibarValue='Profile'">Profile</div>
          <div class="tab" @click="sibarValue='transactionLog'">Transaction log</div>
          <div class="tab" @click="sibarValue='change-password'">Change password</div>
          <el-button
            :loading="loading"
            style="justify-content: flex-start;display:flex;"
            type="primary"
            native-type="submit"
            block
          >log out</el-button>
        </div>
        <div class="sibar" style="max-width: 700px;">
          <div>
            <component v-bind:is="sibarValue"></component>
          </div>
        </div>
      </div>

      <Footer />
    </el-container>
  </div>
</template>

<script>
import Header from "../header/Header.vue";
import Footer from "../footer/Footer.vue";
import Profile from "./Profile.vue";
import transactionLog from "./TransationLog.vue";
import ChangePassword from "./ChangePassword.vue";
export default {
  name: "MyAccount",
  components: {
    Header,
    Footer,
    Profile,
    transactionLog,
    ChangePassword
  },
  data() {
    return {
      sibarValue: "Profile"
    };
  }
};
</script>

<style>
.my-account {
  padding: 20px;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 386px);
}
.sibar {
  margin-right: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 50px;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(225, 225, 225);
}
.sibar .tab {
  cursor: pointer;
  margin-bottom: 25px;
  padding-bottom: 4px;
  font-size: 16px;
  color: rgb(87, 87, 87);
}
.sibar .tab:hover {
  color: #379e15;
}
</style>
