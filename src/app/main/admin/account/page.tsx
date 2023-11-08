"use client";

import { useAccountList } from "../../../../services/admin/AccountService";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState } from "react";

function AccountTable() {
  const { data, isLoading, isError } = useAccountList();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      <DataTable
        value={data?.Data}
        stripedRows
        tableStyle={{ minWidth: "50rem" }}
        showGridlines
        dataKey="AccountID"
        selectionMode="single"
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
      >
        <Column field="Email" header="信箱/帳號" sortable></Column>
        <Column field="Name" header="姓名" sortable></Column>
        <Column field="Brief" header="暱稱" sortable></Column>
        <Column header="所屬區域" body={"-"} sortable></Column>
        <Column header="功能" body={"編輯"}></Column>
      </DataTable>
    </div>
  );
}

const Account = () => {
  return <>{AccountTable()}</>;
};
export default Account;
