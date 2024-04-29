import { User } from "../../libs/types";

export interface JobType {
  title: string;
  nature: string;
  salary: string;
  company: string;
  company_location: string;
  location: string;
  pay: string;
  company_country: string;
  opening_date: string;
  closing_date: string;
  skills_required: string[];
  id: string;
  jobId: string;
  minExperience: string;

  applicants: User[];
}
