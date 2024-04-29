import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  confirmPassword: string;
};

export type LoginFormData = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  confirmPassword: string;
};

export interface FormFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: ValidFieldNames;
  type: ValidFieldTypes;
  valueAsNumber?: boolean;
  register: UseFormRegister<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  error: FieldError;
  placeholder: string;
  label: string;
}

export type ValidFieldNames =
  | "email"
  | "password"
  | "firstname"
  | "lastname"
  | "confirmPassword"
  | "keyword"
  | "category"
  | "date_of_birth"
  | "year_of_graduation"
  | "skills"
  | "phonenumber"
  | "yearsofExperience"
  | "location"
  | "age";

export type ValidFieldTypes = "text" | "number" | "password" | "date" | "email";

interface OptionType {
  label: string;
  value: string | string[] | number;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: OptionType[];
}

export interface FormSelectFieldProps {
  name: ValidFieldNames;
  valueAsNumber?: boolean;
  register: UseFormRegister<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  error: FieldError;
  placeholder: string;
  label: string;
  multiple?: boolean;
  defaultValue: string | string[] | number;
  options: OptionType[];
}
