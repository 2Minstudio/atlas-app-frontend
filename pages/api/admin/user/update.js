import axios from "axios";

export default async function handler(req, res) {
  let state = false;
  let resp = {};
  // const { name, id, attend_type, status } = req.body;
  const {
    cookies: { atlastoken: token },
    body: { id, first_name, email, groups, phone_number },
  } = req;

  await axios({
    method: "patch",
    url: `${process.env.API_URL}/api/admin/user/${id}/`,
    data: {
      first_name,
      email,
      groups: groups.split(""),
      phone_number,
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
