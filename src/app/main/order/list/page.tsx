"use client";

import { BasicTable } from "@/src/components/BasicTable";
import { useOrderList } from "@/src/services/order/OrderService";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { useState } from "react";
import CreateOrderDialog from "@/src/components/CreateOrderDialog";

export default function OrderListPage() {
  const [visible, setVisible] = useState<boolean>(false);

  const router = useRouter();
  const header = (
    <div className="flex align-items-center justify-content-end gap-2">
      <Button
        label="新增"
        icon="pi pi-plus"
        severity="info"
        onClick={() => {
          setVisible(true);
        }}
      />
    </div>
  );

  return (
    <>
      <CreateOrderDialog
        visible={visible}
        closeDialog={() => {
          setVisible(false);
        }}
      />
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
            field="OfficeOwner"
            header="地點 / 團長"
            style={{ width: "15%" }}
            sortable
          />
          <Column
            field="StatusDescPublicDesc"
            header="訂單狀態 / 類型"
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
                  onClick={() => {
                    router.push(`../${x.OrderID}`);
                  }}
                />
                <Button
                  icon="pi pi-copy"
                  text
                  onClick={() => {
                    alert(x.ShareUrl);
                  }}
                />
              </>
            )}
          />
        </BasicTable>
      </div>
    </>
  );
}
