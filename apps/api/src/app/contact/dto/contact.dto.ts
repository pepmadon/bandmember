import {IsString, IsNotEmpty, IsOptional, IsEmail} from 'class-validator';

export class CreateContactDto {



  @IsString()
  @IsOptional()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email : string;

  @IsString()
  @IsOptional()
  message: string;


}

