import { Injectable } from '@nestjs/common';
import { User, UserRole } from '@holocast/types';
// This should be a real class/interface representing a user entity

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: '1',
      username: 'john',
      password: 'changeme',
      email: 'test@gmail.com',
      role: UserRole.admin,
    },
    {
      id: '2',
      username: 'maria',
      password: 'guess',
      email: 'test@gmail.com',
      role: UserRole.user,
    },
  ];

  async findOne(id: string): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }
}
