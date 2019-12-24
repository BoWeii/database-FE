<script>
import Vuex from "vuex";
import Vue from "vue";
//import ApiHelper from "../Api/base.js";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    isLogin: false,
    token: "",
    cartNumber: 0,
    email: "not_login"
  },
  getters: {
    isLogin: state => state.isLogin,
    token: state => state.token,
    email: state => state.email
  },
  mutations: {
    setUser(state) {
      console.log("in store");
      state.isLogin = localStorage.getItem("Flag");
      state.token = localStorage.getItem("token");
      state.email = "Im login !!";
    }
  },
  actions: {
    setUser(context) {
      context.commit("setUser");
    }
  }
});
export default store;
</script>
