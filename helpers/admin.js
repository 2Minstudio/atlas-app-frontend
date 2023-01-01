import axios from "axios";
import FormData from "form-data";

const getCourses = async () => {
  return axios
    .post("/api/admin/course/getall")
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

const getCourse = async (id) => {
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

// const createCourse = async (data) => {
//   let formData = new FormData();

//   // console.log(data.image, "data.image,");
//   const url = `${process.env.NEXT_PUBLIC_API_URL}/api/course/`;
//   // const url = "/api/admin/course/create"
//   if (data.image) formData.append("image", data.image, data.image.name);

//   formData.append("name", data.name);
//   formData.append("description", data.description);
//   formData.append("cost", data.cost);
//   formData.append("notes", data.notes);
//   formData.append("status", data.status);

//   return await axios
//     .post(url, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     })
//     .then((response) => {
//       const { data } = response;
//       return data;
//     })
//     .catch((error) => {
//       const {
//         response: { data },
//       } = error;
//       return data;
//     });
// };

const createCourse = async (data) => {
  let formData = new FormData();

  // console.log(data.image, "data.image,");
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/course/`;
  // const url = "/api/admin/course/create"
  if (data.image) formData.append("image", data.image, data.image.name);

  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("cost", data.cost);
  formData.append("notes", data.notes);
  formData.append("status", data.status);
  const options = {
    method: "POST",
    body: formData,
  };

  return await fetch(url, options)
    .then((response) => {
      console.log(response.status, "response.status");
      if (response.status >= 400 && response.status < 600) {
        throw new Error("Bad response from server");
      }
      console.log("then", response);
      return { status: true, data: response };
    })
    .then((returnedResponse) => {
      // Your response to manipulate
      console.log(returnedResponse, "create success");
      return { status: true, data: returnedResponse };
    })
    .catch((error) => {
      // Your error is here!
      console.log(error, "create ");
      return { status: false, data: error };
    });
};
// const updateCourse = async (data) => {
//   let formData = new FormData();
//   formData.append("id", data.id);
//   if (data.image) formData.append("image", data.image, data.image.name);
//   formData.append("name", data.name);
//   formData.append("description", data.description);
//   formData.append("cost", data.cost);
//   formData.append("notes", data.notes);
//   formData.append("status", data.status);
//   const url  = "/api/admin/course/update";
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

const updateCourse = async (data) => {
  let formData = new FormData();
  // formData.append("id", data.id);
  const { id } = data;
  if (data.image) formData.append("image", data.image, data.image.name);
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("cost", data.cost);
  formData.append("notes", data.notes);
  formData.append("status", data.status);
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/course/${id}/`;
  const options = {
    method: "PATCH",
    body: formData,
  };

  return await fetch(url, options)
    .then((response) => {
      console.log(response.status, "response.status");
      if (response.status >= 400 && response.status < 600) {
        throw new Error("Bad response from server");
      }
      console.log("then", response);
      return { status: true, data: response };
    })
    .then((returnedResponse) => {
      // Your response to manipulate
      console.log(returnedResponse, "create success");
      return { status: true, data: returnedResponse };
    })
    .catch((error) => {
      // Your error is here!
      console.log(error, "create ");
      return { status: false, data: error };
    });
};

const deleteCourse = async (id) => {
  return axios
    .post("/api/admin/course/delete", { id: id })
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

// Models

const getCourseModules = async (cid) => {
  return axios
    .post("/api/admin/module/getall", { course: cid })
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

const getModule = async (id) => {
  return axios
    .post("/api/admin/module/get", { id: id })
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

const createModule = async (data) => {
  let formData = new FormData();

  formData.append("name", data.name);
  formData.append("course", data.course);
  formData.append("attend_type", data.attend_type);
  formData.append("status", data.status);

  return await axios
    .post("/api/admin/module/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => {
      const {
        response: { data },
      } = error;
      return data;
    });
};

const updateModule = async (data) => {
  let formData = new FormData();
  formData.append("id", data.id);
  formData.append("name", data.name);
  formData.append("course", data.course);
  formData.append("attend_type", data.attend_type);
  formData.append("status", data.status);
  return axios
    .post("/api/admin/module/update", data)
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

const deleteModule = async (id) => {
  return axios
    .post("/api/admin/module/delete", { id: id })
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

// Chapter
const getModelChapters = async (mid) => {
  return axios
    .post("/api/admin/chapter/getall", { module: mid })
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

const getChapter = async (id) => {
  return axios
    .post("/api/admin/chapter/get", { id: id })
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

const createChapter = async (data) => {
  let formData = new FormData();

  if (data.video) formData.append("video", data.video, data.video.name);
  if (data.meterial)
    formData.append("meterial", data.meterial, data.meterial.name);

  formData.append("name", data.name);
  formData.append("module", data.module);
  formData.append("course", data.course);
  formData.append("content", data.content);
  formData.append("status", data.status);
  // url = "/api/admin/chapter/create";
  url = `${process.env.API_URL}/api/chapter/`;
  return await axios
    .post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => {
      const {
        response: { data },
      } = error;
      return data;
    });
};

const updateChapter = async (data) => {
  let formData = new FormData();
  // formData.append("id", data.id);
  const { id } = data;
  if (data.video) formData.append("video", data.video, data.video.name);
  if (data.meterial)
    formData.append("meterial", data.meterial, data.meterial.name);

  formData.append("name", data.name);
  // formData.append("module", data.module);
  // formData.append("course", data.course);
  formData.append("content", data.content);
  formData.append("status", data.status);
  // url = "/api/admin/chapter/update";
  url = `${process.env.API_URL}/api/chapter/${id}/`;
  return axios
    .patch(url, data)
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

const deleteChapter = async (id) => {
  return axios
    .post("/api/admin/chapter/delete", { id: id })
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
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  getCourseModules,
  getModule,
  createModule,
  updateModule,
  deleteModule,
  getModelChapters,
  getChapter,
  createChapter,
  updateChapter,
  deleteChapter,
};
