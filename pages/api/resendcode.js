import axios from "axios";

export default async function handler(req, res) {
  let state = false;
  const url = `${process.env.API_URL}/api/resend-code/`;
  const {
    body: { email },
  } = req;
  const data = {
    email: email,
  };

  if (!email) {
    return res
      .status(400)
      .json({ state: state, message: ["Invalid email address"] });
  }
  let resp = {};
  await axios({
    method: "post",
    url: url,
    data: data,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      const {
        data: { status },
      } = response;
      resp = response.data;
      state = status == "success";
    })
    .catch((error) => {
      // handle error
      if (error.response) {
        resp = error.response.data;
      }
    });
  res.status(200).json({ state: state, data: resp });
}
