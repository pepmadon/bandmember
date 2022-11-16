import {
    IsOptional,
    IsString,
  } from 'class-validator';
  
  export class EditStoreDto {
    @IsString()
    @IsOptional()
    name?: string;
  
    @IsString()
    @IsOptional()
    description?: string;
  
    @IsString()
    @IsOptional()
    link?: string;
  }