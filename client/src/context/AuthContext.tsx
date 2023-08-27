import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { IUser } from "../types/User";

interface AuthContext {
  userContext: IUser;
  setUserContext: Dispatch<SetStateAction<IUser>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [userContext, setUserContext] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    if (token) setToken(token);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userContext,
        setUserContext,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
