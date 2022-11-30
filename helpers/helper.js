import axios from "axios";
import cookie from "cookie";
import { redirect } from "next/dist/server/api-utils";
import Router from "next/router";

const isLoggedin = async (req) => {
  const cookies =
    req && req?.headers.cookies ? req.headers.cookies : req?.cookies;
  if (cookies) {
    const { atlastoken = false } = cookies && cookies;
    if (atlastoken) return atlastoken;
  }
  return false;
};

const getUser = async (token) => {
  // const token = await isLoggedin(ctx.req);

  if (!token) return {};
  return axios
    .post("/api/userbytoken", {
      token: token,
    })
    .then((response) => {
      const { data } = response;
      // console.log(data, "it is data");
      return data;
    })
    .catch((error) => {
      // handle error
      const {
        response: { data },
      } = error;
      // console.log(data, "response error");
      return data;
    });
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
  await axios({
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
      // redirect(301,'/');
      Router.push("/");
    })
    .catch((error) => {
      // handle error
      console.log("error ?", error);
      return false;
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
