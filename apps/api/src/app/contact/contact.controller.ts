import { Body, Controller, Get, Post } from '@nestjs/common';
import { Public } from '../common/decorators/public.decorator';
import { ContactService } from './contact.service';
//TODO refactor Public decorator 
import { CreateContactDto } from './dto/contact.dto';


@Controller('contact')
export class ContactController {

 

  
    constructor(
        private contactService: ContactService
    ) {}
  
  // add contact
  @Public()
  @Post()
  createContact( @Body() dto: CreateContactDto) {
    return this.contactService.createContact( dto);
  }

    // get all contact
    @Public()
    @Get()
    getContacts( ) {
      return this.contactService.getAllContacts( );
    }

}


