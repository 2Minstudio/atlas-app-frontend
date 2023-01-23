import axios from "axios";


export default async function handler(req, res) {
  let state = false;
  // console.log(Object.keys(req), "req?");
  let resp = {};
  const {
    cookies: { atlastoken: token },
    body,
  } = req;
  const { name, content, status, id } = body;
  await axios({
    method: "patch",
    url: `${process.env.API_URL}/api/admin/chapter/${id}/`,
    data: { name, content, status },
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "multipart/form-data",
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
