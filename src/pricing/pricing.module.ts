import { Module } from '@nestjs/common';
import { PricingService } from './pricing.service';

@Module({
  providers: [PricingService],
  exports: [PricingService] // makes the pricing service available to another modules
})
export class PricingModule {}
