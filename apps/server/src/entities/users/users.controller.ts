import { Controller, Post, Body, Get, Delete, Param, Patch } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Post('register')
  async register(@Body() userDto: CreateUserDto) {
    return this.usersService.create(userDto);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Get()
  async getAllUsers() {
    return this.usersService.findAll();
  }

  @Patch(':id')
  async updateUserById(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.updateUserById(id, body);
  }

  @Delete(':id')
  async deleteUserById(@Param('id') id: string) {
    return this.usersService.removeUserById(id);
  }
}

