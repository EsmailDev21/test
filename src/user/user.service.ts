import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { NotFoundError } from 'rxjs';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {

    /**
     *
     */
    constructor(private readonly prismaService:PrismaService) {
        
    }

    
  async getUserById(id:string): Promise<User> {
    return await this.prismaService.user.findUnique({
        where:{id}
    })
  } 
  async getUserByEmail(email:string): Promise<User> {
    return await this.prismaService.user.findUnique({
        where:{email}
    })
  } 
  async getAllUsers():Promise<User[]>{
    return await this.prismaService.user.findMany();
  }
  async createUser(data:Prisma.UserCreateInput):Promise<User>{
    return await this.prismaService.user.create({
        data:{
            password:data.password,
            email:data.email,
            name:data.name
        }
    })
  }

  async signup(data:Prisma.UserCreateInput):Promise<User>{
    return await this.createUser(data)
  }

  async signin(email:string,password:string):Promise<User>{
    try {
      const user =await this.getUserByEmail(email);
      if(!user) {
           throw new NotFoundError("User not found")
      }
      if(user.password!=password){
        throw new UnauthorizedException("Bad credentials")

      }
      return user
    } catch (error) {
      throw new UnauthorizedException("Bad credentials "+error)
    }
  }
  
  async updateUser():Promise<any>{
    return null
  }
  async deleteUser():Promise<any>{
    return null
  }
}
