"use client";

import { useAccountList } from "../../../../services/admin/AccountService";
import { Column } from "primereact/column";
import { useState } from "react";
import { BasicTable } from "@/src/components/BasicTable";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { useForm, Controller } from "react-hook-form";
import { classNames } from "primereact/utils";

interface UpdateProfileModel {
  name: string;
  email: string;
  brief: string;
  lunchPayment: string;
  drinkPayment: string;
}

const AccountTable = () => {
  const lunchDefaultPayments = [
    { ID: 1, name: "儲值金" },
    { ID: 2, name: "現金" },
  ];

  const drinkDefaultPayments = [
    { ID: 1, name: "現金" },
    { ID: 2, name: "Line Pay Money" },
    { ID: 3, name: "Line Bank" },
  ];

  const [visible, setVisible] = useState(false);

  const defaultValues: UpdateProfileModel = {
    name: "",
    email: "",
    brief: "",
    lunchPayment: "",
    drinkPayment: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues });

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  const router = useRouter();

  return (
    <>
      <Dialog
        header="基本資料"
        visible={visible}
        className="w-8 md:w-6 lg:w-5 xl:w-3"
        onHide={() => setVisible(false)}
      >
        <div className="flex justify-content-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-column gap-3"
          >
            <div>
              <Controller
                name="name"
                control={control}
                rules={{ required: "必填欄位" }}
                render={({ field, fieldState }) => (
                  <InputText
                    {...field}
                    id={field.name}
                    placeholder="姓名"
                    className={classNames(
                      {
                        "p-invalid": fieldState.invalid,
                      },
                      "w-full"
                    )}
                  />
                )}
              />
              <small className="p-error">{errors.name?.message}</small>
            </div>

            <div>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "必填欄位",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "須符合信箱格式 例如: example@email.com",
                  },
                }}
                render={({ field, fieldState }) => (
                  <InputText
                    {...field}
                    id={field.name}
                    placeholder="信箱"
                    className={classNames(
                      {
                        "p-invalid": fieldState.invalid,
                      },
                      "w-full"
                    )}
                  />
                )}
              />
              <small className="p-error">{errors.email?.message}</small>
            </div>

            <div>
              <Controller
                name="brief"
                control={control}
                rules={{ required: "必填欄位" }}
                render={({ field, fieldState }) => (
                  <InputText
                    {...field}
                    id={field.name}
                    placeholder="暱稱"
                    className={classNames(
                      {
                        "p-invalid": fieldState.invalid,
                      },
                      "w-full"
                    )}
                  />
                )}
              />
              <small className="p-error">{errors.brief?.message}</small>
            </div>

            <div>
              <Controller
                name="lunchPayment"
                control={control}
                rules={{ required: "必填欄位" }}
                render={({ field, fieldState }) => (
                  <Dropdown
                    id={field.name}
                    value={field.value}
                    options={lunchDefaultPayments}
                    optionLabel="name"
                    optionValue="ID"
                    placeholder="選擇午餐預設付款方式"
                    className={classNames(
                      {
                        "p-invalid": fieldState.invalid,
                      },
                      "w-full"
                    )}
                    onChange={(e) => {
                      field.onChange(e.value);
                    }}
                  />
                )}
              />
              <small className="p-error">{errors.lunchPayment?.message}</small>
            </div>

            <div>
              <Controller
                name="drinkPayment"
                control={control}
                rules={{ required: "必填欄位" }}
                render={({ field, fieldState }) => (
                  <Dropdown
                    id={field.name}
                    value={field.value}
                    options={drinkDefaultPayments}
                    optionLabel="name"
                    optionValue="ID"
                    placeholder="選擇飲料預設付款方式"
                    className={classNames(
                      {
                        "p-invalid": fieldState.invalid,
                      },
                      "w-full"
                    )}
                    onChange={(e) => {
                      field.onChange(e.value);
                    }}
                  />
                )}
              />
              <small className="p-error">{errors.drinkPayment?.message}</small>
            </div>

            <Button
              type="submit"
              label="確認"
              icon="pi pi-check"
              className="w-full"
            />
          </form>
        </div>
      </Dialog>

      <BasicTable dataKey="AccountID" query={useAccountList()}>
        <Column field="Email" header="信箱/帳號" sortable />
        <Column field="Name" header="姓名" sortable />
        <Column field="Brief" header="暱稱" sortable />
        <Column
          header="功能"
          body={(x) => (
            <>
              <Button
                icon="pi pi-user-edit"
                text
                onClick={() => {
                  setVisible(true);
                }}
              />
              <Button
                icon="pi pi-list"
                text
                onClick={() =>
                  router.push(`/main/admin/account/history/${x.AccountID}`)
                }
              />
              <Button icon="pi pi-trash" style={{ color: "red" }} text />
            </>
          )}
        />
      </BasicTable>
    </>
  );
};

const Account = () => {
  return <>{AccountTable()}</>;
};
export default Account;
