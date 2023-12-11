"use client";

import { BasicTable } from "@/src/components/table/BasicTable";
import { useOrderDetailHistory } from "@/src/services/order/OrderService";
import { GetAccountID, GetToken } from "@/src/store/localStorage";
import { formatCurrency } from "@/src/utils/IntExtension";
import { Button } from "primereact/button";
import { Column } from "primereact/column";

const HistoryTable = (AccountID: string) => {
  const header = (
    <div className="flex align-items-center justify-content-end gap-2">
      <Button
        label="匯出"
        icon="pi pi-upload"
        severity="info"
        onClick={() => {
          const accountID = GetAccountID();
          const token = GetToken();
          const url = `${process.env.NEXT_PUBLIC_API_BASEURL}/Export/ExportOrderDetailHistory/${accountID}?Token=${token}`;
          window.open(url);
        }}
      />
    </div>
  );

  return (
    <>
      <BasicTable
        dataKey="OrderDetailID"
        query={useOrderDetailHistory(AccountID)}
        header={header}
      >
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
          field="DrinkFoodName"
          header="品項"
          style={{ width: "15%" }}
          sortable
        />
        <Column
          field="Quantity"
          header="數量"
          style={{ width: "8%" }}
          sortable
        />
        <Column
          field="DrinkFoodPrice"
          header="單價"
          style={{ width: "8%" }}
          body={(data) => formatCurrency(data.DrinkFoodPrice)}
          sortable
        />
        <Column
          field="PaymentDesc"
          header="付款方式"
          style={{ width: "14%" }}
          sortable
        />
        <Column
          field="OfficeName"
          header="地點"
          style={{ width: "15%" }}
          sortable
        />
      </BasicTable>
    </>
  );
};

export default HistoryTable;
