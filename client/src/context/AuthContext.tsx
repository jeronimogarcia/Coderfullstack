import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { IUser } from "../types/User";
import axios from "axios";

interface AuthContext {
  userContext: IUser;
  setUserContext: Dispatch<SetStateAction<IUser>>;
}

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [userContext, setUserContext] = useState(null);

  const getUser = async () => {
    const token = localStorage.getItem("TOKEN");
    try {
      const user = await axios.get(
        `http://localhost:5000/users/token/${token}`
      );
      setUserContext(user.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userContext,
        setUserContext,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
