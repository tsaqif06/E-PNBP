import { useMutation, useQuery } from "@tanstack/react-query";
import { isEmpty } from "lodash";
import api from "../api/api";
import useToaster from "./useToaster";

export const useGetReqBillList = ({ params }) => {
  return useQuery({
    queryKey: ["list-req-bill", Object.values(params)],
    queryFn: () =>
      api.get("/req-bill", { params: params }).then((res) => res.data),
    enabled: !isEmpty(params),
    keepPreviousData: true,
  });
};
export const useAddReqBill = () => {
  const toast = useToaster();
  return useMutation({
    mutationKey: ["add-req-bill"],
    mutationFn: async (json) =>
      toast(
        api.post("/req-bill", json).then((response) => response),
        "Sukses buat request billing",
        "Loading..."
      ),
  });
};
export const useReqBilling = () => {
  const toast = useToaster();
  return useMutation({
    mutationKey: ["reqbill"],
    mutationFn: async (json) =>
    toast(
        api.post("/reqbill", json).then((response) => response.data).catch((err) => err),
        "Berhasil create billing",
        "Loading..."
      )
  });
};
