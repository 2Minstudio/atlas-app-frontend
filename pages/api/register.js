import axios from "axios";
import Cookies from 'cookies';

export default async function handler(req, res) {
  const cookies = new Cookies(req, res);
  // Get data submitted in request's body.
  const body = req.body;
  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.email || !body.password) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "Email or Password not found" });
  }
  let state = false;
  let resp = {};
  await axios({
    method: "post",
    url: `${process.env.API_URL}/api/register/`,
    data: { username: body.email, password: body.password },
  })
    .then((response) => {
      const { token, expiry } = response.data;
      state = true;
      // document.cookie = `atlastoken=${token}; path=/; `; //expires=${expiry}
      cookies.set('atlastoken',token);
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
