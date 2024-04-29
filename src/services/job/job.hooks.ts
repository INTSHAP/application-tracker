import { useQuery } from "@tanstack/react-query";
import { useGetJobFunctions } from "./api";

export const useGetJobs = () => {
  const { getJobs } = useGetJobFunctions();
  return useQuery({
    queryFn: getJobs,
    refetchOnWindowFocus: false,
    queryKey: ["jobs"],
  });
};

export const useGetSingleJob = (jobId: string) => {
  const { getSingleJob } = useGetJobFunctions();
  return useQuery({
    queryFn: () => {
      return getSingleJob(jobId);
    },
    refetchOnWindowFocus: false,
    queryKey: ["jobs", jobId],
  });
};
