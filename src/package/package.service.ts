import { Injectable } from '@nestjs/common';
import { PricingService } from 'src/pricing/pricing.service';

@Injectable()
export class PackageService {
    constructor(private pricingService: PricingService){}

    getPackageData(weight: number, isFragile: boolean){
        const baseShippingCost = (1+Number(isFragile))*weight
        console.log(`Package base shipping cost is $${baseShippingCost}`)
        this.pricingService.supplyFunds(baseShippingCost, 0.1)
        return {weight, isFragile}
    }
}
