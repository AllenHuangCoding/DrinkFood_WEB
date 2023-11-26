import ControlDateTimePicker from "@/src/components/form/ControlDateTimePicker";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useForm } from "react-hook-form";

interface UpdateCloseModel {
  CloseTime: Date;
}

const UpdateCloseDialog = ({
  visible,
  closeDialog,
}: {
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
    console.log(param);
    closeDialog();
    reset();
  };

  return (
    <Dialog
      header="更改結單時間"
      visible={visible}
      className="w-8 md:w-6 lg:w-5 xl:w-3"
      onHide={() => {
        closeDialog();
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-column gap-3"
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
