import { useForm } from "react-hook-form";
import {
  FormInputField,
  FormSelectInputField,
} from "../ui/form-components/form-field";
import {
  JobApplicationValidationSchemaType,
  job_applicationg_validation_schema,
} from "../../schemas/job/job.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { skills, years } from "../../data/jobs";
import { Form, useNavigate } from "react-router-dom";
import cn from "../../libs/styles";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import SkillList from "../ui/skill-list";

export default function JobApplicationForm() {
  const navigate = useNavigate();
  const [seletedSkills, setSelectedSkills] = useState<string[]>([]);

  const {
    register,
    formState: { errors, isValid },
    watch,
    handleSubmit,
  } = useForm<JobApplicationValidationSchemaType>({
    resolver: yupResolver(job_applicationg_validation_schema),
  });

  const updateSkills = () => {
    const skillItem = watch("skills");
    if (seletedSkills.includes(skillItem)) return;
    seletedSkills.push(skillItem);
  };

  useEffect(() => {
    updateSkills(); //eslint-disable-next-line
  }, [watch("skills")]);

  const removedSkill = (skillTitle: string) => {
    const filteredSkills = seletedSkills.filter(
      (skill) => skill.toLowerCase() !== skillTitle.toLowerCase(),
    );
    setSelectedSkills(filteredSkills);
  };
  const onSubmit = async (data: JobApplicationValidationSchemaType) => {
    console.log(data);
    navigate("/application-success");
  };
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("gap-6 w-full md:w-2/3")}
    >
      <div className="flex flex-col gap-2 md:flex-row md:gap-6 items-center w-full">
        <FormInputField
          name="firstname"
          label="First name"
          register={register}
          placeholder="Enter first name"
          type="text"
          error={errors.firstname!}
        />
        <FormInputField
          name="lastname"
          label="Last name"
          register={register}
          placeholder="Enter last name"
          type="text"
          error={errors.lastname!}
        />
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:gap-6 items-center w-full">
        <FormInputField
          name="email"
          label="Email"
          register={register}
          placeholder="Enter email"
          type="email"
          error={errors.email!}
        />
        <FormInputField
          name="phonenumber"
          label="Phone number"
          register={register}
          placeholder="Enter phone number"
          type="text"
          error={errors.phonenumber!}
        />
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:gap-6 items-center w-full">
        <FormSelectInputField
          name="year_of_graduation"
          label="Year Of Graduation"
          register={register}
          placeholder="Year"
          error={errors.year_of_graduation!}
          options={years}
          defaultValue={years[0].value}
        />
        <FormInputField
          name="date_of_birth"
          label="Date Of Birth"
          register={register}
          placeholder="Date of birth"
          error={errors.date_of_birth!}
          type="date"
        />
      </div>
      <FormSelectInputField
        register={register}
        name="skills"
        placeholder="Select skills"
        options={skills}
        defaultValue={skills[0].value}
        label="Skills"
        error={errors.skills!}
      />
      {seletedSkills && (
        <SkillList removedSkill={removedSkill} skills={seletedSkills} />
      )}
      <div className="flex items-center justify-between w-full p-0 md:p-10">
        <Link
          to={"/jobs"}
          className="p-2 px-8 bg-black text-white rounded-full"
        >
          Go back
        </Link>
        <Button
          text="Submit"
          type="submit"
          variant={!isValid ? "secondary" : "default"}
          className="rounded-full px-8"
          //   disabled={!isValid}
        />
      </div>
    </Form>
  );
}
