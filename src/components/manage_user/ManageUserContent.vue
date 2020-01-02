<template>
	<div id="manage-user-content">
		<el-row :gutter="20">
			<el-col :span="2" class="el-col-content">
			</el-col>
			<el-col :span="19" class="el-col-content">
				<div class="manage-list">
					<el-table :data="users" style="width: 100%">
						<el-table-column prop="userName" label="user" width="100">
						</el-table-column>
						<el-table-column prop="mail" label="mail" width="150">
						</el-table-column>
						<el-table-column prop="password" label="location" width="150">
						</el-table-column>
						<el-table-column prop="location" label="location">
						</el-table-column>
						<el-table-column prop="nickname" label="nickname">
						</el-table-column>
						<el-table-column prop="fname" label="fname">
						</el-table-column>
						<el-table-column prop="lname" label="lname">
						</el-table-column>
						<el-table-column prop="phone" label="phone">
						</el-table-column>
						<el-table-column prop="staffFlag" label="staffFlag">
						</el-table-column>
					</el-table>
				</div>
			</el-col>
			<el-col :span="1" class="el-col-content">
				<div class='delete-button'>
					<div class='delete-button-row' v-for="(index) in users.length" :key='index'>
						<el-button icon='el-icon-delete' type='danger' @click="deleteUser(index)"></el-button>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import ApiHelper from '../../Api/base.js';

	const apiHelper = new ApiHelper();

	export default {
		name: "ManageUserContent",
		data: () => {
			return {
				users: ""
			}
		},
		methods: {
			async getUsersFromBackEnd() {
				const query = "";
				this.users = await apiHelper.getUsers(query);
			},
			async deleteUser(index) {
				console.log("res: ", this.users[index-1].userName, index)
				const res = await apiHelper.deleteUser(this.users[index-1].userName);				
				if(res){
					await this.getUsersFromBackEnd();
				}
			}
		},
		async mounted() {
			await this.getUsersFromBackEnd();
			console.log("THIS USERS: ", this.users)
		}
	}
</script>

<style>
	.el-col-content {
		height: 500px;
	}

	.manage-list {
		margin-top: 50px;
	}

	.delete-button {
		margin-top: 100px;
	}

	.delete-button-row {
		margin-top: 8px;
	}
</style>
