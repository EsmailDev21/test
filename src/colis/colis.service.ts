import { Injectable } from '@nestjs/common';
import { Colis, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ColisService {
  /**
   *
   */
  constructor(private readonly prismaService:PrismaService) {
    //super();
    
  }
  async getColisById(id:string): Promise<Object> {
    return await this.prismaService.colis.findUnique({
      where:{
        id
      },
      include:{user:true}
    })
  } 
  async getAllColis():Promise<Object[]>{
    return await this.prismaService.colis.findMany({
      include:{user:true}
    })
  }
  async createColis(data:{userId:string,createdAt?:Date}):Promise<any>{
    return await this.prismaService.colis.create({
      data:{
        userId:data.userId,
        createdAt:data.createdAt
      }
    })
  }
  async validateColis(id:string):Promise<any>{
   return await this.prismaService.colis.update({
      where:{
        id
      },
      data:{
        arrived:true,
        arrivedAt:new Date()
      }
    })
  }
  async deleteColis(id:string):Promise<any>{
    return await this.prismaService.colis.delete({
      where:{
        id
      }
    })
  }
}
