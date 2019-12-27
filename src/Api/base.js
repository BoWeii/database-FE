const baseURL = "http://104.199.190.234:80/";
import $ from "jquery"
import axios from "axios";
/*             base function                   */
async function post(path, data, header) {
	try {
		let resp = await axios({
			method: "POST",
			url: baseURL + path,
			data: data,
			headers: header
		});
		console.log("in post", resp);
		return resp;
	} catch (e) {
		console.log(e)
	}
}

async function paramPost(path, data, header) {
	try {

		let resp = await axios({
			method: "POST",
			url: baseURL + path + data,
			headers: header
		});
		console.log("in post", resp);
		return resp;
	} catch (e) {
		console.log(e)
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
		if (e.response.status === 400) alert("password is wrong!");
		else {
			alert("email wrong!");
		}
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
	//---------------User----------------------//
	async login(data) {
		this.checkHeader()
		let res = await post("login", data, this.header);
		if (res) {
			localStorage.setItem("email", data.mail);
		}
		return checkLogin(res);
	}
	async getUsers(query) {
		let res;
		if (query === "") {
			res = await get("users", this.header);
		} else {
			res = await get("user" + query, this.header);
		}
		console.log("get Users:", res.data);
		return res.data;
	}
	async deleteUser(data) {
		this.checkHeader()
		const res = await deleteRequest("user", data, this.header);
		console.log("modifyOrderItem:", res);
		return res;
	}
	async getUserName(email) {
		this.checkHeader()
		this.path = "user?Mail=" + email;
		let res = await get(this.path, this.header);
		console.log("in getUserName: ", res.data.userName);
		return res.data.userName;
	}
	async getCartId(userName) {
		this.checkHeader()
		this.path = "getcartidwithusername?UserName=" + userName;
		let res = await get(this.path, this.header);
		console.log("in getCartid ", res.data.CartId);
		return res.data.CartId;
	}
	//-------------Product-----------------------------//
	async publishProduct(isStaff, data) {
		this.checkHeader()
		if (await isStaff) {
			let res = await post("sell", data, this.header);
			return checkPublic(res);
		}
	}
	async public(data) {
		this.checkHeader()
		let result = $.param(data);
		let res = await paramPost("addproduct?", result.toString(), this.header);
		if (res) return true;
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


}
export {
	ApiHelper as
		default
};
