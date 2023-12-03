import { classNames } from "primereact/utils";
import { Controller, FieldValues } from "react-hook-form";
import { ControlPasswordProps } from "@/src/components/form/ControlFormType";
import { Password } from "primereact/password";

const ControlPassword = <T extends FieldValues>({
  name,
  control,
  placeholder,
  rules,
  errorKey,
  className,
  inputClassName,
}: ControlPasswordProps<T>) => {
  return (
    <div className="flex flex-column w-full">
      <Controller
        name={name}
        control={control}
        rules={{ required: rules?.required }}
        render={({ field, fieldState }) => (
          <Password
            {...field}
            id={field.name}
            placeholder={placeholder}
            className={classNames(
              {
                "p-invalid": fieldState.invalid,
              },
              className
            )}
            inputClassName={inputClassName}
            toggleMask
            feedback={false}
          />
        )}
      />
      <small className="p-error">{errorKey?.message}</small>
    </div>
  );
};

export default ControlPassword;
