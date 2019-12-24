import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from 'vue-resource';
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./components/App.vue";
import { routes } from "./routes/routes.js";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});
