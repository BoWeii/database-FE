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
router.beforeEach(async (to, from, next) => {
  let token = localStorage.getItem("token");
  /*
  if (token) {
    await store.dispatch('setUser')
    next()
  }
  if (!token) {
    alert('no token')
  }*/
  
  console.log(store.getters.username)
  if (token) {
    await store.dispatch("setUser");
    await next();
    if (to.name === "login" || to.name === "register") {
      alert("請先登出");
      next({
        path: "/"
      });
    }
  } else {
    if (to.meta.isLogin) {
      alert("請先登入");
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
  render: h => h(App),
  mounted: async function () {
    await store.dispatch('setUser')
  }
});
