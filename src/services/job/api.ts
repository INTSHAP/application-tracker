import { AxiosResponse } from "axios";
import { useAxios } from "../../context/axios-context";
import { RequestError } from "../../types/auth/error.types";
import { AxiosContextType } from "../../types/axios/index.types";
import { JobResponseType } from "../../types/job/job.types";

export const useGetJobFunctions = () => {
  const { axiosProtectedInstance: axiosInstance } =
    useAxios() as AxiosContextType;
  return {
    getJobs: async () => {
      return await axiosInstance
        .get("/applicant/alljobs")
        .then((res: AxiosResponse<JobResponseType[]>) => res.data)
        .catch((err: RequestError) => {
          throw new Error(err.response?.data.msg);
        });
    },
    getSingleJob: async (id: string) => {
      return await axiosInstance
        .get(`/applicant/job/${id}`)
        .then((res: AxiosResponse<JobResponseType>) => res.data)
        .catch((err: RequestError) => {
          throw new Error(err.response?.data.msg);
        });
    },
  };
};
