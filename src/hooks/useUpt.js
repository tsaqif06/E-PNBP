import { useQuery } from "@tanstack/react-query";
import mainApi from "../api/mainSystemApi";

export const useGetListUpt = () => {
  return useQuery({
    queryKey: ["list-upt"],
    queryFn: () => mainApi.get("/upt").then((res) => res.data),
    enabled: true,
    keepPreviousData: true,
  });
};
