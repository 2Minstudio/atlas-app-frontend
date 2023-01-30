import axios from "axios";

import { Writable } from "stream";
import FormData from "form-data";

import formidable from "formidable";


export default async function handler(req, res) {
  try {
    let state = false;
    const chunks = [];
    const data = await new Promise((resolve, reject) => {
      const form = new formidable.IncomingForm();
      // const form = formidable(formidableConfig);

      form.parse(req, (err, fields, files) => {
        if (err) reject({ err });
        resolve({ fields, files });
      });
    });

    const fs = require("fs");
    const formpostdata = {};
    const formData = new FormData();
    // console.log(data.files["image"]);
    ["name", "description", "cost", "notes", "status"].map((key) => {
      // console.log("Key",key, data.fields[key], data.files[key])
      if (data.fields[key]) {
        formpostdata[key] = data.fields[key];
        formData.append(key, data.fields[key]);
      }

      // data.files[key] &&
      //   formData.append(
      //     [key],
      //     fs.createReadStream(data.files[key].filepath),
      //     data.files[key].name
      //   );
    });

    // const fileData = Buffer.concat(chunks);
    // console.log(
    //   fs.createReadStream(data.files["image"].filepath),
    //   data.files["image"].filepath
    // );
    if (data.files["image"]) {
      const imagestream = fs.createReadStream(data.files["image"].filepath);
      // formData.append("image", imagestream);
      let blobdata = await fetch(data.files["image"].filepath).then((r) =>
        r.blob()
      );
      formpostdata["image"] = blobdata;
    }

    //
    // console.log(formData, "req?");
    let resp = {};
    const {
      cookies: { atlastoken: token, atlasuid: created_by },
      // body,
    } = req;
    //
    //`http://127.0.0.1:5000/api/course`
    await axios
      .post(`${process.env.API_URL}/api/admin/course/`, formpostdata, {
        headers: {
          Authorization: `Token ${token}`,
          // "Content-Type": "multipart/form-data",
          // Accept: "application/json",
        },
      })
      .then((response) => {
        const { data } = response;
        state = true;
        resp = data;
      })
      .catch((error) => {
        // handle error
        // console.log(error.response, "create error");
        if (error?.response) {
          resp = error.response.data;
        }
      });

    res.status(200).json({ state: state, data: resp });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ state: false, data: "Internal Server Error" });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
