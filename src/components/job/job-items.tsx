import { JobType } from "../../types/job/job.types";
import Job from "./job";

export default function ({ jobs }: { jobs: JobType[] }) {
  return (
    <ul className="list-none p-0 m-0 gap-5 flex flex-col w-full">
      {jobs.map((job, index) => (
        <Job key={index} {...job} />
      ))}
    </ul>
  );
}
