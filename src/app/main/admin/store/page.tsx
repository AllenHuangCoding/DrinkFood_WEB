"use client";

import { useStoreList } from "../../../../services/admin/StoreService";
import { Column } from "primereact/column";
import { BasicTable } from "@/src/components/BasicTable";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";

export default () => {
  const router = useRouter();

  return (
    <div className="card">
      <BasicTable dataKey="StoreID" query={useStoreList()}>
        <Column
          field="BrandTypeDesc"
          header="類型"
          style={{ width: "8%" }}
          sortable
        />
        <Column
          field="BrandStoreName"
          header="品牌 / 分店"
          style={{ width: "25%" }}
          sortable
        />
        <Column
          field="StorePhone"
          header="電話"
          style={{ width: "12%" }}
          sortable
        />
        <Column
          field="StoreAddress"
          header="地址 (加Google Map)"
          style={{ width: "25%" }}
          sortable
        />
        <Column
          field="PreviousOrderDate"
          header="上次訂餐日期"
          style={{ width: "15%" }}
          sortable
        />
        <Column
          header="功能"
          style={{ width: "15%" }}
          body={(x) => (
            <>
              <Button
                icon="pi pi-search"
                text
                onClick={() => router.push(`./store/${x.StoreID}`)}
              />
              <Button
                icon="pi pi-plus"
                text
                onClick={() => router.push(`../order/add?StoreID=${x.StoreID}`)}
              />
            </>
          )}
        />
      </BasicTable>
    </div>
  );
};
