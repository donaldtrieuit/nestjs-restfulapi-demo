import {ClassSerializerInterceptor, Controller, Get, Request, UseGuards, UseInterceptors} from '@nestjs/common';
import {UsersService} from './users.service';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {ApiBearerAuth} from "@nestjs/swagger";

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiBearerAuth('access-token')
  async getProfile(@Request() req) {
    const {password, ...result} = await this.usersService.findOneByUsername(req.user.username)
    return result;
  }
}
