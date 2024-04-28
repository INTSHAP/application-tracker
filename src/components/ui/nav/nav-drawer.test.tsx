import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../../../context/auth-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavDrawer from "./nav-drawer";
import AxiosProvider from "../../../context/axios-context";

test("Navigation drawer renders correctly", () => {
  const client = new QueryClient();
  render(
    <QueryClientProvider client={client}>
      <AuthProvider>
        <AxiosProvider>
          <BrowserRouter>
            <NavDrawer />
          </BrowserRouter>
        </AxiosProvider>
      </AuthProvider>
    </QueryClientProvider>,
  );

  //   const logoutButton = screen.getByRole("button")
  //   expect(logoutButton).toBeInTheDocument();
  //   const heading = screen.getByRole("heading");
  //   expect(heading).toBeInTheDocument();
  const navElement = screen.getByRole("navigation");
  expect(navElement).toBeInTheDocument();
});
