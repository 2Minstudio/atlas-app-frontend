import axios from "axios";
import cookie from "cookie";

export default async function handler(req, res) {
  let state = false;
  let resp = {};
  const {
    cookies: { atlastoken: token },
  } = req;

  await axios({
    method: "get",
    url: `${process.env.API_URL}/api/course/`,
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      const { data } = response;

      state = true;
      resp = data;
    })
    .catch((error) => {
      // handle error
      // console.log(error, "userbytoken error");
      if (error.response) {
        resp = error.response.data;
      }
    });

  res.status(200).json({ state: state, data: resp });
}
