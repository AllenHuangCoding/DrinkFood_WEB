import { useQuery } from "@tanstack/react-query";
import { GET } from "../httpClient";

// 成員API
const useAccountList = () => {
  return useQuery({
    queryKey: ["GetAccountList"],
    queryFn: async () => GET<any[]>("/Account/GetAccountList"),
  });
};

export { useAccountList };
