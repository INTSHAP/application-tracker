import JobItems from "../components/job/job-items";
import JobSearchBar from "../components/ui/jobs-search-bar";
import { useGetJobs } from "../services/job/job.hooks";

const JobsPage: React.FC = () => {
  const { data, isLoading } = useGetJobs();
  if (isLoading) return <h1>Loading ....</h1>;
  if (!data) {
    return (
      <div className="w-full justify-center items-center">
        <h1>There are no jobs yet</h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-5 justify-center items-center p-5 w-full md:w-3/5 mx-auto">
      <JobSearchBar />
      <JobItems jobs={data} />
    </div>
  );
};

export default JobsPage;
