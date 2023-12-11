import { useQuery } from "@tanstack/react-query";
import { GET } from "../httpClient";
import {
  ResponseInfoCardModel,
  ResponseTodayOrderModel,
} from "@/src/models/models";

const useInfoCard = () => {
  return useQuery({
    queryKey: ["GetInfoCard"],
    queryFn: async () => GET<ResponseInfoCardModel>("/Home/GetInfoCard"),
  });
};

const useTodayOrder = () => {
  return useQuery({
    queryKey: ["GetTodayOrder"],
    queryFn: async () => GET<ResponseTodayOrderModel[]>("/Home/GetTodayOrder"),
  });
};
export { useInfoCard, useTodayOrder };
