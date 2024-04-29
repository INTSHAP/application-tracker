import { useMutation } from "@tanstack/react-query";
import { useAuthFunctions } from "./api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { AuthContextType, LoginResponseType } from "../types/auth/login.types";

export const useLoginUser = (type: "admin" | "applicant") => {
  const { loginUser, loginAdminUser } = useAuthFunctions();
  const navigate = useNavigate();
  const { setToken, setUser } = useAuth() as AuthContextType;
  return useMutation({
    mutationFn: type === "admin" ? loginAdminUser : loginUser,
    onSuccess: (data: LoginResponseType) => {
      toast.success("Successfully logged in ");
      setToken(data.signature);
      setUser({ ...data, isAdmin: type === "admin" });
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useRegisterUser = (type: "admin" | "applicant") => {
  const { registerUser, registerAdminUser } = useAuthFunctions();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: type === "admin" ? registerAdminUser : registerUser,
    onSuccess: () => {
      toast.success("Successfully registered");
      navigate("/login");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });
};
