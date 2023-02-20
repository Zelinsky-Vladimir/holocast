import { Controller, Get, Request, Post, Body, UseGuards } from '@nestjs/common';
import { User } from '@holocast/types';

import { JwtAuthGuard } from '../../guards/jwtAuth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  async login(@Body() user: User) {
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
