import { useQuery } from "@tanstack/react-query";
import { GET } from "../httpClient";

// 店家清單API
const useStoreList = () => {
  return useQuery({
    queryKey: ["GetStoreList"],
    queryFn: async () => GET<any[]>("/Store/GetStoreList"),
  });
};

export { useStoreList };
