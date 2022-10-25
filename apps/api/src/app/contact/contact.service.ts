import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContactDto } from './dto/contact.dto';

@Injectable()
export class ContactService {

    constructor(
        private prisma: PrismaService,) {}
     // create contact
 
    async createContact(

        dto: CreateContactDto,
        ) {
            const contact =
            await this.prisma.contactMessage.create({
              data: {
                ...dto,
              },
            });
      
          return contact;
    } 

    getAllContacts() {

     return  this.prisma.contactMessage.findMany();
    }

}
