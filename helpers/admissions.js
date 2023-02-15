import axios from "axios";
import FormData from "form-data";

const getAdmissions = async (page = 1) => {
  return axios
    .post("/api/admin/admissions/getall", { page: page })
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => {
      // handle error
      const {
        response: { data },
      } = error;
      return data;
    });
};
const getAdmissionDetail = async (id) =>{
  return axios
  .post("/api/admin/admissions/get", { id })
  .then((response) => {
    const { data } = response;
    return data;
  })
  .catch((error) => {
    // handle error
    const {
      response: { data },
    } = error;
    return data;
  });
}
const getTests = async (page = 1) => {
  return axios
    .post("/api/admin/tests/getall", { page: page })
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => {
      // handle error
      const {
        response: { data },
      } = error;
      return data;
    });
};

const getTest = async (id) => {
  return axios
    .post("/api/admin/course/get", { id: id })
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => {
      // handle error
      const {
        response: { data },
      } = error;
      return data;
    });
};

const updateTest = async (data) => {
  let formData = new FormData();
  formData.append("id", data.id);
  if (data.image) formData.append("image", data.image, data.image.name);
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("cost", data.cost);
  formData.append("notes", data.notes);
  formData.append("status", data.status);
  const url  = "/api/admin/course/update";
  return axios
    .post(url, data)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => {
      // handle error
      const {
        response: { data },
      } = error;
      return data;
    });
};

export { getAdmissions, getTests, getAdmissionDetail, getTest, updateTest };
