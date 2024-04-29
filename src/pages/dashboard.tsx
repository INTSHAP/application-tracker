import { useAuth } from "../context/auth-context";
import { AuthContextType } from "../types/auth/login.types";

export default function Dashboard() {
  const { user, logout } = useAuth() as AuthContextType;
  return (
    <div className="flex flex-col gap-4 items-center p-5">
      <div className="rounded-md bg-primary text-white p-5">
        <h1>Hi {user?.firstname + " " + user?.lastname}</h1>
        <p>{user?.isAdmin ? "Amin User" : "Applicant user"}</p>
      </div>
      <hr />
      <button onClick={logout}>Logout</button>
    </div>
  );
}
