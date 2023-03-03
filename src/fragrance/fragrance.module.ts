import { Module } from '@nestjs/common';
import { FragranceService } from './fragrance.service';
import { FragranceController } from './fragrance.controller';

@Module({
  providers: [FragranceService],
  controllers: [FragranceController]
})
export class FragranceModule {}
