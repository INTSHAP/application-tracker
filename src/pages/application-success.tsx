import { Link } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";

const JobApplicationSuccessPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center w-full">
      <div className="w-full mx-auto flex flex-col gap-10 items-center justify-center md:w-1/2 rounded-lg shadow-md absolute top-20 bg-white/70 p-5 md:p-10">
        <FaCircleCheck className="text-7xl text-primary" />
        <h1 className="font-bold text-2xl text-primary">
          Job Application Success
        </h1>
        <p>Your application was successfully submitted. Thank you</p>

        <Link
          to={`/dashboard`}
          className="p-2 px-8 bg-primary text-white rounded-full w-full md:w-1/3"
        >
          Done
        </Link>
      </div>
    </div>
  );
};

export default JobApplicationSuccessPage;
