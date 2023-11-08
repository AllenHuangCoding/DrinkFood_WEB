import { useQuery } from "@tanstack/react-query";
import { GET } from "../httpClient";

// 成員API
const useOrderList = () => {
  return useQuery({
    queryKey: ["GetOrderList"],
    queryFn: async () => GET<any[]>("/Order/GetOrderList"),
  });
};

export { useOrderList };
