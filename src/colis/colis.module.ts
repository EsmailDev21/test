import { Module } from '@nestjs/common';
import { ColisController } from './colis.controller';
import { ColisService } from './colis.service';
import { PrismaService } from 'src/prisma.service';
@Module({
  imports: [],
  controllers: [ColisController],
  providers: [ColisService,PrismaService]
})
export class ColisModule {}
