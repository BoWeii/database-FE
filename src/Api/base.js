const baseURL = "http://104.199.190.234:80/";
import axios from "axios";
/*             base function                   */
async function post(path, data, header) {
	try {
		console.log("header=", header);
		const resp = await axios({
			method: "POST",
			url: baseURL + path,
			data: data,
			headers: header
		});
		localStorage.setItem("email", data.mail);
		console.log("in post", resp);
		return resp;
	} catch (e) {
		if (e.response.status === 400) alert("password is wrong!");
		else {
			alert("email wrong!");
		}
	}
}

async function get(path, header) {
	try {
		const resp = await axios({
			method: "GET",
			url: baseURL + path,
			headers: header
		});
		console.log("in get :", resp);
		return resp;
	} catch (e) {
		console.log("fail in get", e);
	}
}

async function put(path, data, header) {
	try {
		const resp = await axios({
			method: "Post",
			url: baseURL + path,
			data: data,
			headers: header
		});
		console.log("in put:", resp);
		return resp;
	} catch (e) {
		console.log("fail in put", e);
	}
}

async function deleteRequest(path, data, header) {
	try {
		const resp = await axios({
			method: "Delete",
			url: baseURL + path,
			headers: header
		});
		console.log("in delete:", resp);
		return resp;
	} catch (e) {
		console.log("fail in delete", e);
	}
}
/*             others function                   */
function checkLogin(resp) {
	try {
		if (resp.status == 200) {
			localStorage.setItem("token", resp.data.token);
			alert("Login successfull");
			return true;
		}
	} catch (e) {
		console.log("false in checkPublic : ", e.response.data);
		return false;
	}
}

function checkPublic(resp) {
	try {
		if (resp.status === 200) {
			alert("Publish successfull");
			return true;
		}
	} catch (e) {
		console.log("false in checkPublic : ", e.response.data);
		return false;
	}
}

/*          class to every function  for component using         */
class ApiHelper {
	constructor() {
		this.header = "";
		this.path = "";
	}

	async checkHeader() {
		if (await localStorage.getItem("token")) {
			this.header = {
				Authorization: "Bearer" + " " + localStorage.getItem("token")
			};
		}
	}

	async login(data) {
		this.checkHeader()
		const res = await post("login", data, this.header);
		return checkLogin(res);
	}

	async getUserName(email) {
		this.checkHeader()
		this.path = "user?Mail=" + email;
		const res = await get(this.path, this.header);
		console.log("in getUserName: ", res.data.userName);
		return res.data.userName;
	}

	async getCartId(userName) {
		this.checkHeader()
		this.path = "getcartidwithusername?UserName=" + userName;
		const res = await get(this.path, this.header);
		console.log("in getCartid ", res.data.CartId);
		return res.data.CartId;
	}
	//-------------Product-----------------------------//
	async publishProduct(isStaff, data) {
		this.checkHeader()
		if (await isStaff) {
			const res = await post("sell", data, this.header);
			return checkPublic(res);
		}
	}
	async getProducts(query) {
		this.checkHeader()
		const res = await get("queryproduct" + query, this.header);
		console.log("getProducts:", res.data);
		return res.data;
	}
	//---------------Cart---------------------------/
	async getOrderItems(query) {
		this.checkHeader()
		const res = await get("getorderitemsincart" + query, this.header);
		console.log("get OrderItems:", res.data);
		return res.data;
	}

	async deleteOderItem(data) {
		this.checkHeader()
		const res = await post("deleteorderitemincart", data, this.header);
		console.log("deleteOderItem:", res);
		return res;
	}

	async modifyOrderItem(data) {
		this.checkHeader()
		const res = await put("modifyorderitemquantity", data, this.header);
		console.log("modifyOrderItem:", res);
		return res;
	}

	//---------------User----------------------//
	async getUsers(query) {
		const res;
		if (query === "") {
			res = await get("users", this.header);
		} else {
			res = await get("user" + query, this.header);
		}
		console.log("get Users:", res.data);
		return res.data;
	}
	
	async deleteUser(data){
		this.checkHeader()
		const res = await deleteRequest("user", data, this.header);
		console.log("modifyOrderItem:", res);
		return res;
	}
}
export {
	ApiHelper as
	default
};
