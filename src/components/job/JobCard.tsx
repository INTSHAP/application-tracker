import { JobType } from "../../types/job/job.types";

const JobCard = ({ jobs }: { jobs: JobType[] }) => {
  return (
    <div className="">
      <div> Welcome (recreuitername)</div>

      <div className="job-list w-[85%] mx-auto">
        {jobs.map((job: JobType, index: number) => (
          <div
            key={index}
            className="my-10 border-red-700 border- rounded shadow-lg px-5 hover:bg-slate-100 duration-150 ease-out md:ease-in cursor-pointer"
          >
            <div className="flex gap-3 justify-between py-2">
              <p className="text-sm font-semibold">{job.company}</p>
              <h2 className="text-sm">
                {" "}
                <span className="text-gray-500">Role: </span>
                {job.title}
              </h2>
              <p className="text-sm">
                <span className="text-gray-500">Location:</span> {job.location}
              </p>
              <p className="text-sm">
                <span className="text-gray-500">Min Experience:</span>{" "}
                {job.minExperience} years
              </p>
              <p className="text-sm">
                <span className="text-gray-500">Pay:</span> ${job.pay}
              </p>
              <p className="text-sm">{job.nature}</p>
            </div>

            <div className="flex gap-3 justify-between py-2">
              <p className="text-sm whitespace-nowrap">
                <span className="text-gray-500">ID:</span> {job.jobId}
              </p>

              <p className="text-sm whitespace-nowrap">
                <span className="text-gray-500">Posted</span> {job.opening_date}
              </p>
              <p className="text-sm whitespace-nowrap">
                <span className="text-gray-500">Deadline</span>{" "}
                {job.closing_date}
              </p>
              <p className="text-sm">
                <span className="text-gray-500">Skills Required:</span>{" "}
                {job.skills_required.join(", ")}
              </p>
              <p className="text-sm">
                <span className="text-gray-500">
                  Skills Number of Applicants:
                </span>{" "}
                {job.applicants.length}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
