import { useMutation, useQuery } from "@tanstack/react-query";
import useToaster from "./useToaster";
import axios from "axios";
import api from "../api/api";

export const useLogin = () => {
	const toast = useToaster();
	return useMutation({
		mutationKey: ["login"],
		mutationFn: async (json) => {
			try {
				const response = await axios.post(
					import.meta.env.VITE_BASE_BE_BARANTIN + "/login",
					json
				);
				localStorage.setItem("barantinToken", response?.data?.data.accessToken);
				localStorage.setItem("user", JSON.stringify(response?.data?.data));
				toast("Login success", "Success");
				return response.data;
			} catch (error) {
				toast("Login failed", "Error");
				throw error;
			}
		},
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
