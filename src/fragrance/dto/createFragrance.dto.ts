import { IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class FragranceDTO{
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsNumberString()
    @IsNotEmpty()
    price:number;
    
    @IsNotEmpty()
    size:number;

    @IsNotEmpty()
    discount:boolean;
    
    @IsNotEmpty()
    stock:number;
}