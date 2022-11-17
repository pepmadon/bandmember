import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { GetCurrentUserId } from '../common/decorators';
import { CreateStoreDto } from '../store/dto';
import { StoreService } from '../store/store.service';


@UseGuards(JwtGuard)
@Controller('stores')
export class StoreController {
    constructor(
        private storeService: StoreService
    ) {
        
    }
    
        // get all stores by id 
    
        @Get()
        getStores(@GetCurrentUserId() userId: number) {
            return this.storeService.getStores(
                userId,
              );
        } 
    
    
    
    
        // create store 
    
        @Post()
        CreateStore(
            @GetCurrentUserId() userId: number,
            @Body() dto: CreateStoreDto,
            ) {
            return this.storeService.createStore(
                userId,
                dto,
              );
        } 

}
