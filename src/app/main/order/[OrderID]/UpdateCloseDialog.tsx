import ControlDateTimePicker from "@/src/components/form/ControlDateTimePicker";
import { UpdateCloseTime } from "@/src/services/order/OrderService";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface UpdateCloseModel {
  CloseTime: Date;
}

const UpdateCloseDialog = ({
  orderID,
  visible,
  closeDialog,
}: {
  orderID: string;
  visible: boolean;
  closeDialog: () => void;
}) => {
  const defaultValues: UpdateCloseModel = {
    CloseTime: new Date(),
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = (param: UpdateCloseModel) => {
    UpdateCloseTime(orderID, { CloseTime: param.CloseTime });
    closeDialog();
  };

  useEffect(() => {
    reset();
  }, [visible]);

  return (
    <Dialog
      header="更改結單時間"
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
          name="CloseTime"
          control={control}
          rules={{ required: "必填欄位" }}
          labelName="結單時間"
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

const UpdateCloseButton = ({ showDialog }: { showDialog: () => void }) => {
  return (
    <Button
      label="更改結單時間"
      severity="secondary"
      className="w-full"
      onClick={() => {
        showDialog();
      }}
    />
  );
};

export { UpdateCloseDialog, UpdateCloseButton };
