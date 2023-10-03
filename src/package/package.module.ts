import { Module } from '@nestjs/common';
import { PackageService } from './package.service';
import { PricingModule } from 'src/pricing/pricing.module';

@Module({
  providers: [PackageService],
  imports: [PricingModule],
  exports: [PackageService]
})
export class PackageModule {}
