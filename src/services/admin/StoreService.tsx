import { useQuery } from "@tanstack/react-query";
import { GET } from "../httpClient";

// 店家清單API
const useStoreList = () => {
  return useQuery({
    queryKey: ["GetStoreList"],
    queryFn: async () => GET<any[]>("/Store/GetStoreList"),
  });
};

const useDrinkFoodList = (StoreID: string) => {
  return useQuery({
    queryKey: ["GetDrinkFoodList"],
    queryFn: async () => GET<any[]>(`/DrinkFood/GetDrinkFoodList/${StoreID}`),
  });
};

export { useStoreList, useDrinkFoodList };
