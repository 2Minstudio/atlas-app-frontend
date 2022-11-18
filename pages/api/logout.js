import axios from "axios";
import cookie from "cookie";

export default async function handler(req, res) {
  let state = true;
  const { atlastoken: token } = req.cookies;
  if (!token) {
    return res.status(200).json({ state: state, data: ["No session exist"] });
  }

  await axios({
    method: "post",
    url: `${process.env.API_URL}/api/logout/`,
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      const data = response.data;
      console.log(data);
      state = true;
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("atlastoken", "", {
          maxAge: -3600,
          path: "/",
        })
      );
    })
    .catch((error) => {
      if (error.response) {
        console.log('logout error',error.response);
      }
    });
  res.status(200).json({ state: state });
}
