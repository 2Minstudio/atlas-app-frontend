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

const getExams = async (page = 1) => {
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
export { getAdmissions, getExams };
