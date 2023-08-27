export interface IUser {
  _id: string;
  email: string;
  firstName: number;
  lastName: string;
  role: UserRole;
  created: string;
}

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}
