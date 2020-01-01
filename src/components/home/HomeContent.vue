<template>
	<div class='home-content'>
		<div class="home-carousel">
			<el-carousel trigger="click" height="800px" @change="UpdateCarouselText">
				<el-carousel-item v-for="index in 2" :key="index">
					<div class='home-carousel-content' v-bind:style="{backgroundColor:carouselBackgorundcolor}">
						<div class="home-carousel-content-text">
							<h1>Test title is {{carouselTitle}}</h1>
							<h3>Test content is {{carouselContent}}</h3>
						</div>
						<div class="home-carousel-content-img">
							<img src="../../icon/slider_1_object.png" v-if="index == 1" />
							<img src="../../icon/slider_2_object.png" v-if="index == 2" />
						</div>
					</div>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div id='home-item-firset' style="background-color: #f8fbfb;">
			<el-row :gutter="20" class='home-item-container'>
				<el-col :span='4' class="home-item-grid-content">
					<div calss='home-item-container-ride'></div>
				</el-col>
				<el-col :span='16' class="home-item-container-content home-item-grid-content">
					<div class='home-item-container-content-feature'>
						<el-col :span='6'>
							<div class="home-item-container-content-feature-field">
								<img class="home-item-container-content-feature-img" src='../../icon/phone_icon.png'>
								<h3>24 / 7 Hotline</h3>
								<p>Sed molestie augue sit amet leo consequat posuere. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
							</div>
						</el-col>
						<el-col :span='6'>
							<div class="home-item-container-content-feature-field">
								<img class="home-item-container-content-feature-img" src='../../icon/trunk_icon.png'>
								<h3>Quick Delivery</h3>
								<p>Sed molestie augue sit amet leo consequat posuere. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
							</div>
						</el-col>
						<el-col :span='6'>
							<div class="home-item-container-content-feature-field">
								<img class="home-item-container-content-feature-img" src='../../icon/plant_icon.png'>
								<h3>Always Fresh</h3>
								<p>Sed molestie augue sit amet leo consequat posuere. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
							</div>
						</el-col>
						<el-col :span='6'>
							<div class="home-item-container-content-feature-field">
								<img class="home-item-container-content-feature-img" src='../../icon/love_icon.png'>
								<h3>100% Organic</h3>
								<p>Sed molestie augue sit amet leo consequat posuere. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
							</div>
						</el-col>
					</div>
				</el-col>
				<el-col :span='4' class="home-item-grid-content ">
				</el-col>
			</el-row>
			<div id='home-item-second' style="background-color:#eff5f5">
				<el-row :gutter="20" class='home-item-container'>
					<el-col :span='4' class="home-item-grid-content">
						<div calss='home-item-container-ride'></div>
					</el-col>
					<el-col :span='16' class="home-item-grid-content">
						<div style="margin-bottom: 50px;">
							<div class="home-item-container-split">
								<h3 style="margin-right: 15px ;">------------------------------------------------------------------------------------------------</h3>
								<h3>LASTEST</h3>
								<h3 style="margin-left: 15x ;">-------------------------------------------------------------------------------------------</h3>
							</div>
							<div class="home-item-container-content">
								<el-row>
									<el-col :span="1" class="home-item-container-productCards-grid-content"></el-col>
									<el-col :span="4" class="home-item-container-productCards-grid-content" v-for="(product, index) in productLastest" :key="index" :offset="index > 0?2:0">
										<el-card :body-style="{ padding: '0px', width:'215px', height:'285px', margin:'0px'}">
											<img :src="product.ImageSrc" width="100%">
											<div style="display: flex">
												<div class="home-item-container-productCards-content">
													<h3 class="description-title">{{product.Pname}}</h3>
													<h5 class="description-content">{{product.Price}}</h5>
												</div>
												<div class="home-item-container-productCards-button">
													<el-button type="success" v-bind:icon="iconNameLists[index]" @mouseover.native="ChangeIconOfButton(index)" @mouseout.native="ChangeIconOfButton(index)" plain></el-button>
												</div>
											</div>
										</el-card>
									</el-col>
								</el-row>
							</div>
						</div>
					</el-col>
					<el-col :span='4' class="home-item-grid-content ">
					</el-col>
				</el-row>
			</div>
			<div id='home-item-third' style="background-color:#f8fbfb">
				<el-row :gutter="20" class='home-item-container'>
					<el-col :span='4' class="home-item-grid-content">
						<div class='home-item-container-ride'></div>
					</el-col>
					<el-col :span='16' class="home-item-grid-content">
						<div style="margin-bottom: 50px;">
							<div class="home-item-container-split">
								<h3 style="margin-right: 15px ;">-----------------------------------------------------------------------------------------------</h3>
								<h3>ODLEST</h3>
								<h3 style="margin-left: 15x ;">-------------------------------------------------------------------------------------------</h3>
							</div>
							<div class="home-item-container-content">
								<el-row>
									<el-col :span="1" class="home-item-container-productCards-grid-content"></el-col>
									<el-col :span="4" class="home-item-container-productCards-grid-content" v-for="(product, index) in productOld" :key="index" :offset="index > 0?2:0">
										<el-card :body-style="{ padding: '0px', width:'215px', height:'285px', margin:'0px'}">
											<img :src="product.ImageSrc" width="100%">
											<div style="display: flex">
												<div class="home-item-container-productCards-content">
													<h3 class="description-title">{{product.Pname}}</h3>
													<h5 class="description-content">{{product.Price}}</h5>
												</div>
												<div class="home-item-container-productCards-button">
													<el-button type="success" v-bind:icon="iconNameLists[index]" @mouseover.native="ChangeIconOfButton(index)" @mouseout.native="ChangeIconOfButton(index)" plain></el-button>
												</div>
											</div>
										</el-card>
									</el-col>
								</el-row>
							</div>
						</div>
					</el-col>
					<el-col :span='4' class="home-item-grid-content ">
						<div class="home-item-container-ride"></div>
					</el-col>
				</el-row>
			</div>
			<div id='home-item-forth' style="background-color:#f8fbfb">
				<el-row :gutter="20" class='home-item-container'>
					<el-col :span='4' class="home-item-grid-content">
						<div calss='home-item-container-ride'></div>
					</el-col>
					<el-col :span='16' class='home-item-content'>
						<div style="margin-bottom: 50px;">
							<div class="home-item-container-split">
								<h3>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h3>
							</div>
							<div class="home-item-container-content-picture">
								<div margin-right="15px"><img src='../../icon/organic_juices.jpg' width="85%"></div>
								<div margin-left="15px"><img src='../../icon/organic_food.jpg' width="85%"></div>
							</div>
						</div>
					</el-col>
					<el-col :span='4' class="home-item-grid-content">
						<div calss='home-item-container-ride'></div>
					</el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>

