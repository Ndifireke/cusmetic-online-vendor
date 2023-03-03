import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FragranceModule } from './fragrance/fragrance.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [FragranceModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
