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
      <Column field="BrandName" header="品牌" sortable></Column>
      <Column field="BrandTypeDesc" header="類型" sortable></Column>
      <Column field="StoreName" header="分店" sortable></Column>
      <Column field="StorePhone" header="電話" sortable></Column>
      <Column
        field="StoreAddress"
        header="地址 (加Google Map)"
        sortable
      ></Column>
      <Column field="PreviousOrderDate" header="上次訂餐日期" sortable></Column>
      <Column
        header="功能"
        body={() => (
          <>
            <Button
              icon="pi pi-search"
              text
              onClick={() => router.push("/main/admin/store/1234567")}
            />
            <Button icon="pi pi-plus" text />
          </>
        )}
      ></Column>
    </BasicTable>
  );
}

const Store = () => {
  return <>{StoreTable()}</>;
};
export default Store;
