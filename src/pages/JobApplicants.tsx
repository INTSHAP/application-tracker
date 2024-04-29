// import { useParams } from "react-router-dom";

// const JobApplicants: React.FC = () => {
//   // To use the job ID to get applicants
//     const { jobId } = useParams();

//   return (
//     <div className="">
//       <div> Welcome (recreuitername)</div>
//       <div>(Company name) Applicants</div>

//       <div className="w-[85%] mx-auto">
// {dummyApplicants.map((applicant, index) => (
//         <div key={index} className="applicant-card">
//           <h2>{`${applicant.firstname} ${applicant.lastname}`}</h2>
//           <p>Email: {applicant.email}</p>
//           <p>Years of Experience: {applicant.yearsofExperience}</p>
//           <p>Location: {applicant.location}</p>
//           <p>Number: {applicant.number}</p>
//           <p>Password: {applicant.password}</p>
//           <p>CV: {applicant.cv}</p>
//           <p>Salt: {applicant.salt}</p>
//           <p>Active Jobs:</p>
//           <ul>
//             {applicant.activeJobsStage
//             .filter((stage) => stage.job === jobId)
//             .map((stage, index) => (
//             <li key={index}>
//               <p>Job: {stage.job}</p>
//               <p>Stage: {stage.stage}</p>
//             </li>
//   ))}
//           </ul>
//         </div>
//       ))}
//       </div>
//     </div>
//   );
// };

// export default JobApplicants;

import React, { useState } from "react";
import { useParams } from "react-router-dom";

const JobApplicants: React.FC = () => {
  const { jobId } = useParams();

  // Dummy data for demonstration
  const dummyApplicants = [
    {
      firstname: "John",
      lastname: "Doe",
      email: "john@example.com",
      password: "password123",
      cv: "john_cv.pdf",
      yearsofExperience: 5,
      salt: "abc123",
      location: "New York",
      number: 1234567890,
      activeJobsStage: [
        {
          job: "1",
          stage: "Applied",
        },
        {
          job: "job2_id",
          stage: "Interview",
        },
      ],
    },
    {
      firstname: "Jane",
      lastname: "Doe",
      email: "jane@example.com",
      password: "password456",
      cv: "jane_cv.pdf",
      yearsofExperience: 3,
      salt: "def456",
      location: "Los Angeles",
      number: 9876543210,
      activeJobsStage: [
        {
          job: "2",
          stage: "Offered",
        },
      ],
    },
    {
      firstname: "Alice",
      lastname: "Smith",
      email: "alice@example.com",
      password: "password789",
      cv: "alice_cv.pdf",
      yearsofExperience: 7,
      salt: "ghi789",
      location: "Chicago",
      number: 5555555555,
      activeJobsStage: [
        {
          job: "job3_id",
          stage: "Applied",
        },
        {
          job: "job4_id",
          stage: "Interview",
        },
        {
          job: "job5_id",
          stage: "Rejected",
        },
      ],
    },
  ];

  const [applicants, setApplicants] = useState(dummyApplicants);

  // Function to update the stage of an applicant
  const updateApplicantStage = (index: number, newStage: string) => {
    const updatedApplicants = [...applicants];
    updatedApplicants[index].activeJobsStage.forEach((stage) => {
      if (stage.job === jobId) {
        stage.stage = newStage;
      }
    });
    setApplicants(updatedApplicants);
  };

  return (
    <div className="">
      <div> Welcome (recreuitername)</div>
      <div>(Company name) Applicants</div>

      <div className="w-[85%] mx-auto">
        {applicants.map((applicant, index) => (
          <div
            key={index}
            className="flex my-10 border-red-600 border-2 rounded shadow-lg px-5 hover:bg-slate-100 duration-150 ease-out md:ease-in cursor-pointer "
          >
            <h2>{`${applicant.firstname} ${applicant.lastname}`}</h2>
            <p>Email: {applicant.email}</p>
            <p>Years of Experience: {applicant.yearsofExperience}</p>
            <p>Location: {applicant.location}</p>
            <p>Number: {applicant.number}</p>
            <p>Password: {applicant.password}</p>
            <p>CV: {applicant.cv}</p>
            <p>Salt: {applicant.salt}</p>
            <p>Active Jobs:</p>
            <ul>
              {applicant.activeJobsStage
                .filter((stage) => stage.job === jobId)
                .map((stage, index) => (
                  <li key={index}>
                    <p>Job: {stage.job}</p>
                    <p>
                      Stage:
                      <select
                        value={stage.stage}
                        onChange={(e) =>
                          updateApplicantStage(index, e.target.value)
                        }
                      >
                        <option value="Applied">Applied</option>
                        <option value="Interview">Interview</option>
                        <option value="Offered">Offered</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobApplicants;
