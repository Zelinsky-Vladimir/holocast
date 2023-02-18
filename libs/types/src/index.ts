export enum UserRole {
  admin,
  user,
}

export type User = {
  id: string;
  username: string;
  email?: string;
  password: string;
  role: UserRole;
};
