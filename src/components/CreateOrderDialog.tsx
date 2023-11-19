import { useEffect } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { useForm, Controller } from "react-hook-form";
import { classNames } from "primereact/utils";
import { Checkbox } from "primereact/checkbox";
import { InputNumber } from "primereact/inputnumber";
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

export default function CreateOrderDialog({
  visible,
  closeDialog,
}: {
  visible: boolean;
  closeDialog: () => void;
}) {
  const typeDefaultValue = [
    { ID: 1, name: "午餐" },
    { ID: 2, name: "飲料" },
    { ID: 2, name: "下午茶" },
  ];

  const officeDefaultValue = [{ ID: 1, name: "建國辦公室" }];

  const storeDefaultValue = [{ ID: 1, name: "可不可熟成紅茶" }];

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

  const onSubmit = (data: CreateOrderModel) => {
    console.log(data);
    reset();
  };

  return (
    <Dialog
      header="開團"
      visible={visible}
      className="w-8 md:w-6 lg:w-5 xl:w-3"
      onHide={() => closeDialog()}
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
  );
}
