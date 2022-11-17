import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStoreDto } from '../store/dto';

@Injectable()
export class StoreService {
    constructor(
        private prisma: PrismaService,) {}

    //get store by id


    getStores(userId: number) {

        return this.prisma.store.findMany({
            where: { 
                userId,
            },
            
        });

    }


    //create store by id


  async  createStore(
        userId: number,
        dto: CreateStoreDto
        ) {
            const store =
            this.prisma.store.create({
                data: {
                    userId,
                    ...dto,
                },
            });
        return store;
    }



}
