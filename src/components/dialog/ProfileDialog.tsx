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
  UnbindLine,
} from "@/src/services/admin/AccountService";
import { RequestUpdateProfileModel } from "@/src/models";
import ControlTextInput from "@/src/components/form/ControlTextInput";
import ControlDropDown from "@/src/components/form/ControlDropDown";
import ControlNumberInput from "@/src/components/form/ControlNumberInput";
import ControlCheckbox from "../form/ControlCheckbox";
import { GetAccountID } from "@/src/store/localStorage";
import { showSuccess, showWarn } from "@/src/components/form/CustomToast";
import { confirmDialog } from "primereact/confirmdialog";

export interface ProfileDialogFullModel {
  AccountID: string | null;
  Name: string;
  Email: string;
  Brief: string | null;
  DefaultLunchPayment: string | null;
  DefaultDrinkPayment: string | null;
  LunchNotify: boolean;
  DrinkNotify: boolean;
  CloseNotify: number;
  LineID: string | null;
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
  action: "Create" | "Update" | "Profile";
  closeDialog: () => void;
  submitCallback?: () => void;
}) {
  const { data } = useProfileDialogOptions();

  const defaultValues: ProfileDialogFullModel = {
    AccountID: null,
    Name: "",
    Email: "",
    Brief: null,
    DefaultLunchPayment: null,
    DefaultDrinkPayment: null,
    LunchNotify: false,
    DrinkNotify: false,
    CloseNotify: 10,
    LineID: null,
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
      case "Create":
        const param: RequestCreateAccountModel = {
          Name: dialogData.Name,
          Email: dialogData.Email,
          Brief: dialogData.Brief ?? undefined,
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
      case "Profile":
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
        Email: userData.Email,
        Brief: userData.Brief,
        DefaultLunchPayment: userData.DefaultLunchPayment,
        DefaultDrinkPayment: userData.DefaultDrinkPayment,
        LunchNotify: userData.LunchNotify,
        DrinkNotify: userData.DrinkNotify,
        CloseNotify: userData.CloseNotify,
        LineID: userData.LineID,
      });
    } else {
      reset({
        Name: "",
        Email: "",
        Brief: null,
        DefaultLunchPayment: null,
        DefaultDrinkPayment: null,
        LunchNotify: false,
        DrinkNotify: false,
        CloseNotify: 10,
        LineID: null,
      });
    }
  }, [userData]);

  switch (action) {
    case "Profile":
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
      <div className="flex flex-column justify-content-center">
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
              disabled={action == "Update" || action == "Profile"}
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
                  disabled={action == "Update" || action == "Profile"}
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

        <Button
          label="綁定Line"
          icon="pi pi-comment"
          severity="success"
          className={classNames(
            { hidden: !(action == "Profile" && userData?.LineID == null) },
            "w-full mt-3"
          )}
          raised
          onClick={() => {
            openLine();
          }}
        />
        <Button
          label="解除綁定"
          icon="pi pi-times"
          severity="success"
          className={classNames(
            { hidden: !(action == "Profile" && userData?.LineID != null) },
            "w-full mt-3"
          )}
          raised
          onClick={() => {
            confirmDialog({
              header: "解除綁定",
              message: `解除後將無法繼續收到通知與提醒`,
              icon: "pi pi-info-circle",
              accept() {
                UnbindLine(userData?.AccountID!).then(() => {
                  if (submitCallback != null) {
                    submitCallback();
                  }
                });
              },
              reject() {},
            });
          }}
        />
      </div>
    </Dialog>
  );
}
