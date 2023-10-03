import { Controller, Get } from '@nestjs/common';
import { PackageService } from 'src/package/package.service';
import { RoutingService } from 'src/routing/routing.service';

@Controller('shipping')
export class ShippingController {
    constructor(private routingService: RoutingService, private packageService: PackageService){}

    retrievePackageData(){
        // INSERT API CONNECTION TO GET PACKAGE DATA
    }

    retrieveCustomerLocation(){
        // INSERT API CONNECTION TO FETCH CUSTOMER LOCATION AND CALCULATE DISTANCE
    }

    @Get()
    ship(){
        return [
            this.routingService.handleLocation(48),
            this.packageService.getPackageData(6, true)
        ]
    }
}
