export interface LoginData {
  email: string;
  password: string;
}

export interface StudentRegistration {
  user: string;
  _id: string;
  semester: string;
  level: number;
  faculty: {
    name: string;
  };
  department: {
    name: string;
  };
}
export interface LoginResponseUser {
  firstname: string;
  lastname: string;
  email: string;
  isAdmin: boolean;
}

export interface LoginResponseType {
  firstname: string;
  lastname: string;
  email: string;
  isAdmin: boolean;
  signature: string;
}

export interface AuthContextType {
  token: string | null;
  user: LoginResponseUser | null;
  setToken: (newToken: string) => void;
  setUser: (newUser: LoginResponseUser | null) => void;
  setExpires: (newExpire: string) => void;
  logout: () => void;
}
