import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useForm } from "react-hook-form";
import ControlDropDown from "@/src/components/form/ControlDropDown";
import { RequestPostOrderDetailModel } from "@/src/models/models";
import ControlTextInput from "../form/ControlTextInput";

const DrinkFoodDialog = ({
  visible,
  drinkFoodID,
  closeDialog,
  action,
  submitCallback,
}: {
  visible: boolean;
  drinkFoodID?: string;
  action: "Create" | "Update";
  closeDialog: () => void;
  submitCallback?: () => void;
}) => {
  const defaultValues: RequestPostOrderDetailModel = {
    OD_remark: "",
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = (param: any) => {
    switch (action) {
      case "Create":
        alert(JSON.stringify(param));
        break;
      case "Update":
        break;
      default:
        break;
    }
  };

  var dialogHeader: string = "";
  switch (action) {
    case "Create":
      dialogHeader = "新增品項";
      break;
    case "Update":
      dialogHeader = "編輯品項";
      break;
  }

  return (
    <>
      <Dialog
        header={dialogHeader}
        visible={visible}
        className="w-10 md:w-6 lg:w-5 xl:w-4"
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
              <ControlTextInput
                name={"OD_remark"}
                control={control}
                rules={{
                  required: "必填欄位",
                }}
                placeholder="備註"
                errorKey={errors.OD_remark}
                disabled={false}
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

export { DrinkFoodDialog };
