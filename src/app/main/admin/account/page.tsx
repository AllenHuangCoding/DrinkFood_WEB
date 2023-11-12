"use client";

import { useAccountList } from "../../../../services/admin/AccountService";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";
import { BasicTable } from "@/src/components/BasicTable";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { useForm, Controller } from "react-hook-form";
import { classNames } from "primereact/utils";
import { Update } from "next/dist/build/swc";

interface UpdateProfileModel {
  name: string;
  email: string;
  brief: string;
  lunchPayment: number | null;
  drinkPayment: number | null;
}

export default () => {
  const lunchDefaultPayments = [
    { ID: 1, name: "儲值金" },
    { ID: 2, name: "現金" },
  ];

  const drinkDefaultPayments = [
    { ID: 1, name: "現金" },
    { ID: 2, name: "Line Pay Money" },
    { ID: 3, name: "Line Bank" },
  ];

  const [visible, setVisible] = useState<boolean>(false);
  const [dialogHeader, setDialogHeader] = useState<string>("基本資料");
  const [userData, setUserData] = useState<any | null>(null);

  const defaultValues: UpdateProfileModel = {
    name: "",
    email: "",
    brief: "",
    lunchPayment: null,
    drinkPayment: null,
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  const header = (
    <div className="flex align-items-center justify-content-end gap-2">
      <Button
        label="新增"
        icon="pi pi-plus"
        severity="info"
        onClick={() => {
          setUserData(null);
          setDialogHeader("新增");
          setVisible(true);
        }}
      />
    </div>
  );

  const router = useRouter();

  useEffect(() => {
    console.log(userData);
    if (userData) {
      reset({
        name: userData.Name,
        brief: userData.Brief,
        email: userData.Email,
        lunchPayment: null,
        drinkPayment: null,
      });
    } else {
      reset({
        name: "",
        brief: "",
        email: "",
        lunchPayment: null,
        drinkPayment: null,
      });
    }
  }, [userData, reset]);

  return (
    <>
      <Dialog
        header={dialogHeader}
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

      <div className="card">
        <BasicTable
          dataKey="AccountID"
          query={useAccountList()}
          header={header}
        >
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
                    setUserData(x);
                    setDialogHeader("編輯");
                    setVisible(true);
                  }}
                />
                <Button
                  icon="pi pi-list"
                  text
                  onClick={() =>
                    router.push(`./account/history/${x.AccountID}`)
                  }
                />
                <Button icon="pi pi-trash" style={{ color: "red" }} text />
              </>
            )}
          />
        </BasicTable>
      </div>
    </>
  );
};