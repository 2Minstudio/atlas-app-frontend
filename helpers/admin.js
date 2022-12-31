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

const createCourse = async (data) => {
  let formData = new FormData();

  // console.log(data.image, "data.image,");

  if (data.image) formData.append("image", data.image, data.image.name);

  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("cost", data.cost);
  formData.append("notes", data.notes);
  formData.append("status", data.status);

  return await axios
    .post("/api/admin/course/create", formData, {
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

const updateCourse = async (data) => {
  let formData = new FormData();
  formData.append("id", data.id);
  if (data.image) formData.append("image", data.image, data.image.name);
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("cost", data.cost);
  formData.append("notes", data.notes);
  formData.append("status", data.status);
  return axios
    .post("/api/admin/course/update", data)
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

  return await axios
    .post("/api/admin/chapter/create", formData, {
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
  formData.append("id", data.id);
  if (data.video) formData.append("video", data.video, data.video.name);
  if (data.meterial)
    formData.append("meterial", data.meterial, data.meterial.name);

  formData.append("name", data.name);
  formData.append("module", data.module);
  formData.append("course", data.course);
  formData.append("content", data.content);
  formData.append("status", data.status);
  return axios
    .post("/api/admin/chapter/update", data)
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
