import { Controller, FieldValues } from "react-hook-form";
import { ControlCheckboxProps } from "@/src/components/form/ControlFormType";
import { Checkbox } from "primereact/checkbox";

const ControlCheckbox = <T extends FieldValues>({
  name,
  control,
  rules,
  errorKey,
  labelName,
}: ControlCheckboxProps<T>) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: rules?.required }}
        render={({ field, fieldState }) => (
          <div className="flex gap-2">
            <Checkbox
              inputId={field.name}
              onChange={(e) => field.onChange(e.checked)}
              checked={field.value}
            />
            <label htmlFor={field.name}>{labelName}</label>
          </div>
        )}
      />
      <small className="p-error">{errorKey?.message}</small>
    </>
  );
};

export default ControlCheckbox;
