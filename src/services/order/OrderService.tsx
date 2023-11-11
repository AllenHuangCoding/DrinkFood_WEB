import { useQuery } from "@tanstack/react-query";
import { GET } from "../httpClient";
import Account from "@/src/app/main/admin/account/page";

// 成員API
const useOrderList = () => {
  return useQuery({
    queryKey: ["GetOrderList"],
    queryFn: async () => GET<any[]>("/Order/GetOrderList"),
  });
};

const useOrderDetailHistory = (AccountID: string) => {
  return useQuery({
    queryKey: ["GetOrderDetailHistory"],
    queryFn: async () =>
      GET<any[]>(`/Order/GetOrderDetailHistory/${AccountID}`),
  });
};

export { useOrderList, useOrderDetailHistory };
