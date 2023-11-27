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
  filter = false,
}: ControlDropDwonProps<T>) => {
  return (
    <div className="flex flex-column w-full">
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
            filter={filter}
            className={classNames({
              "p-invalid": fieldState.invalid,
            })}
            onChange={(e) => {
              field.onChange(e.value);
            }}
          />
        )}
      />
      <small className="p-error">{errorKey?.message}</small>
    </div>
  );
};

export default ControlDropDown;
