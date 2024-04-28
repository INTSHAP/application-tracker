import { useForm } from "react-hook-form";
import {
  FormInputField,
  FormSelectInputField,
} from "./form-components/form-field";
import {
  JobSearchValidationType,
  job_search_validation_schema,
} from "../../schemas/job/job.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { categories } from "../../data/jobs";

export default function JobSearchBar() {
  const {
    register,
    formState: { errors },
  } = useForm<JobSearchValidationType>({
    resolver: yupResolver(job_search_validation_schema),
  });

  return (
    <form className="flex flex-col md:flex-row justify-center gap-5 md:gap-10 items-center my-5 w-full rounded-full">
      <FormSelectInputField
        register={register}
        options={categories}
        defaultValue={categories[0].value}
        error={errors.category!}
        placeholder=""
        label="Job Categroy"
        name="category"
      />

      <FormInputField
        type="text"
        register={register}
        placeholder="Job title"
        error={errors.keyword!}
        name="keyword"
        label="Job keyowrd/title"
      />
    </form>
  );
}
