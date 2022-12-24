import axios from "axios";
const getCourses = async () => {
  return axios
    .post("/api/admin/courses")
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

export { getCourses };
