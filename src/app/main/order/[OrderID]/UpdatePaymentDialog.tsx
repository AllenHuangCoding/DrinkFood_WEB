import ControlDateTimePicker from "@/src/components/form/ControlDateTimePicker";
import ControlDropDown from "@/src/components/form/ControlDropDown";
import { showSuccess } from "@/src/components/form/CustomToast";
import { useProfileDialogOptions } from "@/src/services/admin/AccountService";
import { PutPayment, UpdateCloseTime } from "@/src/services/order/OrderService";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface UpdatePaymentModel {
  Payment: string;
}

const UpdateLunchPaymentDialog = ({
  detailID,
  visible,
  closeDialog,
  submitCallback,
}: {
  detailID: string;
  visible: boolean;
  closeDialog: () => void;
  submitCallback?: () => void;
}) => {
  const defaultValues: UpdatePaymentModel = {
    Payment: "",
  };
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = (param: UpdatePaymentModel) => {
    PutPayment(detailID, { PaymentID: param.Payment })
      .then((response) => {
        showSuccess(response.Message);
        closeDialog();
      })
      .then(() => {
        if (submitCallback != null) {
          submitCallback();
        }
      });
  };

  useEffect(() => {
    reset();
  }, [visible]);

  const { data } = useProfileDialogOptions();

  return (
    <Dialog
      header="更改付款方式"
      visible={visible}
      className="w-10 md:w-6 lg:w-4 xl:w-3"
      position="top"
      draggable={false}
      onHide={() => {
        closeDialog();
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-column gap-3 mt-3"
      >
        <ControlDropDown
          name="Payment"
          control={control}
          rules={{ required: "必填欄位" }}
          options={data?.Data.LunchPayment!}
          optionLabel="Text"
          optionValue="ID"
          placeholder="選擇付款方式"
          errorKey={errors.Payment}
        />

        <Button
          type="submit"
          label="確認"
          icon="pi pi-check"
          className="w-full"
        />
      </form>
    </Dialog>
  );
};

const UpdatePaymentButton = ({ showDialog }: { showDialog: () => void }) => {
  return (
    <Button
      label="更改付款方式"
      severity="secondary"
      className="w-full"
      onClick={() => {
        showDialog();
      }}
    />
  );
};

export { UpdateLunchPaymentDialog, UpdatePaymentButton };
