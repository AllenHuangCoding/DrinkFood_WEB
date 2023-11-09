import { useQuery } from "@tanstack/react-query";
import { GET } from "../httpClient";

// 成員API
const useOrderList = () => {
  return useQuery({
    queryKey: ["GetOrderList"],
    queryFn: async () => GET<any[]>("/Order/GetOrderList"),
  });
};

const useOrderDetailHistory = () => {
  return useQuery({
    queryKey: ["GetOrderDetailHistory"],
    queryFn: async () =>
      GET<any[]>(
        "/Order/GetOrderDetailHistory/F0E38C50-EB7B-4696-A94E-B7D70BBA0B40"
      ),
  });
};

export { useOrderList, useOrderDetailHistory };
