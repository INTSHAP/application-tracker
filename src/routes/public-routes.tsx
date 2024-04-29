import AdminLanding from "../pages/AdminLanding";
import JobApplicationSuccessPage from "../pages/application-success";
import Dashboard from "../pages/dashboard";
import HomePage from "../pages/home";
import JobApplicationPage from "../pages/job-application";
import JobsPage from "../pages/jobs-list";

export const routesForPublic = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/apply/:jobId",
    element: <JobApplicationPage />,
  },
  {
    path: "/application-success",
    element: <JobApplicationSuccessPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/jobs",
    element: <JobsPage />,
  },
  {
    path: "/adminlanding",
    element: <AdminLanding />,
  },
];
