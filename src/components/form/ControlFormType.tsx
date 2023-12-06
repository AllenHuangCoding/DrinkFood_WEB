import {
  Control,
  FieldError,
  FieldPath,
  FieldValues,
  ValidationRule,
  ValidationValueMessage,
} from "react-hook-form";

export type ControlFormProps<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  errorKey: FieldError | undefined;
  rules?: {
    required?: string | undefined;
    pattern?: ValidationRule<RegExp> | undefined;
  };
  placeholder?: string | undefined;
  disabled?: boolean;
  className?: string;
};

export type ControlDropDwonProps<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  errorKey: FieldError | undefined;
  rules?: {
    required?: string | undefined;
    pattern?: ValidationValueMessage | undefined;
  };
  placeholder?: string | undefined;
  options: any[];
  optionLabel: string;
  optionValue: string;
  filter?: boolean;
  disabled?: boolean;
};

export type ControlNumberProps<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  errorKey: FieldError | undefined;
  rules?: {
    required?: string | undefined;
    pattern?: ValidationValueMessage | undefined;
  };
  placeholder?: string | undefined;
  min: number;
  max: number;
};

export type ControlCheckboxProps<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  errorKey?: FieldError | undefined;
  rules?: {
    required?: string | undefined;
    pattern?: ValidationValueMessage | undefined;
  };
  labelName: string;
};

export type ControlPasswordProps<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  errorKey: FieldError | undefined;
  rules?: {
    required?: string | undefined;
    pattern?: ValidationValueMessage | undefined;
  };
  placeholder?: string | undefined;
  className?: string;
  inputClassName?: string;
};
