import * as yup from "yup";

export const signup_validation_schema = yup.object({
  email: yup.string().email().required("Required"),
  password: yup
    .string()
    .min(6, "Must be at least 8 characters")
    .required("Password required")
    .matches(/[a-z]+/, "Must contain atleast one lowercase character")
    .matches(/\d+/, "Must contain atleast one digit"),
  confirmPassword: yup
    .string()
    .required("Confirm password required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  firstname: yup.string().required("Required"),
  lastname: yup.string().required("Required"),
  phonenumber: yup.string().required("Required"),
  location: yup.string().required("Required"),
  yearsofExperience: yup.string().required("Required"),
});

export const admin_signup_validation_schema = yup.object({
  email: yup.string().email().required("Required"),
  password: yup
    .string()
    .min(6, "Must be at least 8 characters")
    .required("Password required")
    .matches(/[a-z]+/, "Must contain atleast one lowercase character")
    .matches(/\d+/, "Must contain atleast one digit"),
  confirmPassword: yup
    .string()
    .required("Confirm password required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  firstname: yup.string().required("Required"),
  lastname: yup.string().required("Required"),
});

export type SignupValidationSchemaType = yup.InferType<
  typeof signup_validation_schema
>;

export type AdminSignupValidationSchemaType = yup.InferType<
  typeof admin_signup_validation_schema
>;
