export enum UserRole {
  admin,
  user,
}

export type User = {
  id: string;
  username: string;
  password: string;
  email?: string;
  role: UserRole;
};
