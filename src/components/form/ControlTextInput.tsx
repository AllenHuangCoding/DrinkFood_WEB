import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { Controller, FieldValues } from "react-hook-form";
import { ControlFormProps } from "@/src/components/form/ControlFormType";

const ControlTextInput = <T extends FieldValues>({
  name,
  control,
  placeholder,
  rules,
  errorKey,
}: ControlFormProps<T>) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: rules?.required }}
        render={({ field, fieldState }) => (
          <InputText
            {...field}
            id={field.name}
            placeholder={placeholder}
            className={classNames(
              {
                "p-invalid": fieldState.invalid,
              },
              "w-full"
            )}
          />
        )}
      />
      <small className="p-error">{errorKey?.message}</small>
    </>
  );
};

export default ControlTextInput;
