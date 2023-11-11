"use client";

import { useStoreList } from "../../../../services/admin/StoreService";
import { Column } from "primereact/column";
import { BasicTable } from "@/src/components/BasicTable";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";

function StoreTable() {
  const router = useRouter();

  return (
    <BasicTable dataKey="StoreID" query={useStoreList()}>
      <Column field="BrandTypeDesc" header="類型" sortable />
      <Column field="BrandName" header="品牌" sortable />
      <Column field="StoreName" header="分店" sortable />
      <Column field="StorePhone" header="電話" sortable />
      <Column field="StoreAddress" header="地址 (加Google Map)" sortable />
      <Column field="PreviousOrderDate" header="上次訂餐日期" sortable />
      <Column
        header="功能"
        body={(x) => (
          <>
            <Button
              icon="pi pi-search"
              text
              onClick={() => router.push(`/main/admin/store/${x.StoreID}`)}
            />
            <Button icon="pi pi-plus" text />
          </>
        )}
      />
    </BasicTable>
  );
}

const Store = () => {
  return <>{StoreTable()}</>;
};
export default Store;
