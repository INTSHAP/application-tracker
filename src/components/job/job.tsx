import { FaBuilding, FaLocationDot } from "react-icons/fa6";
import { JobType } from "../../types/job/job.types";
import { Link, useLocation } from "react-router-dom";

export default function Job({
  id,
  title,
  salary,
  closing_date,
  company,
  opening_date,
  company_country,
  company_location,
  nature,
  skills_required,
}: JobType) {
  const { pathname } = useLocation();
  return (
    <article className="flex flex-col gap-3 border-slate-200 border-[1px] w-full p-5 md:p-10">
      <h3 className="font-semibold text-primary">{title}</h3>
      <div className="flex  justify-between md:justify-start gap-5 items-center">
        <p className="p-2 px-4 bg-slate-100 rounded-md">{salary}</p>
        <p className="p-2 px-4 bg-slate-100 rounded-md">{nature}</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-3 items-center">
        <div className="flex items-center justify-start gap-1">
          <FaBuilding className="text-3xl text-primary" />
          <p>{company}</p>
        </div>
        <div className="flex items-center justify-start gap-1">
          <FaLocationDot className="text-3xl text-primary" />
          <p>{company_location}</p>,<p>{company_country}</p>
        </div>
      </div>
      <div className="flex flex-wrap p-2 bg-slate-50">
        <p>Skills:</p>
        <ul className="flex items-center gap-2 flex-wrap">
          {skills_required.map((skill) => (
            <li className="text-primary bg-white rounded-full px-2">{skill}</li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center">
        <small>
          opened on <span className="text-primary">{opening_date}</span>
        </small>
        <small>
          closes on <span className="text-primary">{closing_date}</span>
        </small>
      </div>
      {!pathname.includes("/apply") && (
        <Link
          to={"/apply/" + id}
          className="border-primary border-[1px] p-2 px-8 rounded-md w-full md:w-2/3 mx-auto mt-5 hover:bg-slate-200 bg-white"
        >
          Apply
        </Link>
      )}
    </article>
  );
}
