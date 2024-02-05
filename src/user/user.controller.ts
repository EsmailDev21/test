import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id")
  async getUserById(@Param("id") id:string){
    return await this.userService.getUserById(id)
  }
  @Get("")
  async getUsers(){
    return await this.userService.getAllUsers();
  }
  @Post("")
  async createUser(@Body() data:Prisma.UserCreateInput){
    return await this.userService.createUser(data);
  }
  @Post("/auth/signin")
  async signin(@Body() {email,password}:{email:string,password:string}){
    return await this.userService.signin(email,password);
  }
  @Post("/auth/signup")
  async signup(@Body() data:Prisma.UserCreateInput){
    return await this.userService.signup(data);
  }
}
