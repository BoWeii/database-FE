<template>
  <div id="Modify">
    <Header />
    <div class="Modify-body">
      <ModifyContent />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../../header/Header.vue";
import Footer from "../../footer/Footer.vue";
import ModifyContent from "./ModifyContent.vue";

export default {
  name: "Modify",
  components: {
    Header,
    Footer,
    ModifyContent
  }
};
</script>

<style>
.Modify-body {
  height: 1000px;
  padding: 20px;
  background-color: white;
}
</style>
