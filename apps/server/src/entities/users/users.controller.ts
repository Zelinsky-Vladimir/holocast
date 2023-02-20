import { Controller, Post, Body } from '@nestjs/common';
import { User } from '@holocast/types';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Post('register')
  async register(@Body() user: User) {
    return this.usersService.register(user);
  }
}
