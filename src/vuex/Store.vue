<script>
import Vuex from "vuex";
import Vue from "vue";
import ApiHelper from "../Api/base.js";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    token: "",
    email: "not_login",
    username: "no_user",
    cartId: "no_cartId"
  },
  getters: {
    token: state => state.token,
    email: state => state.email,
    username: state => state.username,
    cartId: state => state.cartId
  },
  mutations: {
    async setUser(state) {
      console.log('setting user~~~~~~~~~~~~~~~~~~`')
      let apiHelper = new ApiHelper();
      state.token = localStorage.getItem("token");
      state.email = localStorage.getItem("email");
      state.username = await apiHelper.getUserName(
        state.email
      );
      state.cartId = await apiHelper.getCartId(state.username);
      //console.log("in store setUser:", state.username);
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
