import axios from "axios";

export default async function handler(req, res) {
  let state = false;
  let resp = {};
  const {
    cookies: { atlastoken: token },
    body,
  } = req;
  const allowedkeys = new Array("status", "id");
  // const query = {};

  let querystring = "status=1&";
  Object.keys(body).map((key) => {
    if (allowedkeys.find((k) => k === key)) {
      querystring = `${querystring}${key}=${body[key]}&`;
    }
  });
  // console.log(body, querystring, "querystring");
  //?status=${status}
  await axios({
    method: "get",
    url: `${process.env.API_URL}/api/courselist?${querystring}`,
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
