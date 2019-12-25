<script>
import Vuex from "vuex";
import Vue from "vue";
import ApiHelper from "../Api/base.js";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    token: "",
    cartNumber: 0,
    email: "not_login",
    username: "no_user"
  },
  getters: {
    token: state => state.token,
    email: state => state.email,
    username: state => state.username
  },
  mutations: {
    async setUser(state) {
      let apiHelper = new ApiHelper();
      state.token = localStorage.getItem("token");
      state.email = localStorage.getItem("email");
      state.username = await apiHelper.getUserName(
        localStorage.getItem("email")
      );
      console.log("in store setUser:", state.username);
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
