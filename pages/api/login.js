import axios from "axios";
import cookie from "cookie";

export default async function handler(req, res) {
  let state = false;
  const body = req.body;
  if (!body.email || !body.password) {
    return res
      .status(400)
      .json({ state: state, data: ["Email or Password not found"] });
  }

  let resp = {};
  await axios({
    method: "post",
    url: `${process.env.API_URL}/api/login/`,
    data: {
      username: body.email,
      password: body.password,
    },
  })
    .then((response) => {
      const { token, expiry } = response.data;
      state = true;
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("atlastoken", token, {
          // httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          // sameSite: "strict",
          maxAge: 3600,
          path: "/",
        })
      );
      resp = response.data;
    })
    .catch((error) => {
      if (error.response) {
        resp = error.response.data;
      }
    });
  res.status(200).json({ state: state, data: resp });
}
