"use client";

import { useEffect } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useForm, Controller } from "react-hook-form";
import { classNames } from "primereact/utils";
import { RequestCreateAccountModel } from "@/src/models/models/RequestCreateAccountModel";
import {
  CreateAccount,
  useProfileDialogOptions,
  UpdateProfile,
} from "@/src/services/admin/AccountService";
import { RequestUpdateProfileModel } from "@/src/models";
import ControlTextInput from "@/src/components/form/ControlTextInput";
import ControlDropDown from "@/src/components/form/ControlDropDown";
import ControlNumberInput from "@/src/components/form/ControlNumberInput";
import ControlCheckbox from "../form/ControlCheckbox";
import axiosApiClient from "@/src/services/axiosClient";
import { GetAccountID } from "@/src/store/localStorage";
import { showSuccess, showWarn } from "@/src/components/form/CustomToast";

export interface ProfileDialogFullModel {
  AccountID: string | null;
  Name: string;
  Email: string;
  Brief: string;
  DefaultLunchPayment: string | null;
  DefaultDrinkPayment: string | null;
  LunchNotify: boolean;
  DrinkNotify: boolean;
  CloseNotify: number;
}

export default function ProfileDialog({
  visible,
  userData,
  action,
  closeDialog,
  submitCallback,
}: {
  visible: boolean;
  userData: ProfileDialogFullModel | null;
  action: "View" | "Create" | "Update";
  closeDialog: () => void;
  submitCallback?: () => void;
}) {
  const { data } = useProfileDialogOptions();

  const defaultValues: ProfileDialogFullModel = {
    AccountID: null,
    Name: "",
    Email: "",
    Brief: "",
    DefaultLunchPayment: null,
    DefaultDrinkPayment: null,
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
          LunchDefaultPayment: dialogData.DefaultLunchPayment,
          DrinkDefaultPayment: dialogData.DefaultDrinkPayment,
          LunchNotify: dialogData.LunchNotify,
          DrinkNotify: dialogData.DrinkNotify,
          CloseNotify: dialogData.CloseNotify,
        };
        CreateAccount(param)
          .then((response) => {
            showSuccess(response.Message);
            closeDialog();
          })
          .then(() => {
            if (submitCallback != null) {
              submitCallback();
            }
          });
        break;
      case "Update":
        if (dialogData.AccountID != null) {
          const param: RequestUpdateProfileModel = {
            Brief: dialogData.Brief,
            LunchDefaultPayment: dialogData.DefaultLunchPayment,
            DrinkDefaultPayment: dialogData.DefaultDrinkPayment,
            LunchNotify: dialogData.LunchNotify,
            DrinkNotify: dialogData.DrinkNotify,
            CloseNotify: dialogData.CloseNotify,
          };
          UpdateProfile(dialogData.AccountID!, param)
            .then((response) => {
              showSuccess(response.Message);
              closeDialog();
            })
            .then(() => {
              if (submitCallback != null) {
                submitCallback();
              }
            });
        } else {
          showWarn("缺少變更帳號ID");
        }
        break;
    }
    reset();
  };

  const openLine = () => {
    const url =
      "https://notify-bot.line.me/oauth/authorize?response_type=code&scope=notify";
    const client_id = "&client_id=5xHhGC7WQPUsMC4SkG2YAw";
    const redirect = `${process.env.NEXT_PUBLIC_WEB_BASEURL}/auth/notify`;
    const redirect_uri = "&redirect_uri=" + encodeURIComponent(redirect);
    const account_url = "&state=" + GetAccountID();
    window.open(url + client_id + redirect_uri + account_url);
  };

  useEffect(() => {
    if (userData) {
      reset({
        AccountID: userData.AccountID,
        Name: userData.Name,
        Brief: userData.Brief,
        Email: userData.Email,
        DefaultLunchPayment: userData.DefaultLunchPayment,
        DefaultDrinkPayment: userData.DefaultDrinkPayment,
        LunchNotify: userData.LunchNotify,
        DrinkNotify: userData.DrinkNotify,
        CloseNotify: userData.CloseNotify,
      });
    } else {
      reset({
        Name: "",
        Brief: "",
        Email: "",
        DefaultLunchPayment: null,
        DefaultDrinkPayment: null,
        LunchNotify: false,
        DrinkNotify: false,
        CloseNotify: 10,
      });
    }
  }, [userData]);

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
      className="w-10 md:w-6 lg:w-5 xl:w-4"
      draggable={false}
      position="top"
      onHide={() => {
        reset();
        closeDialog();
      }}
    >
      <div className="flex justify-content-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-column gap-3"
        >
          <div>
            <ControlTextInput
              name={"Name"}
              control={control}
              rules={{
                required: "必填欄位",
              }}
              placeholder="姓名"
              errorKey={errors.Name}
              disabled={action == "Update" || action == "View"}
            />
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
                  disabled={action == "Update" || action == "View"}
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
            <ControlTextInput
              name="Brief"
              control={control}
              rules={{ required: "必填欄位" }}
              placeholder="暱稱"
              errorKey={errors.Brief}
            />
          </div>

          <div>
            <ControlDropDown
              name="DefaultLunchPayment"
              control={control}
              rules={{ required: "必填欄位" }}
              options={data?.Data.LunchPayment!}
              optionLabel="Text"
              optionValue="ID"
              placeholder="選擇午餐預設付款方式"
              errorKey={errors.DefaultLunchPayment}
            />
          </div>

          <div>
            <ControlDropDown
              name="DefaultDrinkPayment"
              control={control}
              rules={{ required: "必填欄位" }}
              options={data?.Data.DrinkPayment!}
              optionLabel="Text"
              optionValue="ID"
              placeholder="選擇飲料預設付款方式"
              errorKey={errors.DefaultDrinkPayment}
            />
          </div>

          <div className={classNames({ hidden: !(action == "View") })}>
            <Button
              label="綁定Line"
              icon="pi pi-search"
              severity="success"
              raised
              onClick={() => {
                openLine();
              }}
            />
          </div>

          {/* <div>
            <ControlNumberInput
              name="CloseNotify"
              control={control}
              rules={{ required: "必填欄位 (數值格式0 ~ 15)" }}
              min={0}
              max={15}
              placeholder="結單前N分鐘提醒"
              errorKey={errors.CloseNotify}
            />
          </div> */}

          <div className="flex justify-content-between align-items-center">
            <ControlCheckbox
              name="LunchNotify"
              control={control}
              labelName="我是午餐團常客"
            />
            <ControlCheckbox
              name="DrinkNotify"
              control={control}
              labelName="我是飲料團常客"
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
