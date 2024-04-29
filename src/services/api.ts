import { RequestError } from "../types/auth/error.types";
import { User } from "../libs/types";
import { LoginData } from "../types/auth/login.types";
import { AxiosResponse } from "axios";
import { useAxios } from "../context/axios-context";
import { AxiosContextType } from "../types/axios/index.types";
import {
  AdminSignupValidationSchemaType,
  SignupValidationSchemaType,
} from "../schemas/authentication/signup.schema";

export const useAuthFunctions = () => {
  const { axiosPublicInstance: axiosInstance } = useAxios() as AxiosContextType;
  return {
    loginUser: async (data: LoginData) => {
      return await axiosInstance
        .post<User>("applicant/login", data)
        .then((res: AxiosResponse) => res.data)
        .catch((err: RequestError) => {
          throw new Error(err.response?.data.message);
        });
    },
    loginAdminUser: async (data: LoginData) => {
      return await axiosInstance
        .post<User>("admin/login", data)
        .then((res: AxiosResponse) => res.data)
        .catch((err: RequestError) => {
          throw new Error(err.response?.data.message);
        });
    },
    registerUser: async (data: SignupValidationSchemaType) => {
      return await axiosInstance
        .post<User>("/applicant/signup", data)
        .then((res: AxiosResponse) => res.data)
        .catch((err: RequestError) => {
          console.log(err);
          throw new Error(err.response?.data.msg);
        });
    },
    registerAdminUser: async (data: AdminSignupValidationSchemaType) => {
      return await axiosInstance
        .post<User>("/admin/createAdmin", data)
        .then((res: AxiosResponse) => res.data)
        .catch((err: RequestError) => {
          throw new Error(err.response?.data.msg);
        });
    },
  };
};
