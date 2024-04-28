import { useAuth } from "../context/auth-context";
import { AuthContextType } from "../types/auth/login.types";
import { routesForAuthenticatedOnly } from "./protected-routes";
import { routesForPublic } from "./public-routes";
import { routesForNotAuthenticatedOnly } from "./unthenticated-only-routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavbarWrapper } from "../components/ui/nav/nav-bar";

// Combine and conditionally include routes based on authentication status
const Routes = () => {
  const { token } = useAuth() as AuthContextType;

  // merge all routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavbarWrapper />,
      children: [
        ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...(token ? routesForAuthenticatedOnly : []),
      ],
    },
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
