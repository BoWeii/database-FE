import Home from "../components/home/Home.vue";
import Shop from "../components/shop/Shop.vue";
import Login from "../components/login/Login.vue";
import Register from "../components/register/Register.vue";
import Cart from "../components/cart/Cart.vue";
import Product from "../components/product/Product.vue";
import Sell from "../components/sell/Sell.vue";
import Myaccount from "../components/myaccount/MyAccount.vue";
import Modify from "../components/myaccount/modify/Modify.vue";
import ManageUser from '../components/manage_user/ManageUser.vue';
import Payment from '../components/payment/Payment.vue';
export const routes = [{
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
		fail: "/",
		title: "shop"
	},
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
	name: "register",
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
	path: "/product/:id",
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
},
{
	path: "/manageuser",
	name: "manageuser",
	component: ManageUser,
	meta: {
		isLogin: false,
		fail: "/",
	}
},
{
	path: "/payment",
	name: "payment",
	component: Payment,
	meta: {
		isLogin: false,
		fail: "/"
	}
},
{
	path: "/myaccount",
	name: "myaccount",
	component: Myaccount,
	meta: {
		isLogin: true,
		fail: "/"
	}
},
{
	path: "/modify/:id",
	name: "modify",
	component: Modify,
	meta: {
		isLogin: true,
		fail: "/"
	},
}
];
