<template>
  <div id="Register">
    <el-container>
      <el-header height="180px">
        <Header />
      </el-header>
      <el-main style="background-color:#f8fbfb">
        <RegisterContent></RegisterContent>
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
import RegisterContent from "./RegisterContent";
export default {
  name: "Register",
  components: {
    Header,
    Footer,
    RegisterContent
  }
};
</script>

<style>
</style>
