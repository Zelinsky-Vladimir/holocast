import { Controller, Get, Post, Body } from '@nestjs/common';

import { CatsService } from './cats.service';
import { Cat } from './interfaces';
import { CreateCatDto } from './dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
