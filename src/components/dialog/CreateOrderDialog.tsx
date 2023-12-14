import { useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useForm } from "react-hook-form";
import {
  CreateOrder,
  useCreateOrderDialogOptions,
} from "@/src/services/order/OrderService";
import { RequestPostOrderModel } from "@/src/models/models/RequestPostOrderModel";
import { Toast } from "primereact/toast";
import ControlDateTimePicker from "@/src/components/form/ControlDateTimePicker";
import ControlDropDown from "@/src/components/form/ControlDropDown";
import ControlCheckbox from "@/src/components/form/ControlCheckbox";
import useLoginStore from "@/src/store/LoginStore";

const CreateOrderButton = ({ showDialog }: { showDialog: () => void }) => {
  return (
    <Button
      label="新增"
      icon="pi pi-plus"
      severity="info"
      onClick={() => {
        showDialog();
      }}
    />
  );
};

const CreateOrderDialog = ({
  visible,
  storeID,
  closeDialog,
  submitCallback,
}: {
  visible: boolean;
  storeID?: string;
  closeDialog: () => void;
  submitCallback?: () => void;
}) => {
  const defaultValues: RequestPostOrderModel = {
    CreateAccountID: "",
    OfficeID: "",
    StoreID: "",
    TypeID: "",
    ArrivalTime: undefined,
    OpenTime: undefined,
    CloseTime: undefined,
    IsPublic: false,
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const { loginData } = useLoginStore();

  const onSubmit = (param: RequestPostOrderModel) => {
    param.CreateAccountID = loginData?.AccountID!;
    CreateOrder(param)
      .then(() => {
        showMessage("新增訂單成功", toastBottomCenter, "success");
        closeDialog();
        reset();
      })
      .then(() => {
        if (submitCallback != null) {
          submitCallback();
        }
      });
  };

  const { data } = useCreateOrderDialogOptions();

  const toastBottomCenter = useRef(null);

  const showMessage = (label: string, ref: any, severity: string) => {
    ref.current.show({
      severity: severity,
      summary: label,
      detail: label,
      life: 3000,
    });
  };

  useEffect(() => {
    reset();
  }, [visible]);

  useEffect(() => {
    reset({ StoreID: storeID, ArrivalTime: new Date() });
  }, [storeID]);

  return (
    <>
      <Toast ref={toastBottomCenter} position="bottom-center" />
      <Dialog
        header="開團"
        visible={visible}
        className="w-11 md:w-10 lg:w-7 xl:w-6"
        draggable={false}
        position="top"
        onHide={() => closeDialog()}
      >
        <div className="flex justify-content-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-column gap-3"
          >
            <div>
              <ControlDropDown
                name="OfficeID"
                control={control}
                rules={{ required: "必填欄位" }}
                options={data?.Data.Office}
                optionLabel="Text"
                optionValue="ID"
                placeholder="選擇辦公室"
                errorKey={errors.OfficeID}
              />
            </div>

            <div className="flex flex-column gap-3 sm:flex-row">
              <ControlDropDown
                name="TypeID"
                control={control}
                rules={{ required: "必填欄位" }}
                options={data?.Data.Type}
                optionLabel="Text"
                optionValue="ID"
                placeholder="選擇類型"
                errorKey={errors.TypeID}
              />
              <ControlDropDown
                name="StoreID"
                control={control}
                rules={{ required: "必填欄位" }}
                options={data?.Data.Store!}
                optionLabel="Text"
                optionValue="ID"
                placeholder="選擇店家"
                filter={true}
                disabled={storeID != "" && storeID != undefined}
                errorKey={errors.StoreID}
              />
            </div>

            <div className="flex flex-column gap-3 sm:flex-row">
              <ControlDateTimePicker
                name="OpenTime"
                control={control}
                rules={{ required: "必填欄位" }}
                labelName="開放時間"
                errorKey={errors.OpenTime}
              />
              <ControlDateTimePicker
                name="CloseTime"
                control={control}
                rules={{ required: "必填欄位" }}
                labelName="結單時間"
                errorKey={errors.CloseTime}
              />
            </div>

            <div className="w-full sm:w-6">
              <ControlDateTimePicker
                name="ArrivalTime"
                control={control}
                rules={{ required: "必填欄位" }}
                labelName="用餐時間"
                errorKey={errors.ArrivalTime}
              />
            </div>

            <div className="flex justify-content-between align-items-center">
              <ControlCheckbox
                name="IsPublic"
                control={control}
                labelName="公開訂單"
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
    </>
  );
};

export { CreateOrderButton, CreateOrderDialog };
