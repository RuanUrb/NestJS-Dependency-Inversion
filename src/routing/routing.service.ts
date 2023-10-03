import { Injectable } from '@nestjs/common';
import { PricingService } from 'src/pricing/pricing.service';

@Injectable()
export class RoutingService {
    constructor(private pricingService: PricingService){}

    handleLocation(distance: number){
        const distanceCost = distance*0.1
        console.log(`Shipping cost to your location disregarding default fees: $${distanceCost}`)
        this.pricingService.supplyFunds(distanceCost, 0.1)
        return {distance}
    }
}
