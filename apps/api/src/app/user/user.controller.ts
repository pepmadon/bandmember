import { Body, Controller, Get, Inject, Patch, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import {GetCurrentUser} from '../common/decorators';
import { JwtGuard } from '../auth/guard';
import { EditUserDto } from './dto/edit-user.dto';
import { UserService } from './user.service';


@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}


  @Get('me')
  getMe(@GetCurrentUser() user: User) {
    return user;
  }

  @Patch()
  editUser(
    @GetCurrentUser() userId: number,
    @Body() dto: EditUserDto,
  ) {
    return this.userService.editUser(userId, dto);
  }




}
