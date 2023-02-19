import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';

import { CatsModule } from '../entities/cats/cats.module';
import { AuthModule } from '../entities/auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CatsModule, ConfigModule.forRoot({ isGlobal: true }), AuthModule, PrismaModule],
})
export class AppModule {}
