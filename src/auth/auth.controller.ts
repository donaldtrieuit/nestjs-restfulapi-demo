import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  HttpCode,
  Post,
  Request,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import {AuthService} from './auth.service';
import {LocalAuthGuard} from "./local-auth.guard";
import {RegisterUserDto} from "./dto/register.dto";
import {ApiBody} from "@nestjs/swagger";
import {LoginDto} from "./dto/login.dto";

@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('/token')
  @ApiBody({ type: LoginDto })
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('/register')
  async registerUser(@Body() registrationData: RegisterUserDto) {
    return await this.authService.register(registrationData)
  }
}
