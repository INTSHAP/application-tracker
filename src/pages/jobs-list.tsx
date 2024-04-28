import JobItems from "../components/job/job-items";
import JobSearchBar from "../components/ui/jobs-search-bar";
import { jobs } from "../data/jobs";

const JobsPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center p-5 w-full md:w-3/5 mx-auto">
      <JobSearchBar />
      <JobItems jobs={jobs} />
    </div>
  );
};

export default JobsPage;
