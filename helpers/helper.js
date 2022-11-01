// import Cookies from 'cookies';
import axios from "axios";
import cookies from "next-cookies";

const isLoggedin = (ctx) => {
  const { atlastoken } = cookies(ctx);
  if (atlastoken) {
    return atlastoken;
  }
  return false;
};

const getUser = (ctx) => {
  const token = isLoggedin(ctx);
  if (token) {
    const url = `${process.env.API_URL}/api/user/`;
    axios
      .get(url, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {

      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
};

export { isLoggedin, getUser };
