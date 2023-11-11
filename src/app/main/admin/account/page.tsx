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
import { Checkbox } from "primereact/checkbox";
import { Password } from "primereact/password";

interface UpdateProfileModel {
  brief: string;
}

function AccountTable() {
  const [visible, setVisible] = useState(false);
  // const footerContent = (
  //   <div>
  //     <Button
  //       label="關閉"
  //       icon="pi pi-times"
  //       onClick={() => setVisible(false)}
  //       className="p-button-text"
  //     />
  //     <Button
  //       label="確認"
  //       icon="pi pi-check"
  //       onClick={() => setVisible(false)}
  //       autoFocus
  //     />
  //   </div>
  // );

  const payments = [
    { ID: 1, name: "儲值金" },
    { ID: 1, name: "Line Bank" },
    { ID: 1, name: "Line Pay Money" },
  ];

  const [lunchPayment, setLunchPayment] = useState(null);

  const router = useRouter();

  const defaultValues = {
    name: "",
    email: "",
    password: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues });

  const onSubmit = (data: any) => {
    console.log(data);
    // reset();
  };

  return (
    <>
      <Dialog
        header="基本資料"
        visible={visible}
        style={{ width: "30vw", height: "70vh" }}
        onHide={() => setVisible(false)}
      >
        <div className="flex justify-content-center">
          <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: "Name is required." }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      {...field}
                      autoFocus
                      className={classNames({
                        "p-invalid": fieldState.invalid,
                      })}
                    />
                  )}
                />
                <label
                  htmlFor="name"
                  className={classNames({ "p-error": errors.name })}
                >
                  Name*
                </label>
              </span>
            </div>
            <div className="field">
              <span className="p-float-label p-input-icon-right">
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address. E.g. example@email.com",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      {...field}
                      className={classNames({
                        "p-invalid": fieldState.invalid,
                      })}
                    />
                  )}
                />
                <label
                  htmlFor="email"
                  className={classNames({ "p-error": !!errors.email })}
                >
                  Email*
                </label>
              </span>
            </div>

            <Button
              type="submit"
              label="確認"
              icon="pi pi-check"
              className="mt-2"
            />
          </form>
        </div>
        {/* <div className="bg-white p-2">
            <div className="grid grid-nogutter gap-3">
              <div>姓名： {"AAA"}</div>
              <div>信箱：{"BBB"}</div>
              <div className="flex flex-row align-items-center">
                <div>暱稱：</div>
                <InputText
                  type="text"
                  className="p-inputtext-sm"
                  {...register("brief")}
                />
              </div>
              <div className="flex flex-row align-items-center">
                <div>午餐：</div>
              />
                <Dropdown
                  value={lunchPayment}
                  onChange={(e) => setLunchPayment(e.value)}
                  options={payments}
                  optionLabel="name"
                  editable
                  placeholder="Select a City"
                  className="w-full md:w-14rem"
                />
              </div>
              <div className="flex flex-row align-items-center">
                <div>飲料：</div>
                <InputText
                  type="text"
                  className="p-inputtext-sm"
                  value={"Line Pay Money"}
                />
              </div>
              <input type="submit" />
            </div>
          </div> */}
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
}

const Account = () => {
  return <>{AccountTable()}</>;
};
export default Account;
