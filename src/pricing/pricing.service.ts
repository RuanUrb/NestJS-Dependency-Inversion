import { Injectable } from '@nestjs/common';

@Injectable()
export class PricingService {
    supplyFunds(cost: number, tax: number){
        console.log(`Should charge $${cost*(1+tax)}.`)
    }
}
