"use client";

import { useEffect } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { useForm, Controller } from "react-hook-form";
import { classNames } from "primereact/utils";
import { Checkbox } from "primereact/checkbox";
import { InputNumber } from "primereact/inputnumber";
import { RequestCreateAccountModel } from "../models/models/RequestCreateAccountModel";
import {
  CreateAccount,
  useProfileDialogOptions,
  UpdateProfile,
} from "../services/admin/AccountService";
import { RequestUpdateProfileModel } from "../models";

export interface ProfileDialogFullModel {
  AccountID: string | null;
  Name: string;
  Email: string;
  Brief: string;
  LunchDefaultPayment: string | null;
  DrinkDefaultPayment: string | null;
  LunchNotify: boolean;
  DrinkNotify: boolean;
  CloseNotify: number;
}

export default function ProfileDialog({
  visible,
  userData,
  action,
  closeDialog,
}: {
  visible: boolean;
  userData: ProfileDialogFullModel | null;
  action: "View" | "Create" | "Update";
  closeDialog: () => void;
}) {
  const { data } = useProfileDialogOptions();

  const defaultValues: ProfileDialogFullModel = {
    AccountID: null,
    Name: "",
    Email: "",
    Brief: "",
    LunchDefaultPayment: null,
    DrinkDefaultPayment: null,
    LunchNotify: false,
    DrinkNotify: false,
    CloseNotify: 10,
  };

  var dialogHeader: string = "";

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = (dialogData: ProfileDialogFullModel) => {
    switch (action) {
      case "View":
        break;
      case "Create":
        const param: RequestCreateAccountModel = {
          Name: dialogData.Name,
          Email: dialogData.Email,
          Brief: dialogData.Brief,
          LunchDefaultPayment: dialogData.LunchDefaultPayment,
          DrinkDefaultPayment: dialogData.DrinkDefaultPayment,
          LunchNotify: dialogData.LunchNotify,
          DrinkNotify: dialogData.DrinkNotify,
          CloseNotify: dialogData.CloseNotify,
        };
        CreateAccount(param);
        alert("新增使用者資料成功");
        closeDialog();
        break;
      case "Update":
        if (dialogData.AccountID != null) {
          const param: RequestUpdateProfileModel = {
            Brief: dialogData.Brief,
            LunchDefaultPayment: dialogData.LunchDefaultPayment,
            DrinkDefaultPayment: dialogData.DrinkDefaultPayment,
            LunchNotify: dialogData.LunchNotify,
            DrinkNotify: dialogData.DrinkNotify,
            CloseNotify: dialogData.CloseNotify,
          };
          UpdateProfile(dialogData.AccountID!, param);
          alert("修改使用者資料成功");
          closeDialog();
        } else {
          alert("缺少變更帳號ID");
        }
        break;
    }
    reset();
  };

  useEffect(() => {
    if (userData) {
      reset({
        AccountID: userData.AccountID,
        Name: userData.Name,
        Brief: userData.Brief,
        Email: userData.Email,
        LunchDefaultPayment: userData.LunchDefaultPayment,
        DrinkDefaultPayment: userData.DrinkDefaultPayment,
        LunchNotify: userData.LunchNotify,
        DrinkNotify: userData.DrinkNotify,
        CloseNotify: userData.CloseNotify,
      });
    } else {
      reset({
        Name: "",
        Brief: "",
        Email: "",
        LunchDefaultPayment: null,
        DrinkDefaultPayment: null,
        LunchNotify: false,
        DrinkNotify: false,
        CloseNotify: 10,
      });
    }
  }, [userData, reset]);

  switch (action) {
    case "View":
      dialogHeader = "基本資料";
      break;
    case "Create":
      dialogHeader = "新增使用者";
      break;
    case "Update":
      dialogHeader = "編輯使用者";
      break;
  }

  return (
    <Dialog
      header={dialogHeader}
      visible={visible}
      className="w-8 md:w-6 lg:w-5 xl:w-3"
      onHide={() => {
        closeDialog();
      }}
    >
      <div className="flex justify-content-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-column gap-3"
        >
          <div>
            <Controller
              name="Name"
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
            <small className="p-error">{errors.Name?.message}</small>
          </div>

          <div>
            <Controller
              name="Email"
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
            <small className="p-error">{errors.Email?.message}</small>
          </div>

          <div>
            <Controller
              name="Brief"
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
            <small className="p-error">{errors.Brief?.message}</small>
          </div>

          <div>
            <Controller
              name="LunchDefaultPayment"
              control={control}
              rules={{ required: "必填欄位" }}
              render={({ field, fieldState }) => (
                <Dropdown
                  id={field.name}
                  value={field.value}
                  options={data?.Data.LunchPayment}
                  optionLabel="Text"
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
            <small className="p-error">
              {errors.LunchDefaultPayment?.message}
            </small>
          </div>

          <div>
            <Controller
              name="DrinkDefaultPayment"
              control={control}
              rules={{ required: "必填欄位" }}
              render={({ field, fieldState }) => (
                <Dropdown
                  id={field.name}
                  value={field.value}
                  options={data?.Data.DrinkPayment}
                  optionLabel="Text"
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
            <small className="p-error">
              {errors.DrinkDefaultPayment?.message}
            </small>
          </div>

          <div>
            <Controller
              name="CloseNotify"
              control={control}
              rules={{ required: "必填欄位 (數值格式0 ~ 15)" }}
              render={({ field, fieldState }) => (
                <InputNumber
                  id={field.name}
                  value={field.value}
                  placeholder="結單前N分鐘提醒"
                  min={0}
                  max={15}
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
            <small className="p-error">{errors.CloseNotify?.message}</small>
          </div>

          <div className="flex justify-content-between align-items-center">
            <Controller
              name="LunchNotify"
              control={control}
              render={({ field, fieldState }) => (
                <div className="flex gap-2">
                  <Checkbox
                    inputId={field.name}
                    onChange={(e) => field.onChange(e.checked)}
                    checked={field.value}
                  />
                  <label htmlFor="LunchNotify">我是午餐團常客</label>
                </div>
              )}
            />
            <Controller
              name="DrinkNotify"
              control={control}
              render={({ field, fieldState }) => (
                <div className="flex gap-2">
                  <Checkbox
                    inputId={field.name}
                    onChange={(e) => field.onChange(e.checked)}
                    checked={field.value}
                  />
                  <label htmlFor="DrinkNotify">我是飲料團常客</label>
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
