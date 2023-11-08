"use client";

import { useStoreList } from "../../../../services/admin/StoreService";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState } from "react";

function StoreTable() {
  const { data, isLoading, isError } = useStoreList();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      <DataTable
        value={data?.Data}
        stripedRows
        tableStyle={{ minWidth: "50rem" }}
        showGridlines
        dataKey="StoreID"
        selectionMode="single"
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
      >
        <Column field="BrandName" header="品牌" sortable></Column>
        <Column field="BrandTypeDesc" header="類型" sortable></Column>
        <Column field="StoreName" header="分店" sortable></Column>
        <Column field="StoreAddress" header="地址" sortable></Column>
        <Column field="StorePhone" header="電話" sortable></Column>
        <Column header="功能" body={"點餐"}></Column>
      </DataTable>
    </div>
  );
}

const Store = () => {
  return <>{StoreTable()}</>;
};
export default Store;
