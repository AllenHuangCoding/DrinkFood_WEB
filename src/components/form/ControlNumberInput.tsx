import { classNames } from "primereact/utils";
import { Controller, FieldValues } from "react-hook-form";
import { ControlNumberProps } from "@/src/components/form/ControlFormType";
import { InputNumber } from "primereact/inputnumber";

const ControlNumberInput = <T extends FieldValues>({
  name,
  control,
  placeholder,
  rules,
  errorKey,
  min,
  max,
}: ControlNumberProps<T>) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: rules?.required }}
        render={({ field, fieldState }) => (
          <InputNumber
            id={field.name}
            value={field.value}
            placeholder={placeholder}
            min={min}
            max={max}
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
      <small className="p-error">{errorKey?.message}</small>
    </>
  );
};

export default ControlNumberInput;
