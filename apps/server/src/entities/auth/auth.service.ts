import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from '@holocast/types';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prismaService: PrismaService
  ) {}

  // async validateUser(username: string, pass: string): Promise<any> {
  //   const user = await this.usersService.findOne(username);

  //   if (user && user.password === pass) {
  //     const { password, ...result } = user;
  //     return result;
  //   }

  //   return null;
  // }

  async register({ id, password, email, username }: User) {
    const user = await this.prismaService.user.create({
      data: {
        id,
        password,
        email,
        username,
      },
    });

    return user;
  }

  async login({ username, id }: User) {
    const payload = { username, sub: id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
