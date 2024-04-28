import * as yup from "yup";

export const job_search_validation_schema = yup.object({
  category: yup.string().required("Required"),
  keyword: yup.string().required("Required"),
});

export type JobSearchValidationType = yup.InferType<
  typeof job_search_validation_schema
>;

export const job_applicationg_validation_schema = yup.object({
  firstname: yup.string().required("Required"),
  lastname: yup.string().required("Required"),
  phonenumber: yup.string().required("Required"),
  email: yup.string().email().required("Required"),
  date_of_birth: yup.string().required("Required"),
  year_of_graduation: yup.number().required("Required"),
  skills: yup.string().required("Required"),
});

export type JobApplicationValidationSchemaType = yup.InferType<
  typeof job_applicationg_validation_schema
>;
