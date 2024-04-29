export interface JobType {
  title: string;
  nature: string;
  company: string;
  company_location: string;
  location: string;
  pay: number;
  opening_date: string;
  closing_date: string;
  skills_required: string[];
  jobId: string;
  minExperience: number;
  applicants: string[];
  _id: string;
}

export interface JobResponseType {
  title: string;
  nature: string;
  company: string;
  company_location: string;
  location: string;
  pay: number;
  opening_date: string;
  closing_date: string;
  skills_required: string[];
  jobId: string;
  minExperience: number;
  applicants: string[];
  _id: string;
}
