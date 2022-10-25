import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { GetCurrentUser, GetCurrentUserId } from '../common/decorators';
import { JwtGuard } from '../auth/guard';
import { ProductService } from './product.service';
import {EditProductDto, CreateProductDto} from '../product/dto';


@UseGuards(JwtGuard)
@Controller('products')
export class ProductController {

    
constructor(
    private productService: ProductService
) {
    
}

    // get all products by id 

    @Get()
    getProducts(@GetCurrentUser() userId: number) {
        return this.productService.getProducts(
            userId,
          );
    } 




    // create product 

    @Post()
    CreateProduct(
        @GetCurrentUser() userId: number,
        @Body() dto: CreateProductDto,
        ) {
        return this.productService.createProduct(
            userId,
            dto,
          );
    } 

}