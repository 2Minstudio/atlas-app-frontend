import axios from "axios";
import cookie from "cookie";

export default async function handler(req, res) {
  let state = false;

  const {
    body: { token },
  } = req;

  if (!token) {
    return res
      .status(400)
      .json({ state: state, data: ["Your token missing!"] });
  }

  let resp = {};
  const url = `${process.env.API_URL}/api/user/`;

  await axios({
    method: "get",
    url: url,
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      // console.log(response, "userbytoken response");
      const {
        data: { id, first_name, groups },
      } = response;
      state = true;
      resp = { user: { id, first_name, groups } };
    })
    .catch((error) => {
      // handle error
      if (error?.response) {
        const {
          response: { data, status },
        } = error;
        resp = data;
        if (status == 401 && data.detail == "Invalid token.") {
          // remove cookie if exist
          res.setHeader(
            "Set-Cookie",
            cookie.serialize("atlastoken", "", {
              maxAge: -3600,
              path: "/",
            })
          );
          resp = { action: "force_logout" };
        }
      }
    });

  res.status(200).json({ state: state, data: resp });
}
