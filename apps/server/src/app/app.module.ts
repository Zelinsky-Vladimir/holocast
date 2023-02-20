import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from '../entities/auth/auth.module';
import { UsersModule } from '../entities/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule
  ],
})
export class AppModule { }
