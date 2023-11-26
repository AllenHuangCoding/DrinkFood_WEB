import { classNames } from "primereact/utils";
import { Controller, FieldValues } from "react-hook-form";
import { ControlDropDwonProps } from "@/src/components/form/ControlFormType";
import { Dropdown } from "primereact/dropdown";

const ControlDropDown = <T extends FieldValues>({
  name,
  control,
  placeholder,
  rules,
  errorKey,
  options,
  optionLabel,
  optionValue,
}: ControlDropDwonProps<T>) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: rules?.required }}
        render={({ field, fieldState }) => (
          <Dropdown
            id={field.name}
            value={field.value}
            options={options}
            optionLabel={optionLabel}
            optionValue={optionValue}
            placeholder={placeholder}
            className={classNames(
              {
                "p-invalid": fieldState.invalid,
              },
              "w-full"
            )}
            onChange={(e) => {
              field.onChange(e.value);
            }}
          />
        )}
      />
      <small className="p-error">{errorKey?.message}</small>
    </>
  );
};

export default ControlDropDown;
