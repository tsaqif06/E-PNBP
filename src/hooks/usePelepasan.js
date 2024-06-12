import { useQuery } from "@tanstack/react-query";
import mainApi from "../api/mainSystemApi";
import { isEmpty } from "lodash";

export const useGetSertifikatPelepas = ({ params }) => {
  return useQuery({
    queryKey: ["list-sertifikat-pelepasan", params],
    queryFn: () => mainApi.post("/ptk/filter", params).then((res) => res.data).catch((err) => console.log(err)),
    enabled: !isEmpty(params),
    keepPreviousData: false,
  });
};
export const useGetSertifikatPelepasDetail = (id) => {
  return useQuery({
    queryKey: ["detail-sertifikat-pelepasan", id],
    queryFn: () => mainApi.get(`/ptk/${id}`).then((res) => res.data).catch((err) => err),
    enabled: !!id,
    keepPreviousData: false,
  });
};
export const useGetSertifikatPelepasanPtk = (id , kar) => {
  // return mainApi.get(`/pn-pelepasan-k${kar.toLowerCase()}/${id}`).then((res) => res.data).catch((err) => console.log(err))
  return useQuery({
    queryKey: ["sertifikat-pelepasan-ptk", id],
    queryFn: () => mainApi.get(`/pn-pelepasan-k${kar.toLowerCase()}/${id}`).then((res) => res.data).catch((err) => err),
    enabled: !isEmpty(id,kar),
    keepPreviousData: false,
  });
};
