import axios from "axios";

export default async function handler(req, res) {
  let state = false;
  let resp = {};
  const {
    cookies: { atlastoken: token },
    body: { id },
  } = req;

  if (!id) {
    return res.status(400).json({ state: state, data: ["Not valid chapter"] });
  }

  // console.log(body, querystring, "querystring");
  //?status=${status}
  await axios({
    method: "get",
    url: `${process.env.API_URL}/api/chapterpreview/${id}/`,
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
