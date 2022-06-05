import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './user.entity';
import { UsersDto } from './dto/users.dto';
import { ValidationPipe } from './users.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('listusers')
  async listUsers(): Promise<UserEntity[] | null> {
    return await this.userService.listUsers();
  }

  @Post('createuser2')
  // async createUser(@Body() user: UserEntity): Promise<UserEntity> {
  //   return await this.userService.createCustomUser(user);
  // }
  async createUser(
    @Body(new ValidationPipe()) UsersDto: UsersDto,
  ): Promise<UserEntity> {
    return await this.userService.createCustomUser(UsersDto);
  }

  @Get(':id')
  async user(@Param('id') id: string): Promise<UserEntity> {
    return await this.userService.getUser(id);
  }
}
