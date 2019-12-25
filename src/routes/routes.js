import Home from "../components/home/Home.vue";
import Shop from "../components/shop/Shop.vue";
import Login from "../components/login/Login.vue";
import Register from "../components/register/Register.vue";
import Cart from "../components/cart/Cart.vue";
import Product from "../components/product/Product.vue";
import Sell from "../components/sell/Sell.vue";
export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      isLogin: false,
      fail: "/"
    }
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop,
    meta: {
      isLogin: false,
      fail: "/"
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      isLogin: false,
      fail: "/"
    }
  },
  {
    path: "/register",
    name: "resgister",
    component: Register,
    meta: {
      isLogin: false,
      fail: "/"
    }
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
    meta: {
      isLogin: true,
      fail: "/"
    }
  },
  {
    path: "/product/:p_id",
    name: "product",
    component: Product,
    meta: {
      isLogin: false,
      fail: "/"
    }
  },
  {
    path: "/sell",
    name: "sell",
    component: Sell,
    meta: {
      isLogin: false,
      fail: "/"
    }
  }
];
