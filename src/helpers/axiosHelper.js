import axios from "axios";

const rootAPI = process.env.REACT_APP_ROOTAPI;
const userAPI = rootAPI + "/users";

const axiosProcessor = async ({ method, url, data }) => {
  try {
    const headers = {
      Authorization: null,
    };

    const response = await axios({
      method,
      url,
      data,
      headers,
    });

    return response.data;
  } catch (error) {
    // if (error.response?.data?.message.includes("jwt expired")) {
    //   const { accessJWT } = await fetchNewAccessJWT();

    //   if (accessJWT) {
    //     sessionStorage.setItem("accessJWT", accessJWT);
    //     return apiProcessor({ method, url, data });
    //   }
    // }
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const postNewAdmin = (data) => {
  return axiosProcessor({
    method: "post",
    url: userAPI,
    data,
  });
};
export const loginUser = async (data) => {
  return axiosProcessor({
    method: "post",
    url: userAPI + "/login",
    data,
  });
};
