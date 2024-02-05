import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ColisModule } from './colis/colis.module';

@Module({
  imports: [UserModule,ColisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
