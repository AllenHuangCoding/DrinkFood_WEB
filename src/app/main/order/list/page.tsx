"use client";

import { BasicTable } from "@/src/components/BasicTable";
import { useOrderList } from "@/src/services/order/OrderService";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { Column } from "primereact/column";

export default () => {
  const router = useRouter();
  const header = (
    <div className="flex align-items-center justify-content-end gap-2">
      <Button
        label="新增"
        icon="pi pi-plus"
        severity="info"
        onClick={() => {
          router.push("./add");
        }}
      />
    </div>
  );

  return (
    <div className="card">
      <BasicTable dataKey="OrderID" query={useOrderList()} header={header}>
        <Column
          field="ArrivalTime"
          header="用餐時間"
          style={{ width: "15%" }}
          sortable
        />
        <Column
          field="BrandStoreName"
          header="品牌 / 店家"
          style={{ width: "25%" }}
          sortable
        />
        <Column
          field="CloseTime"
          header="結單時間"
          style={{ width: "15%" }}
          sortable
        />
        <Column
          field="OfficeName"
          header="地點"
          style={{ width: "10%" }}
          sortable
        />
        <Column
          field="OwnerName"
          header="團長"
          style={{ width: "8%" }}
          sortable
        />
        <Column
          field="OrderStatusDesc"
          header="訂單狀態"
          style={{ width: "12%" }}
          sortable
        />
        <Column
          field="Remark"
          header="備註"
          style={{ width: "10%" }}
          sortable
        />
        <Column
          header="功能"
          style={{ width: "10%" }}
          body={(x) => (
            <>
              <Button
                icon="pi pi-search"
                text
                onClick={() => {
                  router.push(`./${x.OrderID}`);
                }}
              />
            </>
          )}
        />
      </BasicTable>
    </div>
  );
};
