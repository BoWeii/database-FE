const baseURL = "https://jamfly.ninja/api/";
import axios from "axios";
/*             base function                   */
async function post(path, data, header) {
	try {
		const resp = await axios({
			method: "POST",
			url: baseURL + path,
			data: data,
			headers: header
		});
		console.log("in post", resp);
		return resp;
	} catch (e) {
		if (e.response) {
			console.log(e.response.data); // => the response payload 
		}
		return e
	}
}

async function paramPost(path, data, header) {
	try {
		const resp = await axios({
			method: "POST",
			url: baseURL + path,
			params: data,
			headers: header
		});
		console.log("in post", resp);
		return resp;
	} catch (e) {
		console.log("fail in paramPost", e)
	}
}

async function put(path, data, header) {
	try {
		const resp = await axios({
			method: "PUT",
			url: baseURL + path,
			params: data,
			headers: header
		});
		console.log("in put", resp);
		return resp;
	} catch (e) {
		console.log("fail in put", e)
	}

}
async function dataput(path, data, header) {
	try {
		const resp = await axios({
			method: "PUT",
			url: baseURL + path,
			data: data,
			headers: header
		});
		console.log("in put", resp);
		return resp;
	} catch (e) {
		console.log("fail in put", e)
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
		if (e.response) {
			console.log(e.response.data); // => the response payload 
		}
	}
}

async function _delete(path, header) {
	try {
		let resp = await axios({
			method: "DELETE",
			url: baseURL + path,
			headers: header
		});
		console.log("in delete :", resp);
		return resp;
	} catch(error) {
		if( error.response ){
			console.log(error.response.data); // => the response payload 
		}
	}
}

async function paramsDelete(path, data, header) {
	try {
		let resp = await axios({
			method: "DELETE",
			url: baseURL + path,
			params: data,
			headers: header
		});
		console.log("in delete :", resp);
		return resp;
	} catch (e) {
		console.log("fail in delete", e);
	}
}

/*             others function                   */
function checkLogin(resp) {

	if (resp.status === 200) {
		localStorage.setItem("token", resp.data.token);
		alert("Login successfull");
		return true;
	}

	console.log("in login", resp.response);
	if (resp.response.status === 400) alert("password is wrong!");
	else {
		alert("email wrong!");
	}
	return false;


}

function checkPublish(resp) {

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
		if (localStorage.getItem("token")) {
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
	async register(data) {
		this.checkHeader()
		let res = await post("sign-up", data, this.header);
		return res;
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
		const res = await _delete("users/"+data, this.header);
		console.log("Delete user:", res);
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
	async getTransactionLog(name) {
		this.checkHeader()
		this.path = "getorder?CartId=" + name;
		const res = await get(this.path, this.header);
		console.log("in getTransactionLog ", res.data);
		return res.data;
	}
	async getStaffOrder(name) {
		this.checkHeader()
		this.path = "getstafforder?UserName=" + name;
		const res = await get(this.path, this.header);
		console.log("in getStaffOrder ", res.data);
		return res.data;
	}
	async changePsd(data, name) {
		this.checkHeader()
		this.path = "auth/users/" + name;
		const res = await dataput(this.path, data, this.header);
		console.log("in change", res);
		return res
	}
	//-------------Product-----------------------------//
	async productPublish(data) {
		this.checkHeader()
		this.path = "addproduct?";
		let res = await paramPost(this.path, data, this.header);
		if (res) return true;
	}
	async productModify(data) {
		this.checkHeader()
		this.path = "modifyproduct?";
		let res = await put(this.path, data, this.header);
		if (checkPublish(res)) return true;
	}

	async getProductById(id) {
		this.checkHeader()
		const res = await get("queryproduct?ProductId=" + id, this.header);
		console.log("get Products:", res.data.items);
		return JSON.parse(res.data.items);
	}

	async getProductByPname(pname) {
		this.checkHeader()
		let query = "?Pname=" + pname;
		if (pname === undefined) {
			query = "";
		}
		const res = await get("queryproduct" + query, this.header);
		console.log("get Products:", res.data.items);
		return JSON.parse(res.data.items);
	}
	async getProductByName(staffUserName) {
		this.checkHeader()
		this.path = "queryproduct?StaffUserName=" + staffUserName
		let res = await get(this.path, this.header);
		console.log("in getProductByName ", res.data);
		return res.data;
	}
	async deleteProduct(p_id) {
		this.checkHeader()
		this.path = "deleteproduct?ProductId=" + p_id
		let res = await _delete(this.path, this.header);
		console.log("in delete ", res.data);
	}
	async getProductByID(p_id) {
		this.checkHeader()
		this.path = "queryproduct?ProductId=" + p_id;
		let res = await get(this.path, this.header);
		console.log("in getProductByID", res.data);
		return res.data;
	}
	//---------------Cart---------------------------/
	async getOrderItemsByCartId(id) {
		this.checkHeader()
		const res = await get("getorderitemsincart?CartId=" + id, this.header);
		console.log("get OrderItems:", res.data.items);
		return JSON.parse(res.data.items);
	}

	async addOrderItem(data) {
		this.checkHeader();
		const res = await paramPost("addorderitemtocart?", data, this.header);
		console.log("add OrderItems:", res);
		return res;
	}

	async deleteOrderItem(data) {
		this.checkHeader()
		console.log("DeleteItem:", data);
		const res = await paramsDelete("deleteorderitemincart?", data, this.header);
		console.log("deleteOrderItem:", res);
		return res;
	}

	async modifyOrderItem(data) {
		this.checkHeader()
		const res = await put("modifyorderitemquantity?", data, this.header);
		console.log("modifyOrderItem:", res);
		return res;
	}
	//--------------------Buy----------------------------//
	async addBuy(cartId) {
		let res;
		res = await get("buy?CartId=" + cartId, this.header);
		console.log("add Buy:", res);
		return res;
	}

	async getBuyByUserName(cartId) {
		let res;
		res = await get("getorder?CartId=" + cartId, this.header);
		console.log("get Buy:", res.data.items, cartId);
		return JSON.parse(res.data.items);
	}
	//------------------discount----------------------------//
	async sendDiscount(data, name) {
		this.checkHeader()
		console.log("in sendDis", data);
		this.path = "auth/" + name + "/discount-policies"
		let res = await post(this.path, data, this.header);
		return res;
	}

	async getDiscountByCode(code) {
		this.checkHeader()
		this.path = "discount-policies/" + code;
		let res = await get(this.path, this.header);
		console.log("get Dis", res.data);
		return res.data;
	}
}
export {
	ApiHelper as
		default
};



