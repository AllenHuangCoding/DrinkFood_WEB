import { Controller, FieldValues } from "react-hook-form";
import { ControlCheckboxProps } from "@/src/components/form/ControlFormType";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import de from "date-fns/locale/de";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const ControlDateTimePicker = <T extends FieldValues>({
  name,
  control,
  rules,
  errorKey,
  labelName,
}: ControlCheckboxProps<T>) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
        <Controller
          name={name}
          control={control}
          rules={{ required: rules?.required }}
          render={({ field, fieldState }) => (
            <DateTimePicker
              value={field.value}
              label={labelName}
              format="yyyy/MM/dd HH:mm"
              className={"w-full"}
              onChange={(newValue) => field.onChange(newValue)}
              slotProps={{
                field: { clearable: true },
                textField: {
                  helperText: errorKey?.message,
                },
              }}
              sx={{
                "&:hover .MuiInputLabel-root": {
                  color: "blue",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "blue",
                },
                "&.Mui-focused .MuiInputLabel-root": {
                  color: "blue",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "blue",
                },
              }}
            />
          )}
        />
        <small className="p-error">{errorKey?.message}</small>
      </LocalizationProvider>
    </>
  );
};

export default ControlDateTimePicker;
