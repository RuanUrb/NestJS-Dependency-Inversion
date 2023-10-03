import { Module } from '@nestjs/common';
import { ShippingController } from './shipping.controller';
import { RoutingModule } from 'src/routing/routing.module';
import { PackageModule } from 'src/package/package.module';

@Module({
  controllers: [ShippingController],
  imports: [RoutingModule, PackageModule]
})
export class ShippingModule {}
