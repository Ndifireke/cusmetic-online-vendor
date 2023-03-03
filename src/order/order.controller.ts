import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('order')
export class OrderController {

    @Get()
    getOrder(){
        return "get order";
    }

    @Post()
    postOrder(){
        return "post order";
    }

    @Patch()
    patchOrder(){
        return "Patch order"
    }

    @Delete()
    deleteOrder(){
        return "delete order"
    }

    @Get("all")
    getallOrder(){
        return [2,'frek',true,'welcome']
    }

    @Get(':name')
     getname(@Param('name') name):any{
         return name;
     }
}
