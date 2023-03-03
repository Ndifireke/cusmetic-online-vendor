import { Body, Controller, Get, Param, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { get } from 'http';
import path from 'path/posix';
import { elementAt } from 'rxjs';
import { pathToFileURL } from 'url';
import { FragranceDTO } from './dto/createFragrance.dto';
import { FragranceService } from './fragrance.service';

@Controller('fragrance')
export class FragranceController {

    constructor(private fragranceservice: FragranceService){}

     @Get()
     getAll(){
         return this.fragranceservice.getOne();
     }



     @Get()
     getnameId(@Param('id') nameId):any{
         return nameId;
     }

     name
    size
    price
    discount

     @Post()
     @UsePipes(ValidationPipe)
     createFragrance(@Body() reqBody:FragranceDTO): any {
         return this.fragranceservice.store(reqBody);
     }
     @Put()
     updateFragrance(){
         return "My updates";
     }

     @Get()
     getMyName(@Param()Param:string[]){
         return this.fragranceservice.fragrances
     }



     

}
