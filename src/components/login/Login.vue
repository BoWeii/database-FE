<template>
  <div id="Login">
    <el-container>
      <el-header height="180px">
        <Header />
      </el-header>
      <el-main style="background-color:#f8fbfb">
        <LoginContent></LoginContent>
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "../header/Header.vue";
import Footer from "../footer/Footer.vue";
import LoginContent from "./LoginContent";
export default {
  name: "Login",
  components: {
    Header,
    Footer,
    LoginContent
  }
};
</script>

<style>
</style>
