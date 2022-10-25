import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto';

@Injectable()
export class ProductService {

    constructor(
        private prisma: PrismaService,) {}

    //get product by id


    getProducts(userId: number) {

        return this.prisma.product.findMany({
            where: { 
                userId,
            },
            
        });

    }


    //create product by id


  async  createProduct(
        userId: number,
        dto: CreateProductDto
        ) {
            const product =
            this.prisma.product.create({
                data: {
                    userId,
                    ...dto,
                },
            });
        return product;
    }


}
