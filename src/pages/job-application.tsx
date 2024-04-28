import { Link, useNavigate, useParams } from "react-router-dom";
import { jobs } from "../data/jobs";
import { JobType } from "../types/job/job.types";
import { useEffect, useState } from "react";
import Job from "../components/job/job";
import JobApplicationForm from "../components/job/application-form";

const JobApplicationPage: React.FC = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState<JobType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!jobId) {
      navigate("/jobs");
    }
    const filteredJob = jobs.filter((job) => job.id === jobId)[0];
    setJob(filteredJob); //eslint-disable-next-line
  }, [jobId]);

  if (!job)
    return (
      <div className="w-full justify-center items-center">
        <h1>Job not found</h1>
        <Link to={"/jobs"} className="bg-primary p-2 px-8 text-white rounde-md">
          Back to Job List
        </Link>
      </div>
    );
  return (
    <div className="flex flex-col gap-5 justify-center items-center p-5 w-full md:w-3/5 mx-auto pb-20">
      <h1 className="text-center text-primary text-xl font-semibold border-b-4 border-primary pb-3">
        Job Appplication
      </h1>
      <Job {...job} />
      <JobApplicationForm />
    </div>
  );
};

export default JobApplicationPage;
