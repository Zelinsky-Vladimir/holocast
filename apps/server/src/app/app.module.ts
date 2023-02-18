import { Module } from '@nestjs/common';

import { CatsModule } from '../entities/cats/cats.module';
import { AuthModule } from '../entities/auth/auth.module';

@Module({
  imports: [CatsModule, AuthModule],
})
export class AppModule {}
