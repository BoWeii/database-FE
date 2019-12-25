import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./components/App.vue";
import { routes } from "./routes/routes.js";
import store from "./vuex/Store.vue";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes
});
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token");
  if (token) {
    console.log("in be");
    store.dispatch("setUser");
    store.state.isLogin = true;
    next();
    if (!to.meta.isLogin) {
      this.$message.success("請先退出登入");
      next({
        path: "/home"
      });
    }
  } else {
    if (to.meta.isLogin) {
      alert("請先登入")
      next({
        path: "/login"
      });

    } else {
      next();
    }
  }
});

new Vue({
  el: "#app",
  router: router,
  store: store,
  render: h => h(App)
});
