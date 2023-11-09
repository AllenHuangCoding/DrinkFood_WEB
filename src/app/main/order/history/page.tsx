"use client";

import { BasicTable } from "@/src/components/BasicTable";
import { useOrderDetailHistory } from "@/src/services/order/OrderService";
import { formatCurrency } from "@/src/utils/IntExtension";
import { Button } from "primereact/button";
import { Column } from "primereact/column";

function HistoryTable() {
  return (
    <BasicTable dataKey="OrderDetailID" query={useOrderDetailHistory()}>
      <Column field="OrderArrivalTime" header="抵達時間" sortable></Column>
      <Column field="BrandName" header="品牌" sortable></Column>
      <Column field="StoreName" header="店家" sortable></Column>
      <Column field="DrinkFoodName" header="品項" sortable></Column>
      <Column
        field="DrinkFoodPrice"
        header="價格"
        body={(data) => formatCurrency(data.DrinkFoodPrice)}
        sortable
      ></Column>
      <Column field="PaymentDesc" header="付款方式" sortable></Column>
      <Column field="OfficeName" header="地點" sortable></Column>
      <Column field="OrderDetailRemark" header="備註" sortable></Column>
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

const History = () => {
  return <>{HistoryTable()}</>;
};
export default History;
