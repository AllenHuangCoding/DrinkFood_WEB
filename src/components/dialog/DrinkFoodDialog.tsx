import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useForm } from "react-hook-form";
import ControlDropDown from "@/src/components/form/ControlDropDown";
import { RequestPostOrderDetailModel } from "@/src/models/models";
import ControlTextInput from "../form/ControlTextInput";
import useDrinkFoodDialogStore from "@/src/store/DrinkFoodDialogStore";

export interface DetailDialogFullModel {
  DetailID: string | undefined;
  OrderID: string | undefined;
  DrinkFoodID: string | undefined;
  SugarID: string | undefined;
  IceID: string | undefined;
  AddItemID: string | undefined;
  Remark: string | undefined;
}

const DrinkFoodDialog = ({ action }: { action: "Create" | "Update" }) => {
  const defaultValues: DetailDialogFullModel = {
    DetailID: undefined,
    OrderID: undefined,
    DrinkFoodID: undefined,
    SugarID: undefined,
    IceID: undefined,
    AddItemID: undefined,
    Remark: undefined,
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = (param: DetailDialogFullModel) => {
    param.DrinkFoodID = selectedDrinkFood?.DrinkFoodID;
    param.OrderID = "";
    switch (action) {
      case "Create":
        console.log(param);
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

  const { selectedDrinkFood, visible, setVisible } = useDrinkFoodDialogStore();

  const sugarOption = [
    { ID: "1", Text: "無糖" },
    { ID: "2", Text: "微糖" },
    { ID: "3", Text: "少糖" },
  ];
  const iceOption = [
    { ID: "1", Text: "去冰" },
    { ID: "2", Text: "微冰" },
    { ID: "3", Text: "少冰" },
  ];

  const addItemOption = [
    { ID: "1", Text: "珍珠 +10元" },
    { ID: "2", Text: "仙草凍 +10元" },
    { ID: "3", Text: "布丁 +15元" },
  ];
  return (
    <>
      <Dialog
        header={dialogHeader}
        visible={visible}
        className="w-10 md:w-6 lg:w-5 xl:w-4"
        draggable={false}
        position="top"
        onHide={() => {
          setVisible(false);
          reset();
        }}
      >
        <div className="flex justify-content-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-column gap-3"
          >
            <div>
              <div>{selectedDrinkFood?.DrinkFoodName}</div>
              <div>{selectedDrinkFood?.DrinkFoodRemark}</div>
            </div>
            <div>價格：{selectedDrinkFood?.DrinkFoodPrice}</div>
            <div>
              <ControlDropDown
                name="SugarID"
                control={control}
                rules={{ required: "必填欄位" }}
                options={sugarOption}
                optionLabel="Text"
                optionValue="ID"
                placeholder="選擇甜度"
                errorKey={errors.SugarID}
              />
            </div>
            <div>
              <ControlDropDown
                name="IceID"
                control={control}
                rules={{ required: "必填欄位" }}
                options={iceOption}
                optionLabel="Text"
                optionValue="ID"
                placeholder="選擇冰塊"
                errorKey={errors.IceID}
              />
            </div>
            <div>
              <ControlDropDown
                name="AddItemID"
                control={control}
                options={addItemOption}
                optionLabel="Text"
                optionValue="ID"
                placeholder="選擇加料 (可不填)"
                errorKey={errors.AddItemID}
              />
            </div>
            <div>
              <ControlTextInput
                name={"Remark"}
                control={control}
                placeholder="備註"
                errorKey={errors.Remark}
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
