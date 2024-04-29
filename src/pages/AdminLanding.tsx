import { Link } from "react-router-dom";

const dummyJobs = [
  {
    id: 1,
    company: "Acme Corporation",
    title: "Software Engineer",
    location: "San Francisco, CA",
    minExperience: 3,
    pay: 100000,
    jobId: "JOB123456",
    nature: "Full-time",
    opening_date: "2024-04-15",
    closing_date: "2024-05-15",
    skills_required: ["JavaScript", "React", "Node.js"],
    applicants: [],
  },
  {
    id: 2,
    company: "Tech Innovations Ltd",
    title: "Data Scientist",
    location: "New York, NY",
    minExperience: 5,
    pay: 120000,
    jobId: "JOB987654",
    nature: "Remote",
    opening_date: "2024-04-18",
    closing_date: "2024-05-18",
    skills_required: ["Python", "Machine Learning", "Data Analysis"],
    applicants: [],
  },
  {
    id: 3,
    company: "Global Logistics Inc",
    title: "Logistics Manager",
    location: "London, UK",
    minExperience: 7,
    pay: 80000,
    jobId: "JOB567890",
    nature: "Contract",
    opening_date: "2024-04-20",
    closing_date: "2024-05-20",
    skills_required: [
      "Supply Chain Management",
      "Inventory Control",
      " Management",
    ],
    applicants: [],
  },
];

const AdminLanding: React.FC = () => {
  return (
    <div className="">
      <div> Welcome (recreuitername)</div>

      <div className="job-list w-[85%] mx-auto">
        {dummyJobs.map((job, index) => (
          <Link to={`/jobapplicants/${job.id}`}>
            <div
              key={index}
              className="my-10 border-red-600 border-2 rounded shadow-lg px-5 hover:bg-slate-100 duration-150 ease-out md:ease-in cursor-pointer"
            >
              <div className="flex gap-3 justify-between py-2">
                <p className="text-sm font-semibold">{job.company}</p>
                <h2 className="text-sm">
                  {" "}
                  <span className="text-gray-500">Role: </span>
                  {job.title}
                </h2>
                <p className="text-sm">
                  <span className="text-gray-500">Location:</span>{" "}
                  {job.location}
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
                  <span className="text-gray-500">Posted</span>{" "}
                  {job.opening_date}
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminLanding;
