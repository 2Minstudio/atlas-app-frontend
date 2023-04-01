import axios from "axios";
import cookie from "cookie";

export default async function handler(req, res) {
  let state = false;
  const {
    cookies: { atlastoken: token },
    body: {
      id,
      first_name,
      last_name,
      email,
      phone_number,
      password,
      confirm_password,
      change_password,
      change_email,
    },
  } = req;

  const data = { first_name, last_name, phone_number };
  if (change_email) {
    data["email"] = email;
  }
  if (change_password) {
    data["password"] = password;
  }

  if (!token) {
    return res
      .status(400)
      .json({ state: state, data: ["Your token missing!"] });
  }

  if (confirm_password != password){
        return res
          .status(400)
          .json({ state: state, data: {confirm_password:'Confirm password doesn\'t match password '} });
  }

  let resp = {};
  const url = `${process.env.API_URL}/api/user/${id}/`;

  await axios({
    method: "patch",
    data: data,
    url: url,
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      // console.log(response, "userbytoken response");
      const {
        data: { id, first_name, last_name, email, phone_number },
      } = response;
      state = true;
      resp = {
        user: {
          id,
          first_name,
          last_name,
          email,
          phone_number,
        },
      };
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
