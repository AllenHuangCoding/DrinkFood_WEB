import { useRef } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useForm, Controller } from "react-hook-form";
import { classNames } from "primereact/utils";
import { Calendar } from "primereact/calendar";
import {
  CreateOrder,
  useCreateOrderDialogOptions,
} from "@/src/services/order/OrderService";
import { RequestPostOrderModel } from "@/src/models/models/RequestPostOrderModel";
import { Toast } from "primereact/toast";
import ControlDateTimePicker from "@/src/components/form/ControlDateTimePicker";
import ControlDropDown from "@/src/components/form/ControlDropDown";
import ControlCheckbox from "@/src/components/form/ControlCheckbox";

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
  closeDialog,
}: {
  visible: boolean;
  closeDialog: () => void;
}) => {
  const defaultValues: RequestPostOrderModel = {
    CreateAccountID: "",
    OfficeID: "",
    StoreID: "",
    TypeID: "",
    ArrivalTime: new Date(),
    OpenTime: undefined,
    CloseTime: undefined,
    IsPublic: true,
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = (param: RequestPostOrderModel) => {
    param.CreateAccountID = localStorage.getItem("ID")!;
    CreateOrder(param).then(() => {
      showMessage("新增訂單成功", toastBottomCenter, "success");
      closeDialog();
      reset();
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

  return (
    <>
      <Toast ref={toastBottomCenter} position="bottom-center" />
      <Dialog
        header="開團"
        visible={visible}
        className="w-8 md:w-6 lg:w-5 xl:w-3"
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

            <div>
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
            </div>

            <div>
              <ControlDropDown
                name="StoreID"
                control={control}
                rules={{ required: "必填欄位" }}
                options={data?.Data.Store!}
                optionLabel="Text"
                optionValue="ID"
                placeholder="選擇店家"
                errorKey={errors.StoreID}
              />
            </div>

            <div>
              <ControlDateTimePicker
                name="ArrivalTime"
                control={control}
                rules={{ required: "必填欄位" }}
                labelName="用餐時間"
              />
            </div>

            <div>
              <Controller
                name="OpenTime"
                control={control}
                rules={{ required: "必填欄位" }}
                render={({ field, fieldState }) => (
                  <Calendar
                    id={field.name}
                    value={field.value}
                    placeholder="開放時間"
                    dateFormat="yy-mm-dd"
                    hourFormat="24"
                    showTime
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
              <small className="p-error">{errors.OpenTime?.message}</small>
            </div>

            <div>
              <Controller
                name="CloseTime"
                control={control}
                rules={{ required: "必填欄位" }}
                render={({ field, fieldState }) => (
                  <Calendar
                    id={field.name}
                    value={field.value}
                    placeholder="結單時間"
                    dateFormat="yy-mm-dd"
                    hourFormat="24"
                    showTime
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
              <small className="p-error">{errors.CloseTime?.message}</small>
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
