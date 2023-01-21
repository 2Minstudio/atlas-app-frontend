import axios from "axios";


export default async function handler(req, res) {
  let state = false;
  let resp = {};
  // const { name, id, attend_type, status } = req.body;
  const {
    cookies: { atlastoken: token },
    body: { id, name, attend_type, status },
  } = req;

  await axios({
    method: "patch",
    url: `${process.env.API_URL}/api/admin/module/${id}/`,
    data: {
      name,
      attend_type,
      status,
    },
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
