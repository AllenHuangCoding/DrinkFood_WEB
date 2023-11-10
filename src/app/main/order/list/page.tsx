"use client";

import { BasicTable } from "@/src/components/BasicTable";
import { useOrderList } from "@/src/services/order/OrderService";
import { formatCurrency } from "@/src/utils/IntExtension";
import { Button } from "primereact/button";
import { Column } from "primereact/column";

function OrderTable() {
  return (
    <BasicTable dataKey="OrderID" query={useOrderList()}>
      <Column field="OrderArrivalTime" header="用餐時間" sortable></Column>
      <Column field="BrandName" header="品牌" sortable></Column>
      <Column field="StoreName" header="店家" sortable></Column>
      <Column field="OpenTime" header="開放時間" sortable></Column>
      <Column field="CloseTime" header="結單時間" sortable></Column>
      <Column field="OfficeName" header="地點" sortable></Column>
      <Column field="CreateName" header="團長" sortable></Column>
      <Column field="OrderStatusDesc" header="訂單狀態" sortable></Column>
      <Column field="Remark" header="備註" sortable></Column>
      <Column
        header="功能"
        body={() => (
          <>
            <Button icon="pi pi-search" text />
          </>
        )}
      ></Column>
    </BasicTable>
  );
}

const List = () => {
  return <>{OrderTable()}</>;
};
export default List;
