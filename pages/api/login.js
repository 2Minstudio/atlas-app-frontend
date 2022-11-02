import axios from "axios";
import Cookies from "cookies";

export default async function handler(req, res) {
  let state = false;
  const cookies = new Cookies(req, res);

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
    data: { username: body.email, password: body.password },
  })
    .then((response) => {
      const { token, expiry } = response.data;
      state = true;
      // document.cookie = `atlastoken=${token}; path=/; `; //expires=${expiry}
      cookies.set("atlastoken", token);
      resp = response.data;
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
