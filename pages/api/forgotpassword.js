import axios from "axios";
import Cookies from "cookies";

export default async function handler(req, res) {
  let state = false;
  const cookies = new Cookies(req, res);

  const body = req.body;
  if (!body.email) {
    return res.status(400).json({ state: state, data: ["Email not found"] });
  }

  let resp = {};
  await axios({
    method: "post",
    url: `${process.env.API_URL}/api/password_reset/`,
    data: { email: body.email },
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
