export type UserRole = 'ADMIN' | 'USER'

export type User = {
  id: string;
  nickname: string;
  email: string;
  role: UserRole;
  createdAt: Date
};
