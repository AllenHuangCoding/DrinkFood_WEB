"use client";

import {
  useDrinkFoodList,
  useStoreData,
} from "@/src/services/admin/StoreService";
import MenuTabView from "./MenuTabView";
import ScoreCarusel from "./ScoreCarusel";
import StoreInfo from "./StoreInfo";
import { showInfo, showWarn } from "@/src/components/form/CustomToast";
import useDrinkFoodDialogStore from "@/src/store/DrinkFoodDialogStore";

export default function StoreDetailPage({
  params,
  searchParams,
}: {
  params: { StoreID: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { orderID, setOrderID } = useDrinkFoodDialogStore();

  const { data: storeData, isLoading: storeLoading } = useStoreData(
    params.StoreID
  );

  if (storeData == null || storeData?.Code != 200) {
    return <></>;
  }

  if (searchParams != null && searchParams.ID != null) {
    // 打API取得該筆訂單已填寫項目
    if (orderID == undefined || orderID != searchParams.ID.toString()) {
      setOrderID(searchParams.ID.toString());
    }
    // Type => self, all
    // showInfo("進入團購點餐模式");
  }

  return (
    <>
      <div className="flex flex-column gap-4">
        <StoreInfo StoreID={params.StoreID} />
        <MenuTabView StoreID={params.StoreID} />
        <ScoreCarusel />
      </div>
    </>
  );
}
