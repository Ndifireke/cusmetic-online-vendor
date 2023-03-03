import { Injectable } from '@nestjs/common';
import { elementAt } from 'rxjs';
import { FragranceDTO } from './dto/createFragrance.dto';

@Injectable()
export class FragranceService {


fragrances = [];
    fragranceservice: any;

    getOne(){
        return this.fragrances ;
    }

    store(reqBody:FragranceDTO){
        this.fragrances.push(reqBody)
        return reqBody;
    }
    findByName(fragranceName:string){
        return this.fragrances = this.fragranceservice.find(elementAt);{
        }
        return this.fragranceservice.find
    }

    deleteByName(fragranceName:string){
        this.fragrances = this.fragranceservice.filter(elementAt);{
            return elementAt.name != fragranceName
        }
        return this.fragranceservice.find
    }

}
