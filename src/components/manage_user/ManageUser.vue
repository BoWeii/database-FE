<template>
	<div id = 'ManageUser'>
		<Header/>
		<div class="manage-user-body">
			<ManageUserContent></ManageUserContent>
		</div>
		<Footer/>
	</div>
</template>

<script>
	import Header from "../header/Header.vue";
	import Footer from "../footer/Footer.vue";
	import ManageUserContent from './ManageUserContent';
	
	export default{
		name: "ManageUser",
		components:{
			Header,
			Footer,
			ManageUserContent
		}
	}
</script>

<style>
	.manage-user-body{
		min-height: 700px;
		background-color: white;
	}
</style>
