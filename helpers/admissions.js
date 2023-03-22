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
const getAdmissionDetail = async (id) => {
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
};

const sendAction = async (id, type) => {
  return axios
    .post("/api/admin/admissions/send", { id, type })
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
    .post("/api/admin/tests/get", { id: id })
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
  const url = "/api/admin/tests/update";
  return axios
    .post(url, data, {
      "Content-Type": "application/json",
    })
    .then((response) => {
      const {
        data: { data, state },
      } = response;
      return { data, status: state };
    })
    .catch((error) => {
      // handle error
      const {
        response: { data },
      } = error;
      return { data, status: false };
    });
};

// const updateTest = async (data) => {
//   let formData = new FormData();
//   formData.append("id", data.id);
//   formData.append("duration", data.name);
//   formData.append("price", data.price);
//   formData.append("tax_percentage", data.tax_percentage);
//   formData.append("elegible_percentage", data.elegible_percentage);
//   formData.append("status", data.status);

//   const url = "/api/admin/tests/update";
//   return axios
//     .post(url, data)
//     .then((response) => {
//       const { data } = response;
//       return data;
//     })
//     .catch((error) => {
//       // handle error
//       const {
//         response: { data },
//       } = error;
//       return data;
//     });
// };

const getTestQuestions = async (testid, page = 1) => {
  return axios
    .post("/api/admin/question/getall", { page, testid })
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

// Quesitons

const getQuestion = async (id) => {
  return axios
    .post("/api/admin/question/get", { id: id })
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

const createQuestion = async (data) => {
  return await axios
    .post("/api/admin/question/create", data, {
      headers: {
        // "Content-Type": "multipart/form-data",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      const {
        data: { data, state },
      } = response;
      return { data, status: state };
    })
    .catch((error) => {
      const {
        response: { data },
      } = error;
      return { data, status: false };
    });
};

const updateQuestion = async (data) => {
  return axios
    .post("/api/admin/question/update", data, {
      "Content-Type": "application/json",
    })
    .then((response) => {
      const {
        data: { data, state },
      } = response;
      return { data, status: state };
    })
    .catch((error) => {
      // handle error
      const {
        response: { data },
      } = error;
      return { data, status: false };
    });
};

const deleteQuestion = async (id) => {
  return axios
    .post("/api/admin/question/delete", { id: id })
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



export {
  getAdmissions,
  getTests,
  getAdmissionDetail,
  getTest,
  updateTest,
  getTestQuestions,
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  sendAction,
};
