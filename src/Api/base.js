const baseURL = "http://104.199.190.234:80/";
import axios from "axios";
/*             base function                   */
async function post(path, data, header) {
<<<<<<< HEAD
  try {
    console.log("header=", header);
    let resp = await axios({
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
=======
	try {
		console.log("header=", header);
		let resp = await axios({
			method: "POST",
			url: baseURL + path,
			data: data,
			headers: header
		});
		console.log("in post", resp);
		return resp;
	} catch (e) {
		if (e.response.status == 400) alert("password is wrong!");
		else {
			alert("email wrong!");
		}
	}
>>>>>>> Call cart, shop and product api and Add router paramas.
}

async function get(path, header) {
  try {
    let resp = await axios({
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
  
function check(resp) {
	try {
		if (resp.status == 200) {
			localStorage.setItem("Flag", "isLogin");
			localStorage.setItem("token", resp.data.token);
			alert("Login successfull");
			return true;
		} else {
			console.log(resp.data);
			return false;
		}
	} catch (e) {
		console.log(e);
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
  async checkHeader(){
    if (await localStorage.getItem("token")) {
      this.header = {
        Authorization: "Bearer" + " " + localStorage.getItem("token")
      };
    }
  }
  async login(data) {
    this.checkHeader()
    let res = await post("login", data, this.header);
    return checkLogin(res);
  }
  async publishProduct(isStaff, data) {
    this.checkHeader()
    if (await isStaff) {
      let res = await post("sell", data, this.header);
      return checkPublic(res);
    }
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
    this.path = "url/getcartidwithusername?UserName="+userName;
    let res = await get(this.path, this.header);
    console.log("in getCartid ", res.data.cartid);
    return res.data.cartid;
  }
}

export {
	ApiHelper as
	default
};
