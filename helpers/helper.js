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

const getUser = async (ctx) => {
  // const cookies = new Cookies(req, res);
  const token = isLoggedin(ctx);
  const { req, res } = ctx;
  console.log(token, "token?");
  if (!token) return {};
  const url = `${process.env.API_URL}/api/user/`;
  return await axios
    .get(url, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      // handle error
      if (error.response.status == 401) {
        cookies.set("atlastoken", "");
        console.log("clear cookie");
        console.log("error ?", error.response.status);
        return {};
      }
    });
};

const isClientLoggedin = (props) => {
  const { cookies } = props;
  const token = cookies.get("atlastoken");
};

const verifyToken = async (token) => {
  console.log("verify token, ", token);
  if (!token) return false;
  const url = `${process.env.API_URL}/api/password_reset/validate_token/`;
  const data = {
    token: token,
  };

  return await axios({
    method: "post",
    url: url,
    data: data,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      const {
        data: { status },
      } = response;
      return status == "OK";
    })
    .catch((error) => {
      // handle error
      if (error.response.status == 401) {
        console.log("error ?", error.response.status);
      }
      return false;
    });
};

export { isLoggedin, getUser, isClientLoggedin, verifyToken };
