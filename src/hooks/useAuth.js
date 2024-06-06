import { useMutation, useQuery } from "@tanstack/react-query";
import useToaster from "./useToaster";
import axios from "axios";
import api from "../api/api";

export const useLogin = () => {
  const toast = useToaster();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (json) =>
      toast(
        axios
          .post(import.meta.env.VITE_BASE_BE_BARANTIN + "/login", json)
          .then((response) => {
            console.log("response")
            console.log(response)
            localStorage.setItem("barantinToken", response?.data?.data.accessToken);
            // localStorage.setItem("cred", btoa(JSON.stringify(json)));
            localStorage.setItem("user", JSON.stringify(response?.data?.data));
            return response.data;
          })
          .catch((error) => {
            console.log("error")
            console.log(error)
          })
          ,
        "Login success",
        "Loading..."
      ),
  });
};
export const useGetMe = () => {
  return useQuery({
    queryKey: ["get-detail-user"],
    queryFn: () => api.get("/auth/me").then((res) => res.data),
    keepPreviousData: true,
  });
};
export const useGetUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user;
};
