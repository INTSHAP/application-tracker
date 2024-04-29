"use client";

import { useForm } from "react-hook-form";
import { FormInputField } from "../../ui/form-components/form-field";
import { Button } from "../../ui/button";
import {
  AdminSignupValidationSchemaType,
  SignupValidationSchemaType,
  signup_validation_schema,
} from "../../../schemas/authentication/signup.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../../ui/form";
import { useRegisterUser } from "../../../services/auth.hooks";
import { useState } from "react";
import clsx from "clsx";

export default function SignupForm() {
  const [signupType, setSignupType] = useState<"admin" | "applicant">("admin");
  const { mutate, isPending } = useRegisterUser(signupType);
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
  } = useForm<SignupValidationSchemaType>({
    resolver: yupResolver(signup_validation_schema),
  });

  const onSubmit = async (
    data: SignupValidationSchemaType | AdminSignupValidationSchemaType,
  ) => {
    mutate(data as SignupValidationSchemaType);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="md:w-1/3">
      <div className="flex justify-between items-center my-2 w-full">
        <Button
          type="button"
          onClick={() => setSignupType("admin")}
          text="As Recruiter"
          className={clsx("bg-slate-200", {
            "bg-primary": signupType === "admin",
          })}
        />
        <Button
          type="button"
          onClick={() => setSignupType("applicant")}
          text="As Applicant"
          className={clsx("bg-slate-200", {
            "bg-primary": signupType === "applicant",
          })}
        />
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:gap-6 items-center w-full">
        <FormInputField
          name="firstname"
          label="First name"
          register={register}
          placeholder="Enter your first name"
          type="text"
          error={errors.firstname!}
        />
        <FormInputField
          name="lastname"
          label="Last name"
          register={register}
          placeholder="Enter your last name"
          type="text"
          error={errors.lastname!}
        />
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:gap-6 items-center w-full">
        <FormInputField
          name="email"
          label="Email"
          register={register}
          placeholder="Enter your email"
          type="text"
          error={errors.email!}
        />
        {signupType === "applicant" && (
          <FormInputField
            name="phonenumber"
            label="phone number"
            register={register}
            placeholder="Enter phone number"
            type="text"
            error={errors.phonenumber!}
          />
        )}
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:gap-6 items-center w-full">
        <FormInputField
          name="password"
          label="Password"
          register={register}
          placeholder="Enter your password"
          type="password"
          error={errors.password!}
        />
        <FormInputField
          name="confirmPassword"
          label="Confirm password"
          register={register}
          placeholder="Enter your password"
          type="password"
          error={errors.confirmPassword!}
        />
      </div>
      {signupType === "applicant" && (
        <div className="flex flex-col gap-2 md:flex-row md:gap-6 items-center w-full">
          <FormInputField
            name="yearsofExperience"
            label="Years of Experience"
            register={register}
            placeholder="Enter experience"
            type="text"
            error={errors.yearsofExperience!}
          />
          <FormInputField
            name="location"
            label="Location"
            register={register}
            placeholder="Enter your location"
            type="text"
            error={errors.location!}
          />
        </div>
      )}

      <Button
        text={isPending ? `Signing up as ${signupType} ...` : "Sign up"}
        type="submit"
        variant={!isValid || isPending ? "secondary" : "default"}
        className="w-full"
        disabled={isPending}
      />
    </Form>
  );
}
