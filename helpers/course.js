import axios from "axios";
import FormData from "form-data";

const getCoursesList = async (page = 1) => {
  return axios
    .post("/api/course/list", { page: page })
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

const getCoursePreview = async (id) => {
  return axios
    .post("/api/course/list", { id })
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

export { getCoursesList, getCoursePreview };
