import { Link } from "react-router-dom";
import heroImage from "../../../images/person.png";
import jobImage from "../../../images/job.png";

const Hero: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex flex-col-reverse md:flex-row gap-10 justify-evenly items-center w-full md:min-h-screen p-5">
        <div className="m-full md:w-1/3 leading-9 flex flex-col gap-10">
          <h1 className="text-3xl md:text-5xl text-primary font-bold text-center md:text-left leading-[2rem]">
            Recruit the best talent in few clicks
          </h1>
          <Link
            className="bg-primary text-white rounded-md p-2 px-4"
            to={"/jobs"}
          >
            Get Started
          </Link>
        </div>
        <img
          src={heroImage}
          alt="hero"
          height={400}
          width={450}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse gap-10 justify-evenly bg-slate-300 items-center w-full md:min-h-screen p-5">
        <div className="m-full md:w-1/3 leading-9 flex flex-col gap-10">
          <h1 className="text-3xl md:text-5xl text-primary font-bold text-center md:text-left leading-[2rem]">
            Looking for job to apply?
          </h1>
          <Link
            className="bg-black text-white rounded-md p-2 px-4"
            to={"/jobs"}
          >
            Apply for jobs
          </Link>
        </div>
        <img
          src={jobImage}
          alt="hero"
          height={400}
          width={450}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
