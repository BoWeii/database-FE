<template>
	<div id = 'manage-user'>
		<Header/>
		<div class="manage-user-body">
		</div>
		<Footer/>
	</div>
</template>

<script>
	import Header from "../header/Header.vue";
	import Footer from "../footer/Footer.vue";
	export default{
		name: "ManageUser",
		components:{
			Header,
			Footer,
		}
	}
</script>

<style>
	.manage-user-body{
		min-height: 700px;
		background-color: white;
	}
</style>
