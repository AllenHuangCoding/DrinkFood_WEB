"use client";

import { useAccountList } from "../../../../services/admin/AccountService";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState } from "react";
import { BasicTable } from "@/src/components/BasicTable";
import { Button } from "primereact/button";

function AccountTable() {
  return (
    <BasicTable dataKey="AccountID" query={useAccountList()}>
      <Column field="Email" header="信箱/帳號" sortable></Column>
      <Column field="Name" header="姓名" sortable></Column>
      <Column field="Brief" header="暱稱" sortable></Column>
      <Column
        header="功能"
        body={() => (
          <>
            <Button icon="pi pi-user-edit" text />
            <Button icon="pi pi-trash" style={{ color: "red" }} text />
          </>
        )}
      ></Column>
    </BasicTable>
  );
}

const Account = () => {
  return <>{AccountTable()}</>;
};
export default Account;
