import axios from "axios";

export default async function handler(req, res) {
  // let state = false;
  let resp = {};
  const {
    cookies: { atlastoken: token },
    body: { testid, userid },
  } = req;

  await axios({
    method: "get",
    url: `${process.env.API_URL}/api/test/check_eligible/?exam=${testid}&user=${userid}`,
    // data: body,
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      const { data } = response;
      // const {
      //   pagination: { count },
      // } = data;
      // state = count == 0 ? true : false;
      resp = data;
    })
    .catch((error) => {
      // handle error
      // console.log(error, "userbytoken error");
      if (error.response) {
        resp = error.response.data;
      }
    });

  res.status(200).json( resp );
}
