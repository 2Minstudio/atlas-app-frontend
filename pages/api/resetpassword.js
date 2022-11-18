import axios from "axios";
import Cookies from "cookies";

export default async function handler(req, res) {
  let state = false;
  const cookies = new Cookies(req, res);

  const {
    body: { token, new_password },
  } = req;
  
  if (!token && !new_password) {
    return res
      .status(400)
      .json({ state: state, data: ["Token / New Password not found"] });
  }

  let resp = {};
  await axios({
    method: "post",
    url: `${process.env.API_URL}/api/password_reset/confirm/`,
    data: { token: token, password: new_password },
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      resp = response.data;
      state = true;
    })
    .catch((error) => {
      if (error.response) {
        resp = error.response.data;
      }
    });
  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ state: state, data: resp });
}
