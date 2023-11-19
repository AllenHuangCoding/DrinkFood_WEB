import { useQuery } from "@tanstack/react-query";
import { GET } from "../httpClient";
import { ViewAccount } from "@/src/models/models/ViewAccount";

// 成員API
const useAccountList = () => {
  return useQuery({
    queryKey: ["GetAccountList"],
    queryFn: async () => GET<ViewAccount[]>("/Account/GetAccountList"),
  });
};

export { useAccountList };
