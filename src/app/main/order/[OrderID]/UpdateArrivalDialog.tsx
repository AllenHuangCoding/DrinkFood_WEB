import ControlDateTimePicker from "@/src/components/form/ControlDateTimePicker";
import { UpdateArrivalTime } from "@/src/services/order/OrderService";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface UpdateArrivalModel {
  ArrivalTime: Date;
}

const UpdateArrivalDialog = ({
  orderID,
  visible,
  closeDialog,
  submitCallback,
}: {
  orderID: string;
  visible: boolean;
  closeDialog: () => void;
  submitCallback?: () => void;
}) => {
  const defaultValues: UpdateArrivalModel = {
    ArrivalTime: new Date(),
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = (param: UpdateArrivalModel) => {
    UpdateArrivalTime(orderID, { ArrivalTime: param.ArrivalTime }).then(() => {
      if (submitCallback != null) {
        submitCallback();
      }
    });
    closeDialog();
  };

  useEffect(() => {
    reset();
  }, [visible]);

  return (
    <Dialog
      header="更改用餐時間"
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
        <ControlDateTimePicker
          name="ArrivalTime"
          control={control}
          rules={{ required: "必填欄位" }}
          labelName="用餐時間"
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

const UpdateArrivalButton = ({ showDialog }: { showDialog: () => void }) => {
  return (
    <Button
      label="更改用餐時間"
      severity="secondary"
      className="w-full"
      onClick={() => {
        showDialog();
      }}
    />
  );
};

export { UpdateArrivalDialog, UpdateArrivalButton };
