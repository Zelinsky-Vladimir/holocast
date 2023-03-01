
import { Injectable, BadRequestException } from '@nestjs/common';
import { User } from '@holocast/types';

import { CreateUserDto } from './dto/create-user.dto'
import { DatabaseService } from '../../shared/database/database.service';
import { UpdateUserDto } from './dto/update-user.dto';

const returnedFields = {
  id: true,
  email: true,
  nickname: true,
  role: true,
  createdAt: true
}

@Injectable()
export class UsersService {
  constructor(
    private databaseService: DatabaseService
  ) { }

  async findOne(id: string): Promise<User | undefined> {
    return this.databaseService.user.findFirstOrThrow({
      where: { id }, select: returnedFields
    });
  }

  async findAll() {
    return this.databaseService.user.findMany({
      select: returnedFields
    });
  }

  async create({ password, email, nickname }: CreateUserDto) {
    const existingUser = await this.databaseService.user.findFirst({
      where: { email },
      select: { id: true }
    })

    if (existingUser) {
      throw new BadRequestException('User with such email already exists');
    }

    const user = await this.databaseService.user.create({
      data: {
        password,
        email,
        nickname,
      },
    });

    return user.id;
  }

  async updateUserById(id: string, body: UpdateUserDto) {
    return this.databaseService.user.update({
      where: { id },
      data: body,
      select: returnedFields
    })
  }

  async removeUserById(id: string) {
    return this.databaseService.user.delete({ where: { id }, select: returnedFields })
  }
}
