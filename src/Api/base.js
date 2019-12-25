const baseURL = "http://104.199.190.234:80/";
import axios from "axios";
/*             base function                   */
async function post(path, data, header) {
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
}

/*             others function                   */
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

/*             class to every function           */
class ApiHelper {
  constructor() {}
  async login(data) {
    var header = "";
    if ((await localStorage.getItem("Flag")) === "isLogin") {
      header = {
        Authorization: "Bearer" + " " + localStorage.getItem("token")
      };
    }
    let res = await post("login", data, header);
    return check(res);
  }
}

export { ApiHelper as default };
