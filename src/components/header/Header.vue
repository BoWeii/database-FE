<template>
	<div id="header">
		<el-row :gutter="20">
			<el-col :span="4">
				<div class="header grid-content"></div>
			</el-col>
			<el-col :span="16">
				<div class="header grid-content">
					<div class="header-wrap-up">
						<div class="header-wrap-up-hotline">
							<p @click="logOut" style="cursor: pointer;">log out</p>
						</div>
						<div class="header-wrap-up-social" id="menu">
							<el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#f4f3f1" text-color="#050804">
								<el-menu-item index="1">
									<img src="../../icon/fb_icon.png" />
								</el-menu-item>
								<el-menu-item index="2">
									<img src="../../icon/twitter_icon.png" />
								</el-menu-item>
								<el-menu-item index="3">
									<img src="../../icon/youtube_icon.png" />
								</el-menu-item>
								<el-menu-item index="4">
									<img src="../../icon/ig_icon.png" />
								</el-menu-item>
								<el-menu-item index="5">
									<img src="../../icon/more_icon.png" />
								</el-menu-item>
							</el-menu>
						</div>
						<div class="header-wrap-up-account">
							<el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#f4f3f1" text-color="#050804">
								<el-menu-item index="<2></2>">
									<a @click="goToMyAccount">MyAccount</a>
								</el-menu-item>
								<el-menu-item index="3">
									<a>{{mail}}</a>
								</el-menu-item>
							</el-menu>
						</div>
						<div class="header-wrap-up-sign">
							<el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#f4f3f1" text-color="#050804">
								<el-menu-item index="1">
									<a @click="goToRegister">Sign up</a>
								</el-menu-item>
								<el-menu-item index="2">
									<a @click="goToLogin">Login</a>
								</el-menu-item>
							</el-menu>
						</div>
					</div>
					<div class="line"></div>
					<div class="header-wrap-bottom">
						<el-col :span="8" class>
							<div class="header-wrap-bottom-logo">
								<img style="cursor: pointer" @click="goToHome" src="../../icon/logo.png" />
							</div>
						</el-col>
						<el-col :span="9">
							<div class="header-wrap-bottom-navList">
								<el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#f4f3f1" text-color="#050804">
									<el-menu-item index="1">
										<a @click="goToHome">Home</a>
									</el-menu-item>
									<el-submenu index="2">
										<template slot="title">Portfolio</template>
										<el-menu-item>Portfolio with filter</el-menu-item>
										<el-menu-item>Portfolio without filter</el-menu-item>
									</el-submenu>
									<el-menu-item index="3">
										<a>Blog</a>
									</el-menu-item>
									<el-menu-item index="4">
										<a @click="goToShop">Shop</a>
									</el-menu-item>
									<el-menu-item index="5">
										<a @click="goToCart">Purchase</a>
									</el-menu-item>
								</el-menu>
							</div>
						</el-col>
						<el-col :span="7" class>
							<div class="header-wrap-bottom-search">
								<div class="header-wrap-bottom-search-input">
									<el-input v-model="input" placeholder="enter searchterm & hit enter"></el-input>
								</div>
								<div class="header-wrap-bottom-search-button">
									<el-button icon="el-icon-search" @click="search()"></el-button>
								</div>
							</div>
						</el-col>
					</div>
				</div>
			</el-col>
			<el-col :span="4">
				<div class="header grid-content bg-purple"></div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	//import store from "../vuex/Store.vue";
	//import store from "../../vuex/Store.vue";
	export default {
		name: "Header",
		props: {
			msg: String,
			Index: String,
			input: String
		},
		data() {
			return {
				model: {
					mail: this.$store.getters.username
				}
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			async logOut() {
				alert("already log out ");
				localStorage.clear();
				location.reload();
			},
			async search() {
				await this.$router.push({
					name: "shop",
					query: {
						p_name: this.input
					},
				})
				if(this.$router.currentRoute.name === 'shop'){
					location.reload()
				}
			},
			goToShop() {
				this.$router.push({
					name: "shop"
				});
			},
			goToCart() {
				this.$router.push({
					name: "cart"
				});
			},
			goToLogin() {
				this.$router.push({
					name: "login"
				});
			},
			goToMyAccount() {
				this.$router.push({
					name: "myaccount"
				});
			},
			goToRegister() {
				this.$router.push({
					name: "register"
				});
			},
			goToHome() {
				this.$router.push({
					name: "home"
				});
			}
		},

		computed: {
			mail() {
				return this.$store.state.username;
			}
		},

	};
</script>



<style header>
	@import url("//unpkg.com/element-ui@2.12.0/lib/theme-chalk/index.css");

	body {
		background-color: #f4f3f1;
		margin: 0px;
		font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
			"Lucida Sans", Arial, sans-serif;
	}

	.el-row {
		margin-bottom: 20px;
	}

	.el-col {
		border-radius: 4px;
	}

	.grid-content {
		border-radius: 4px;
		height: 174px;
	}

	.row-bg {
		padding: 10px 0;
		background-color: #caf5bf;
	}

	.header {}

	.header-wrap-up {
		height: 51px;
		display: flex;
	}

	.header-wrap-up-hotline {
		width: 300px;
		height: 51px;
		margin-top: 10px;
		margin-right: 50px;
		text-align: left;
	}

	.header-wrap-up-social {
		width: 330px;
		height: 21px;
		margin-right: 45px;
		text-align: right;
	}

	.header-wrap-up-account {
		width: 310px;
		height: 51px;
		margin-right: 10px;
		text-align: right;
	}

	.header-wrap-up-sign {
		width: auto;
		height: 51px;
		margin-right: 10px;
		text-align: center;
	}

	.line {
		height: 30px;
		width: 100%;
		font-size: 15px;
	}

	.header-wrap-bottom {
		height: 123px;
		font-size: 20px;
	}

	.header-wrap-bottom-navList {
		font-size: 20px;
		text-align: left;
		width: 430px;
	}

	.header-wrap-bottom-search {
		margin-top: 12px;
		font-size: 20px;
		text-align: left;
		display: flex;
	}

	.header-wrap-bottom-search-input {
		width: 220px;
	}
</style>
