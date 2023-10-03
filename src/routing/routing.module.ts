import { Module } from '@nestjs/common';
import { RoutingService } from './routing.service';
import { PricingModule } from 'src/pricing/pricing.module';

@Module({
  providers: [RoutingService],
  imports: [PricingModule],
  exports: [RoutingService]
})
export class RoutingModule {}
