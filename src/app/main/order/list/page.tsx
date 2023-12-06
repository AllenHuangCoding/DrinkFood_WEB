"use client";

import { BasicTable } from "@/src/components/table/BasicTable";
import { useOrderList } from "@/src/services/order/OrderService";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { useState } from "react";
import {
  CreateOrderButton,
  CreateOrderDialog,
} from "@/src/components/dialog/CreateOrderDialog";

export default function OrderListPage() {
  const [visible, setVisible] = useState<boolean>(false);
  const [selectStore, setSelectedStore] = useState<string>("");

  const router = useRouter();
  const header = (
    <div className="flex align-items-center justify-content-end gap-2">
      <CreateOrderButton
        showDialog={() => {
          setVisible(true);
          setSelectedStore("");
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
            field="CloseTime"
            header="結單時間"
            style={{ width: "15%" }}
            sortable
          />
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
            field="OfficeOwner"
            header="地點 / 團長"
            style={{ width: "15%" }}
            sortable
          />
          <Column
            field="OrderStatusDesc"
            header="狀態"
            style={{ width: "10%" }}
            sortable
          />
          <Column
            field="IsPublicDesc"
            header="類型"
            style={{ width: "10%" }}
            sortable
          />
          <Column
            header="功能"
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
                    const url = `${process.env.NEXT_PUBLIC_WEB_BASEURL}/main/order/${x.OrderID}/`;
                    navigator.clipboard.writeText(url);
                    alert("已複製分享網址");
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
