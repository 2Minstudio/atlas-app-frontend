import axios from "axios";

export default async function handler(req, res) {
  let state = false;
  // console.log(Object.keys(req), "req?");
  let resp = {};
  const {
    cookies: { atlastoken: token },
    body,
  } = req;
  const {
    name,
    duration,
    tax_percentage,
    elegible_percentage,
    price,
    status,
    id,
  } = body;
  await axios({
    method: "patch",
    url: `${process.env.API_URL}/api/admin/exam/${id}/`,
    data: {
      name,
      duration,
      tax_percentage,
      elegible_percentage,
      price,
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
