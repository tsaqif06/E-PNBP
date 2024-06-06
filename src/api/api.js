import axios from "axios";
// import { redirect } from "react-router-dom";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API ?? "http://localhost/pnbp-be",
});
api.interceptors.request.use(
  (config) => {
    const user = "mridwan";
    const pass = "Z>uy$,~64{(^6X4&";
    // if (token) {
      config.headers.Authorization = 'Basic ' + btoa(user + ':' + pass)
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

// api.interceptors.response.use(
//   (response) => response,
//   async () => {
//     redirect("/login");
//     // const originalRequest = error.config;
//     // if (error.response.status === 401 && !originalRequest._retry) {
//     //   originalRequest._retry = true;
//     //   try {
//     //     const refreshToken = localStorage.getItem("barantinToken");
//     //     const response = await axios.post(
//     //       import.meta.env.VITE_BASE_API + "/auth/refresh",
//     //       {},
//     //       { headers: { Authorization: refreshToken } }
//     //     );
//     //     const { token } = response.data;
//     //     localStorage.setItem("barantinToken", token);
//     //     originalRequest.headers.Authorization = `Bearer ${token}`;
//     //     return axios(originalRequest);
//     //   } catch (error) {
//     //     redirect("/login");
//     //   }
//     // }
//     // return Promise.reject(error);
//   }
// );

export default api;
