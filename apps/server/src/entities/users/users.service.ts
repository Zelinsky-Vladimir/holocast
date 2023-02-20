import { Injectable } from '@nestjs/common';
import { User, UserRole } from '@holocast/types';

import { DatabaseService } from '../../shared/database/database.service';

@Injectable()
export class UsersService {
  constructor(
    private databaseService: DatabaseService
  ) {}

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

  async register({ id, password, email, username }: User) {
    const user = await this.databaseService.user.create({
      data: {
        id,
        password,
        email,
        username,
      },
    });

    return user;
  }
}
