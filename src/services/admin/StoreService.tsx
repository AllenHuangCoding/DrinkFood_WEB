import { useQuery } from "@tanstack/react-query";
import { GET } from "../httpClient";
import { ResponseStoreListModel } from "@/src/models/models/ResponseStoreListModel";
import { GroupDrinkFoodModel } from "@/src/models/models/GroupDrinkFoodModel";

// 店家清單API
const useStoreList = () => {
  return useQuery({
    queryKey: ["GetStoreList"],
    queryFn: async () => GET<ResponseStoreListModel[]>("/Store/GetStoreList"),
  });
};

const useStoreData = (StoreID: string) => {
  return useQuery({
    queryKey: ["GetStore"],
    queryFn: async () =>
      GET<ResponseStoreListModel>(`/Store/GetStore/${StoreID}`),
  });
};

// 店家品項
const useDrinkFoodList = (StoreID: string) => {
  return useQuery({
    queryKey: ["GetDrinkFoodList"],
    queryFn: async () =>
      GET<GroupDrinkFoodModel[]>(`/DrinkFood/GetDrinkFoodList/${StoreID}`),
  });
};

export { useStoreData, useStoreList, useDrinkFoodList };
