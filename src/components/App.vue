<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import store from "../vuex/Store.vue";
export default {
  store,
  name: "App"
};
</script>