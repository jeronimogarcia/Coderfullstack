import { IUser } from "../types/User";

export const checkUser = async (userContext: IUser) => {
  if (!userContext) {
    window.location.href = "/login";
  }
};
