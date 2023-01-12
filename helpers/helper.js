import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import Router from "next/router";
// import Cookies
const isLoggedin = async (req) => {
  const cookies =
    req && req?.headers.cookies ? req.headers.cookies : req?.cookies;
  if (cookies) {
    const { atlastoken = false } = cookies && cookies;
    if (atlastoken) return atlastoken;
  }
  return false;
};

const isClientLoggedin = (props) => {
  const { cookies } = props;

  const token = cookies.get("atlastoken");
  // console.log(cookies, token, "client cookies");
  return token;
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

const Logout = async () => {
  const url = `/api/logout`;

  console.log("logout", url);
  return await axios({
    method: "get",
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      const {
        data: { state },
      } = response;
      console.log("route push", Router.pathname);
      if (Router.pathname == "/") Router.push("/login");
      else Router.push("/");
      // redirect(301,'/');
      // Router.push("/");

      // router.push("/");
    })
    .catch((error) => {
      // handle error
      console.log("error ?", error);
      return false;
    });
};

const getUser = async (token) => {
  // const token = await isLoggedin(ctx.req);

  if (!token) return {};
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: { token: token },
    // JSON.stringify({ title: 'React POST Request Example' })
  };

  return axios
    .post("/api/userbytoken", {
      token: token,
    })
    .then((response) => {
      const { data } = response;
      if (data?.data?.action == "force_logout") {
        console.log("Logout ?", data?.data?.action);
        // Logout();
      }
      // console.log(data, "it is data");
      return data;
    })
    .catch((error) => {
      // handle error

      const { response } = error;
      console.log(error, "error");
      if (response?.data) return data;
      return response;
    });
};

const resendCode = async (email) => {
  const url = `/api/resendcode/`;
  const data = {
    email: email,
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
        data: { state },
      } = response;
      return state;
    })
    .catch((error) => {
      return false;
    });
};

const verifyCode = async (code, email) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/verify-email/`;
  const data = {
    code: code,
    email: email,
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
        data: { status, message },
      } = response;
      return { status, message };
    })
    .catch((error) => {
      return error?.response?.data;
    });
};
export {
  isLoggedin,
  getUser,
  isClientLoggedin,
  verifyToken,
  Logout,
  resendCode,
  verifyCode,
};
