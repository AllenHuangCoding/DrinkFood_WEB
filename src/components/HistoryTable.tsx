"use client";

import { BasicTable } from "@/src/components/BasicTable";
import { useOrderDetailHistory } from "@/src/services/order/OrderService";
import { formatCurrency } from "@/src/utils/IntExtension";
import { Button } from "primereact/button";
import { Column } from "primereact/column";

const HistoryTable = (AccountID: string) => {
  return (
    <BasicTable
      dataKey="OrderDetailID"
      query={useOrderDetailHistory(AccountID)}
    >
      <Column field="OrderArrivalTime" header="用餐時間" sortable />
      <Column field="BrandName" header="品牌" sortable />
      <Column field="StoreName" header="店家" sortable />
      <Column field="DrinkFoodName" header="品項" sortable />
      <Column
        field="DrinkFoodPrice"
        header="價格"
        body={(data) => formatCurrency(data.DrinkFoodPrice)}
        sortable
      />
      <Column field="PaymentDesc" header="付款方式" sortable />
      <Column field="OfficeName" header="地點" sortable />
      <Column field="OrderDetailRemark" header="備註" sortable />
    </BasicTable>
  );
};

export default HistoryTable;
