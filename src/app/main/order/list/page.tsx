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
        <Column field="OrderArrivalTime" header="用餐時間" sortable />
        <Column field="BrandName" header="品牌" sortable />
        <Column field="StoreName" header="店家" sortable />
        <Column field="OpenTime" header="開放時間" sortable />
        <Column field="CloseTime" header="結單時間" sortable />
        <Column field="OfficeName" header="地點" sortable />
        <Column field="CreateName" header="團長" sortable />
        <Column field="OrderStatusDesc" header="訂單狀態" sortable />
        <Column field="Remark" header="備註" sortable />
        <Column
          header="功能"
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