<script>
	const iconNameGoods = "el-icon-goods";
	const iconNameShopingCart = "el-icon-shopping-cart-1";
	const carouseInfo = [{"name": "Orange", "description": "This is very juicy!!!"},
						{"name": "Gruava", "description": "This is very hard!!!"}]
	const colors = {lightGreen : {"background-color": "#90ee90 "} , darkOrange : {"background-color": "#FF8C00"}}
	
	import ApiHelper from '../../Api/base.js';
	let apiHelper = new ApiHelper();
	export default {
		name: 'HomeContent',
		props: {
			description: String,
		},
		data: () => {
			return {
				productLastest: "",
				productOld: "",
				iconNameLists:[iconNameGoods, iconNameGoods, iconNameGoods, iconNameGoods]
			}
		},
		methods: {
			UpdateCarouselText(){
				if (this.carouselTitle === carouseInfo[0].name) {
					this.carouselTitle = carouseInfo[1].name;
				} else {
					this.carouselTitle = carouseInfo[0].name;
				}

				if (this.carouselContent === carouseInfo[0].evaulation) {
					this.carouselContent = carouseInfo[1].evaulation;
				} else {
					this.carouselContent = carouseInfo[0].evaulation;
				}
				if (this.carouselBackgorundcolor === colors.lightGreen) {
					this.carouselBackgorundcolor = colors.darkOrange;
				} else {
					this.carouselBackgorundcolor = colors.lightGreen;
				}
				//console.log(this.carouselTitle);
			},
			ChangeIconOfButton(index) {
				if (this.iconNameLists[index] === iconNameShopingCart) {
					this.iconNameLists[index] = iconNameGoods;
					console.log(iconNameGoods);
				} else {
					this.iconNameLists[index] = iconNameShopingCart;
					console.log(iconNameShopingCart);
				}
			}
		},
		async mounted(){
			let productsAll = await apiHelper.getProductByPname(this.$route.query.p_name);
			this.productLastest = [ productsAll[productsAll.length-1], productsAll[productsAll.length-1],productsAll[productsAll.length-1],productsAll[productsAll.length-1]]
			this.productOld = [productsAll[0], productsAll[1], productsAll[2], productsAll[3]]
		}
	}
</script>

<style>
	.carouselfield {
		height: 700px;
	}

	.home-carousel-content {
		height: 100%;
		width: 100%;
		padding-top: 150px;
		display: flex;
	}

	.home-carousel-content-text {
		padding: 150px;
		height: 10%;
		margin-left: 20%;
	}

	.home-carousel-content-img {
		height: 30%;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.home-item-grid-content {
		min-height: 250px;
	}

	.home-item {}

	.home-item-container {
		text-align: center;
	}

	.home-item-container-content {
		margin-top: 30px;
	}

	.home-item-container-content-feature {
		height: 260px;
	}

	.home-item-container-content-feature-field {
		margin-top: 50px;
		margin-left: 20px;
		margin-right: 20px;
		height: 210px;
	}

	.home-item-container-content-feature-img {
		height: 25%;
	}

	.home-item-container-split {
		display: flex;
		margin: 0;
		margin-top: 30px;
	}

	.home-item-container-productCards-grid-content {
		min-height: 300px;
	}

	.home-item-container-productCards-img {
		height: 250px;
	}

	.home-item-container-productCards-content {}

	.home-item-container-productCards-button {
		margin-top: 15px;
		margin-left: 95px;
	}

	.description-title {
		margin: 0px;
		margin-top: 15px;
		margin-left: 5px;
		text-align: left;
	}

	.description-content {
		margin: 0px;
		margin-top: 5px;
		margin-left: 5px;
		text-align: left;
	}

	.home-item-container-content-picture {
		display: flex;
	}
</style>
