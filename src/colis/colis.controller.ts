import { Body, Controller, Get, Param, Patch, Post,Delete } from '@nestjs/common';
import { ColisService } from './colis.service';
import { Prisma } from '@prisma/client';
@Controller("colis")
export class ColisController {
  constructor(private readonly colisService: ColisService) {}

  @Get(":id")
  async getColisById(@Param("id") id:string){
    return await this.colisService.getColisById(id)
  }
  @Get("")
  async getColis(){
    return await this.colisService.getAllColis();
  }
  @Post("")
  async createColis(@Body() data:{userId:string,createdAt?:Date}){
    return await this.colisService.createColis(data);
  }
  @Patch("/:id")
  async validateColis(@Param("id") id:string){
    return await this.colisService.validateColis(id);
  }
  @Delete("/:id")
  async deleteColis(@Param("id") id:string){
    return await this.colisService.deleteColis(id);
  }
}
