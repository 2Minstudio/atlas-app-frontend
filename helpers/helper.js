import axios from "axios";
import cookie from "cookie";

const isLoggedin = async (ctx) => {
  const { req, res } = ctx;
  const cookies =
    req && req?.headers.cookies ? req.headers.cookies : req.cookies;
  console.log(cookies, "cookes?");
  // const cookies = new Cookies(req, res);
  // const atlastoken = cookies.get("atlastoken");
  const { atlastoken = false } = cookies;
  console.log("is logged in", atlastoken);
  if (atlastoken) return atlastoken;
  return false;
};

const getUser = async  (ctx) => {
  // const cookies = new Cookies(req, res);
  const token = isLoggedin(ctx);
  const { req, res } = ctx;
  console.log(token, "token?");
  if (token) {
    const url = `${process.env.API_URL}/api/user/`;
    await axios
      .get(url, {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        // handle error
        if (error.response.status == 401) {
          cookies.set("atlastoken", "");
          console.log("clear cookie");
          console.log("error ?", error.response.status);
        }
      });
  }
}

const isClientLoggedin = (props)=>{
  const { cookies } = props;
    const token = cookies.get("atlastoken");
}
export { isLoggedin, getUser, isClientLoggedin };
