import axios from "axios";

const mainApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_MAIN_SYSTEM,
});
mainApi.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("barantinToken")}`

  return config
});
export default mainApi;
