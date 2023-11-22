import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { DataSource, DeepPartial } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserModel, LoginModel } from '../models/user.model';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    ) {}

  @Get('test')
  test(@Query() id: string) : string {
    return this.userService.test(id);
  }

  @Post('create')
  async createUSer(@Body() input: CreateUserModel) : Promise<User> {
    return this.userService.createUser(input);
  }

  @Post('/login')
  async login(@Body() input: LoginModel) : Promise<string> {
    const test = await this.userService.login(input);
    return test;
  }
}