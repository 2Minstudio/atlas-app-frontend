import axios from "axios";
import FormData from "form-data";

const getCourses = async (page = 1) => {
  return axios
    .post("/api/admin/course/getall", { page: page })
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
//   const url = `${process.env.NEXT_PUBLIC_API_URL}/api/admin//course/`;
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
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/admin/course/`;
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
  let json;
  try {
    const resp = await fetch(url, options);
    json = await resp.json();
    if (resp.status == 201) return { status: true, data: json };
    else return { status: false, data: json };
  } catch (error) {
    if (error instanceof SyntaxError) {
      // Unexpected token < in JSON
      console.log("There was a SyntaxError", error);
    } else {
      console.log("There was an error", error);
    }
    return { status: false, data: error };
  }
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
  if (data.image && typeof data.image != "string")
    formData.append("image", data.image, data.image.name);
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("cost", data.cost);
  formData.append("notes", data.notes);
  formData.append("status", data.status);
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/admin/course/${id}/`;
  const options = {
    method: "PATCH",
    body: formData,
  };
  let json;
  try {
    const resp = await fetch(url, options);
    json = await resp.json();
    if (resp.status == 200) return { status: true, data: json };
    else return { status: false, data: json };
  } catch (error) {
    if (error instanceof SyntaxError) {
      // Unexpected token < in JSON
      console.log("There was a SyntaxError", error);
    } else {
      console.log("There was an error", error);
    }
    return { status: false, data: error };
  }
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

const getCourseModules = async (cid, page = 1) => {
  return axios
    .post("/api/admin/module/getall", { course: cid, page: page })
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
  return await axios
    .post("/api/admin/module/create", data, {
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

const updateModule = async (data) => {
  return axios
    .post("/api/admin/module/update", data, {
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
const getModelChapters = async (mid, page = 1) => {
  return axios
    .post("/api/admin/chapter/getall", { module: mid, page: page })
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

// const createChapter = async (data) => {
//   let formData = new FormData();

//   if (data.video) formData.append("video", data.video, data.video.name);
//   if (data.meterial)
//     formData.append("meterial", data.meterial, data.meterial.name);

//   formData.append("name", data.name);
//   formData.append("module", data.module);
//   formData.append("course", data.course);
//   formData.append("content", data.content);
//   formData.append("status", data.status);
//   // url = "/api/admin/chapter/create";
//   url = `${process.env.API_URL}/api/chapter/`;
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

// const updateChapter = async (data) => {
//   let formData = new FormData();
//   // formData.append("id", data.id);
//   const { id } = data;
//   if (data.video) formData.append("video", data.video, data.video.name);
//   if (data.meterial)
//     formData.append("meterial", data.meterial, data.meterial.name);

//   formData.append("name", data.name);
//   // formData.append("module", data.module);
//   // formData.append("course", data.course);
//   formData.append("content", data.content);
//   formData.append("status", data.status);
//   // url = "/api/admin/chapter/update";
//   url = `${process.env.API_URL}/api/chapter/${id}/`;
//   return axios
//     .patch(url, data)
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
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/admin/chapter/`;
  return await axios
    .post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      const { data } = response;
      return { data, status: true };
    })
    .catch((error) => {
      const {
        response: { data },
      } = error;
      return { data, status: false };
    });
};

const updateChapter = async (data) => {
  let formData = new FormData();
  // formData.append("id", data.id);
  const { id } = data;
  if (data.video && typeof data.video != "string")
    formData.append("video", data.video, data.video.name);

  if (data.meterial && typeof data.meterial != "string")
    formData.append("meterial", data.meterial, data.meterial.name);

  formData.append("name", data.name);
  formData.append("content", data.content);
  formData.append("status", data.status);
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/admin/chapter/${id}/`;
  return axios
    .patch(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      const { data } = response;
      return { data, status: true };
    })
    .catch((error) => {
      // handle error
      const {
        response: { data },
      } = error;
      return { data, status: false };
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

const getUsers = async (page = 1) => {
  return axios
    .post("/api/admin/user/getall", { page: page })
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

const getUser = async (id) => {
  return axios
    .post("/api/admin/user/get", { id: id })
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

const updateUser = async (data) => {
  return axios
    .post("/api/admin/user/update", data, {
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

const deleteUser = async (id) => {
  return axios
    .post("/api/admin/user/delete", { id: id })
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

const getRoles = async () => {
  return axios
    .post("/api/admin/user/roles")
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
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getRoles,
};
