import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from '@holocast/types';

import { UsersService } from '../users/users.service';
import { DatabaseService } from '../../shared/database/database.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private databaseService: DatabaseService

  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login({ email, id }: User) {
    const payload = { email, sub: id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
