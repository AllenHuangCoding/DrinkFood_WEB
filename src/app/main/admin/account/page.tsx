"use client";

import { useAccountList } from "../../../../services/admin/AccountService";
import { Column } from "primereact/column";
import { useState } from "react";
import { BasicTable } from "@/src/components/BasicTable";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import ProfileDialog, {
  ProfileDialogFullModel,
} from "@/src/components/ProfileDialog";

export default function AccountPage() {
  const [visible, setVisible] = useState<boolean>(false);
  const [userData, setUserData] = useState<ProfileDialogFullModel | null>(null);
  const [action, setAction] = useState<"View" | "Create" | "Update">("View");

  const header = (
    <div className="flex align-items-center justify-content-end gap-2">
      <Button
        label="新增"
        icon="pi pi-plus"
        severity="info"
        onClick={() => {
          setUserData(null);
          setAction("Create");
          setVisible(true);
        }}
      />
    </div>
  );

  const router = useRouter();

  return (
    <>
      <ProfileDialog
        visible={visible}
        action={action}
        userData={userData}
        closeDialog={() => {
          setVisible(false);
        }}
      />

      <div className="card">
        <BasicTable
          dataKey="AccountID"
          query={useAccountList()}
          header={header}
        >
          <Column
            field="Email"
            header="信箱/帳號"
            style={{ width: "25%" }}
            sortable
          />
          <Column
            field="Name"
            header="姓名"
            style={{ width: "10%" }}
            sortable
          />
          <Column
            field="Brief"
            header="暱稱"
            style={{ width: "10%" }}
            sortable
          />
          <Column
            field="DefaultLunchPaymentDesc"
            header="午餐付款方式"
            style={{ width: "15%" }}
            sortable
          />
          <Column
            field="DefaultDrinkPaymentDesc"
            header="飲料付款方式"
            style={{ width: "15%" }}
            sortable
          />
          <Column
            field="CloseNotify"
            header="結單提醒"
            style={{ width: "10%" }}
            body={(x) => <> {`前${x.CloseNotify}分鐘`}</>}
            sortable
          />
          <Column
            header="功能"
            style={{ width: "15%" }}
            body={(x) => (
              <>
                <Button
                  icon="pi pi-user-edit"
                  text
                  onClick={() => {
                    setUserData(x);
                    setAction("Update");
                    setVisible(true);
                  }}
                />
                <Button
                  icon="pi pi-list"
                  text
                  onClick={() => router.push(`./history/${x.AccountID}`)}
                />
              </>
            )}
          />
        </BasicTable>
      </div>
    </>
  );
}
