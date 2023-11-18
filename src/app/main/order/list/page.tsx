"use client";

import { BasicTable } from "@/src/components/BasicTable";
import { useOrderList } from "@/src/services/order/OrderService";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { Column } from "primereact/column";

import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { useForm, Controller } from "react-hook-form";
import { classNames } from "primereact/utils";
import { Checkbox } from "primereact/checkbox";
import { InputNumber } from "primereact/inputnumber";
import { useState } from "react";
import { Calendar } from "primereact/calendar";

interface CreateOrderModel {
  createAccountID: string | null;
  officeID: string | null;
  storeID: string | null;
  orderTypeID: string | null;
  arrivalTime: Date | null;
  openTime: Date | null;
  closeTime: Date | null;
  isPublic: boolean;
}

export default function OrderListPage() {
  const typeDefaultValue = [
    { ID: 1, name: "午餐" },
    { ID: 2, name: "飲料" },
    { ID: 2, name: "下午茶" },
  ];

  const officeDefaultValue = [{ ID: 1, name: "建國辦公室" }];

  const storeDefaultValue = [{ ID: 1, name: "可不可熟成紅茶" }];

  const [visible, setVisible] = useState<boolean>(false);

  const defaultValues: CreateOrderModel = {
    createAccountID: null,
    officeID: null,
    storeID: null,
    orderTypeID: null,
    arrivalTime: null,
    openTime: null,
    closeTime: null,
    isPublic: true,
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

  const router = useRouter();
  const header = (
    <div className="flex align-items-center justify-content-end gap-2">
      <Button
        label="新增"
        icon="pi pi-plus"
        severity="info"
        onClick={() => {
          setVisible(true);
        }}
      />
    </div>
  );

  return (
    <>
      <Dialog
        header="開團"
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
                name="officeID"
                control={control}
                rules={{ required: "必填欄位" }}
                render={({ field, fieldState }) => (
                  <Dropdown
                    id={field.name}
                    value={field.value}
                    options={officeDefaultValue}
                    optionLabel="name"
                    optionValue="ID"
                    placeholder="選擇辦公室"
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
              <small className="p-error">{errors.officeID?.message}</small>
            </div>

            <div>
              <Controller
                name="storeID"
                control={control}
                rules={{ required: "必填欄位" }}
                render={({ field, fieldState }) => (
                  <Dropdown
                    id={field.name}
                    value={field.value}
                    options={storeDefaultValue}
                    optionLabel="name"
                    optionValue="ID"
                    placeholder="選擇店家"
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
              <small className="p-error">{errors.storeID?.message}</small>
            </div>

            <div>
              <Controller
                name="orderTypeID"
                control={control}
                rules={{ required: "必填欄位" }}
                render={({ field, fieldState }) => (
                  <Dropdown
                    id={field.name}
                    value={field.value}
                    options={typeDefaultValue}
                    optionLabel="name"
                    optionValue="ID"
                    placeholder="選擇類型"
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
              <small className="p-error">{errors.orderTypeID?.message}</small>
            </div>

            <div>
              <Controller
                name="arrivalTime"
                control={control}
                rules={{ required: "必填欄位" }}
                render={({ field, fieldState }) => (
                  <Calendar
                    id={field.name}
                    value={field.value}
                    placeholder="用餐時間"
                    dateFormat="yy-mm-dd"
                    hourFormat="24"
                    showTime
                    className={classNames(
                      {
                        "p-invalid": fieldState.invalid,
                      },
                      "w-full"
                    )}
                    onChange={(e) => field.onChange(e.value)}
                  />
                )}
              />
              <small className="p-error">{errors.arrivalTime?.message}</small>
            </div>

            <div>
              <Controller
                name="openTime"
                control={control}
                rules={{ required: "必填欄位" }}
                render={({ field, fieldState }) => (
                  <Calendar
                    id={field.name}
                    value={field.value}
                    placeholder="開放時間"
                    dateFormat="yy-mm-dd"
                    hourFormat="24"
                    showTime
                    className={classNames(
                      {
                        "p-invalid": fieldState.invalid,
                      },
                      "w-full"
                    )}
                    onChange={(e) => field.onChange(e.value)}
                  />
                )}
              />
              <small className="p-error">{errors.openTime?.message}</small>
            </div>

            <div>
              <Controller
                name="closeTime"
                control={control}
                rules={{ required: "必填欄位" }}
                render={({ field, fieldState }) => (
                  <Calendar
                    id={field.name}
                    value={field.value}
                    placeholder="結單時間"
                    dateFormat="yy-mm-dd"
                    hourFormat="24"
                    showTime
                    className={classNames(
                      {
                        "p-invalid": fieldState.invalid,
                      },
                      "w-full"
                    )}
                    onChange={(e) => field.onChange(e.value)}
                  />
                )}
              />
              <small className="p-error">{errors.closeTime?.message}</small>
            </div>

            <div className="flex justify-content-between align-items-center">
              <Controller
                name="isPublic"
                control={control}
                render={({ field, fieldState }) => (
                  <div className="flex gap-2">
                    <Checkbox
                      inputId={field.name}
                      onChange={(e) => field.onChange(e.checked)}
                      checked={field.value}
                    />
                    <label htmlFor="isPublic">公開訂單</label>
                  </div>
                )}
              />
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
        <BasicTable dataKey="OrderID" query={useOrderList()} header={header}>
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
            field="CloseTime"
            header="結單時間"
            style={{ width: "15%" }}
            sortable
          />
          <Column
            field="OfficeName"
            header="地點"
            style={{ width: "10%" }}
            sortable
          />
          <Column
            field="OwnerName"
            header="團長"
            style={{ width: "8%" }}
            sortable
          />
          <Column
            field="OrderStatusDesc"
            header="訂單狀態"
            style={{ width: "12%" }}
            sortable
          />
          <Column
            field="Remark"
            header="備註"
            style={{ width: "10%" }}
            sortable
          />
          <Column
            header="功能"
            style={{ width: "10%" }}
            body={(x) => (
              <>
                <Button
                  icon="pi pi-search"
                  text
                  onClick={() => {
                    router.push(`../${x.OrderID}`);
                    // router.push(`../export?search=123`);
                  }}
                />
              </>
            )}
          />
        </BasicTable>
      </div>
    </>
  );
}
